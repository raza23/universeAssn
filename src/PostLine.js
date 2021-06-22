import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Post from "./Post";

function PostLine(props) {
  const OnePost = styled.div`
    position: relative;
    width: 300px;
    height: 160px;
    display: inline-block;

    padding: 20px 20px 10px 10px;
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
  console.log("postline", props);

  const allPosts = props.posts.map(post => {
    return (
      <Column>
        <OnePost>
          <Link to={`/${post.id}`}>
            <Post
              postkey={post.key}
              userID={post.userId}
              title={post.title}
              body={post.body}
              userInfo={props.users}
              // eventdate={date}
            />
          </Link>
        </OnePost>
      </Column>
    );
  });

  return <div>{allPosts}</div>;
}

export default PostLine;
