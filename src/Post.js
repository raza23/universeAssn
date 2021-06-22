import React, { useState, useEffect } from "react";

import styled from "styled-components";

export default function Post(props) {
  const [UserInfo, setUserInfo] = useState([]);

  useEffect(() => {
    //* makes the fetch
    getUserInfo();
  }, []);

  const getUserInfo = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.userID}/`)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  };

  console.log(UserInfo);

  const TitleText = styled.p`
    position: absolute;
    height: 4px;
    left: 5%;
    padding: 0px 5px;

    // right: 18%;
    top: 10px;

    font-family: "Poppins", sans-serif;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* or 81% */

    // text-align: center;
    mix-blend-mode: normal;
    opacity: 1.8;

    color: #ffffff;
  `;

  const BodyText = styled.p`
    position: absolute;
    height: 64px;
    // left: 5%;
    // right: 18%;
    top: 50px;
    padding: 10px;

    font-family: "Poppins", sans-serif;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;
    /* or 81% */

    // text-align: center;

    color: #ffffff;
  `;

  const UserText = styled.p`
    position: absolute;
    height: 0px;
    left: 5%;
    // right: 18%;
    top: 130px;

    font-family: "Poppins", sans-serif;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* or 81% */

    // text-align: center;
    mix-blend-mode: normal;
    // opacity: 0.8;

    color: #ffffff;
  `;

  console.log(props.userID);

  return (
    <div>
      {/* <h4>Title:</h4> */}
      <TitleText>Title:{props.title}</TitleText>
      <BodyText>Body: {props.body}</BodyText>
      <UserText>{UserInfo.name}</UserText>
    </div>
  );
}
