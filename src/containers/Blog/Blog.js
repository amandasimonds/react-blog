import React, { Component } from 'react';
//import axios from "axios";
//importing the instance instead of default axios
import axios from "../../axios"
import {Route} from "react-router"
import {Link} from "react-router-dom"

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-submit=true"
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                {/* //without "exact" the component will render if it has that route as a prefix */}
                {/* render is generally used for short messages */}
                {/* <Route path="/" render={() => <h1>Home2</h1>}/> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;