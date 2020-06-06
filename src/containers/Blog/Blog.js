import React, { Component } from 'react';
//import axios from "axios";
//importing the instance instead of default axios
import {NavLink, Route, Switch} from "react-router-dom"

import Posts from "./Posts/Posts"
import NewPost from "../Blog/NewPost/NewPost"
import './Blog.css';


class Blog extends Component {

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
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;