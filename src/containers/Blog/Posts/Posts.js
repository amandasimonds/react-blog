import React, { Component } from "react";
// import { withRouter } from "react-router-dom"
import { Route } from "react-router-dom"

import axios from "../../../axios";

import Post from "../../../components/Post/Post"
import "./Posts.css"
import FullPost from "../FullPost/FullPost"

class Posts extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props)
        axios.get("/posts")
            .then(response => {
                //use slice to only get posts 1-4
                const posts = response.data.slice(0, 4)
                const updatedPosts = posts.map(post => {
                    return {
                        //distribute property of post
                        ...post,
                        //add new property
                        author: "Max"
                    }
                })
                //we call setstate inside the then block, to prevent js running the rest of the code before getting the data
                this.setState({ posts: updatedPosts });
                console.log(response);
            })
            .catch(error => {
                console.log(error)
                // set the state to error so that it shows a something went wrong" message
                // this.setState({ error: true })
            })
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({pathname: "/posts/" +id})
        //push allows to you push a page on a stack of pages (for going forward and backward), called "navigating progammatically"
        this.props.history.push("/posts/" + id)
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    //key should always be on outmost element of your loop
                    //<Link to={"/posts/" + post.id} key={post.id} >
                    <Post
                        title={post.title}
                        author={post.author}
                        //this can also be used to correctly pass props through a route
                        {...this.props}
                        clicked={() => this.postSelectedHandler(post.id)} />
                    //</Link>);
                )
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                {/* here is a nested route! */}
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts

// use this to get access to router related props
// export default withRouter(Posts)

