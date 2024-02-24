import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StudentLogo from "../assets/student-person-svgrepo-com.svg";
import FacultyLogo from "../assets/teacher-svgrepo-com.svg";
import AdminLogo from "../assets/admin-tools-svgrepo-com.svg";

function LoginType() {
  return (
    <Container>
      <Link to="">
        <img src={StudentLogo} alt="Student" />
      </Link>
      <Link to="">
        <img src={FacultyLogo} alt="Faculty" />
      </Link>
      <Link to="">
        <img src={AdminLogo} alt="Admin" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: #878787;
  overflow: hidden;
  color: white;
  margin: 0px 0px;
  overflow: hidden;
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export default LoginType;
