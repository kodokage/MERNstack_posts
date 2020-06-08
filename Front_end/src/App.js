import React, { Component } from 'react';
//import { Route } from 'react-router';
import AddPost from './components/AddPost';
import PostCards from './components/PostCards';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  './bootstrap.min.css'

export class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="/">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
            <li className="active">
            <Link to="/">Home</Link>
            </li>
            <li className="active">
            <Link to="/addPost">Add Post</Link>
            </li>
            <li className="active">
            <Link to="/postCards">Posts</Link>
            </li>
            </ul>
        </div>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/addPost" exact component={AddPost} />
        <Route path="/postCards" exact component={PostCards} />
      </div>
      </Router>
    )
  }
}

export default App
