import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom"

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (

      //if you are using a domain name, you have to set the basename url for the routes to work
      // <BrowserRouter basename ="/my-app">

      <BrowserRouter>
        <div className="App">
         <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
