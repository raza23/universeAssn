import React, { useState, useEffect } from "react";
import PostLine from "./PostLine";

import "./App.css";

const UNIVERSE_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getUserPosts();
  }, []);

  const getUserPosts = () => {
    fetch(UNIVERSE_URL)
      .then(res => res.json())
      .then(data => setUserPosts(data));
  };

  return (
    <div className="App">
      <PostLine posts={userPosts} />
    </div>
  );
}

export default App;
