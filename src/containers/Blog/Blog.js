import React, { Component } from 'react';
//import axios from "axios";
//importing the instance instead of default axios
import axios from "../../axios"

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state={
        posts:[],
        selectedPostId: null,
        error: false
    }

    componentDidMount(){
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
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch(error => {
                // set the state to error so that it shows a something went wrong" message
                this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign:"center"}}>Something went wrong</p>
        if (!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                    />
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;