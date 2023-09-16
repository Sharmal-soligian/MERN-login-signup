import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f5f5;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  & input {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    outline: none;
    font-size: 16px;
  }

  & button {
    margin-top: 10px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      const token = res.data?.token;
      localStorage.setItem("token", token);
      if (res && token) {
        navigate("/home");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <LoginContainer>
      <h1>Login</h1>

      <LoginForm action="POST" onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </LoginForm>
      <p>or</p>
      <Link to={"/signup"}>Not registered yet? click here to signup</Link>
    </LoginContainer>
  );
};

export default Login;
