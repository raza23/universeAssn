import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostDetail(props) {
  const [postDetail, setPostDetail] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getPostDetail();
  });

  const getPostDetail = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${props.post.id}/comments`
    )
      .then(res => res.json())
      .then(data => setPostDetail(data));
  };

  console.log("props", props);
  console.log(postDetail);

  const postComments = postDetail.map(comment => {
    return (
      <div key={comment.id}>
        <hr></hr> <p>{comment.body}</p>
        <hr></hr>
      </div>
    );
  });

  return (
    <div className="PostDetail">
      <div className="ActualPost">
        <h2>Post Details</h2>
        <h4>Title:{props.post.title}</h4>
        <p>Body:{props.post.body}</p>
        <Link to={`/user/${props.user.id}`}>
          <p>-{props.user.name}</p>
        </Link>
      </div>
      <div className="Comments">
        <h2>Comments</h2>
        <p>{postComments}</p>
      </div>
    </div>
  );
}

export default PostDetail;
