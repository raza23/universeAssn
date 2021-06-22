import React from "react";
import styled from "styled-components";

export default function Post(props) {
  const HeadlineText = styled.p`
    position: absolute;
    height: 4px;
    left: 5%;
    // right: 18%;
    top: 0px;

    font-family: "Poppins", sans-serif;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    /* or 81% */

    // text-align: center;
    mix-blend-mode: normal;
    opacity: 0.8;

    color: #ffffff;
  `;

  const SubHeadlineText = styled.p`
    position: absolute;
    height: 64px;
    // left: 5%;
    // right: 18%;
    top: 30px;
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

  const TimeText = styled.p`
    position: absolute;
    height: 0px;
    left: 5%;
    // right: 18%;
    top: 100px;

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

  return (
    <div>
      <HeadlineText>{props.title}</HeadlineText>
      <SubHeadlineText>{props.body}</SubHeadlineText>
      <TimeText>{props.user}</TimeText>
    </div>
  );
}
