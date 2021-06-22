import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";

function PostLine(props) {
  const OnePost = styled.div`
    position: relative;
    width: 200px;
    height: 160px;
    display: inline-block;
    padding: 1px;
    border: 1px solid white;

    background: #001c34;
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  `;

  const Column = styled.div`
    position: relative;

    float: left;
    width: 18.33%;
    padding: 4px 20px 40px 25px;

    // border: 1px solid blue;
    left: 00px;
    top: 1px;
  `;

  const allPosts = props.posts.map(post => {
    console.log(post);

    return (
      <Column>
        <OnePost>
          <Post
            postkey={post.key}
            user={post.userId}
            title={post.title}
            body={post.body}
            // eventdate={date}
          />
        </OnePost>
      </Column>
    );
  });

  return <div>{allPosts}</div>;
}

export default PostLine;
