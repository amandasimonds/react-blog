import React, { Component } from 'react';
//import axios from "axios";
//importing the instance instead of default axios
import {NavLink, Route, Switch, Redirect} from "react-router-dom"

import Posts from "./Posts/Posts"
import asyncComponent from "../../hoc/asyncComponent"
// import NewPost from "./NewPost/NewPost"
import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
    //whatever comes inbetween the paranthese below will only be inported when the function is executed, which is when this const is used somewhere
    return import("./NewPost/NewPost");
})

class Blog extends Component {

    state ={
        auth: true
    }
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:"#fa923f",
                                    textDecoration:"underline"
                                }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                {/* //without "exact" the component will render if it has that route as a prefix */}
                {/* render is generally used for short messages */}
                {/* <Route path="/" render={() => <h1>Home2</h1>}/> */}


                {/* Switch tells the website to only load one of the routes from a given set of routes at a time */}
                {/* the order matters - it stops after finding the first fitting route */}
                <Switch>

                {/* this is a guard - to control whether the user is allowed to access the page or not */}
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}

                <Route path="/posts" component={Posts} />

                {/* this will redirect to a "not found" page. will nto work with the redirect from "/" becasue that is a prefix that will catch it before anything else does */}
                <Route render={()=> <h1>404 not found</h1>}/>

                {/* redirect must be used inside the switch statement */}
                {/* <Redirect from="/" to="/posts"/> */}
                {/* <Route path="/" component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;