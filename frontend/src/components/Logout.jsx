import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/api-routes";

export default function Logout() {
  const navigate = useNavigate();

  const handleClick = async () => {
    const id = JSON.parse(localStorage.getItem("uni-chat-data"))._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <Button onClick={handleClick}>
      <BiPowerOff /> Logout
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  background-color: #ca1429d7;
  color: #ffffff;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.2rem;
    color: #ebe7ff;
  }
`;
