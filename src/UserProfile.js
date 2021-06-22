import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Post from "./Post";

export default function UserProfile(props) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getUserPosts();
  });

  const getUserPosts = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.user.id}/posts`)
      .then(res => res.json())
      .then(data => setUserPosts(data));
  };

  const OnePost = styled.div`
    position: relative;
    width: 300px;
    height: 160px;
    display: inline-block;

    padding: 10px 20px 10px 10px;
    border: 1px solid white;

    background: #001c34;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  `;

  const Column = styled.div`
    position: relative;

    float: left;
    width: 18.33%;
    padding: 10px 200px 10px 25px;

    // border: 1px solid blue;
    left: 00px;
    top: 1px;
  `;

  const allPosts = userPosts.map(post => {
    // console.log(post);

    return (
      <Column>
        <OnePost>
          <Link to={`/${post.id}`}>
            <Post
              postkey={post.key}
              userID={post.userId}
              title={post.title}
              body={post.body}
              //   userInfo={props.users}
              // eventdate={date}
            />
          </Link>
        </OnePost>
      </Column>
    );
  });

  console.log(userPosts);

  console.log(props);
  return (
    <div>
      <div className="UserProfile">
        <h1>{props.user.name}'s Posts</h1>
        {allPosts}
      </div>
    </div>
  );
}
