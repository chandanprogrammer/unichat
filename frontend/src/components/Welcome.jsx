import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(JSON.parse(localStorage.getItem("uni-chat-data")).username);
  }, []);

  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e6e6e6;
  flex-direction: column;
  letter-spacing: 0.5px;
  img {
    height: 15rem;
  }
  h1 {
    font-size: 35px;
    font-weight: 600;
  }
  h3 {
    font-size: 20px;
    margin-top: 18px;
    font-weight: 500;
  }
  span {
    color: #cd900bf1;
  }
`;
