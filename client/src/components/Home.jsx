import React from "react";
import styled from "styled-components";
import jwt_decode from "jwt-decode";
import { Navigate, useNavigate } from "react-router-dom";

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;
const Logout = styled.button`
  background-color: #bf0e0e;
  color: #fff;
  border: transparent;
  margin: 10px;
  padding: 10px 18px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c14646;
  }

  &:active {
    transform: scale(0.85);
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let email = "";

  if (token) {
    const decodedToken = jwt_decode(token);
    email = decodedToken.email;
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <HomeContainer>
      <h1>Hello {email} and Welcome to the home!</h1>
      <Logout onClick={logout}>Logout</Logout>
    </HomeContainer>
  );
};

export default Home;
