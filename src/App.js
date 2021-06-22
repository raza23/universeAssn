import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { Spinner } from "react-bootstrap";
import PostLine from "./PostLine";
import PostDetail from "./PostDetail";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";

import "./App.css";

const UNIVERSE_URL = "https://jsonplaceholder.typicode.com/posts";
const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [userPosts, setUserPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getUserPosts();
    getUsers();
  }, []);

  const getUserPosts = () => {
    fetch(UNIVERSE_URL)
      .then(res => res.json())
      .then(data => setUserPosts(data));
  };

  const getUsers = () => {
    fetch(USERS_URL)
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <PostLine users={users} posts={userPosts} />}
          />
          <Route
            exact
            path="/:postId"
            render={props => {
              let selectedPost = userPosts.find(
                post =>
                  parseInt(post.id) === parseInt(props.match.params.postId)
              );

              let selectedUser = users.find(
                user => parseInt(user.id) === parseInt(selectedPost.userId)
              );
              return selectedPost !== undefined ? (
                <PostDetail user={selectedUser} post={selectedPost} />
              ) : (
                <Spinner />
              );
            }}
          />
          <Route
            exact
            path="/user/:userId"
            render={props => {
              let selectedUser = users.find(
                user =>
                  parseInt(user.id) === parseInt(props.match.params.userId)
              );

              return selectedUser !== undefined ? (
                <UserProfile user={selectedUser} posts={userPosts} />
              ) : (
                <Spinner />
              );
            }}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(App);
