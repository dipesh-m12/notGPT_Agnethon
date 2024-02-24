import React, { useState } from "react";
import LoginType from "../components/LoginType";
import styled from "styled-components";
import axios from "axios";
import LoginForm from "../components/LoginForm";

function Login() {
  const [loginType, SetLoginType] = useState("");
  const handleLoginType = (type) => {
    SetLoginType(type);
  };

  return (
    <Container>
      {/* {<LoginType handleLoginType={handleLoginType} loginType={loginType} />}; */}
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  p {
    position: absolute;
    font-weight: bold;
    top: 50vh;
    left: 50vw;
  }
`;

export default Login;
