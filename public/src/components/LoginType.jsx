import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StudentLogo from "../assets/student-person-svgrepo-com.svg";
import FacultyLogo from "../assets/teacher-svgrepo-com.svg";
import AdminLogo from "../assets/admin-tools-svgrepo-com.svg";

function LoginType({ handleLoginType, loginType }) {
  const handleTypeChange = (type) => {
    handleLoginType(type);
  };
  return (
    <Container>
      <div
        style={{
          padding: "1em",
          background:
            "linear-gradient(to right, #1cf91c, #edff27, #ffae16, #1d0c4e, #e30d0d, #e31cf9)",
          borderRadius: "50%",
        }}
      >
        <div className="StudentButton">
          <Link to="#" onClick={() => handleTypeChange("student")}>
            <img className="button_student" src={StudentLogo} alt="Student" />
          </Link>
        </div>
      </div>
      <div
        style={{
          padding: "1em",
          background:
            "linear-gradient(to right, #1cf91c, #edff27, #ffae16, #1d0c4e, #e30d0d, #e31cf9)",
          borderRadius: "50%",
        }}
      >
        <div className="FacButton">
          <Link to="#" onClick={() => handleTypeChange("faculty")}>
            <img className="button_faculty" src={FacultyLogo} alt="Faculty" />
          </Link>
        </div>
      </div>
      <div
        style={{
          padding: "1em",
          background:
            "linear-gradient(to right, #1cf91c, #edff27, #ffae16, #1d0c4e, #e30d0d, #e31cf9)",
          borderRadius: "50%",
        }}
      >
        <div className="AdminButton">
          <Link to="#" onClick={() => handleTypeChange("admin")}>
            <img className="button_admin" src={AdminLogo} alt="Admin" />
          </Link>
        </div>
      </div>
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
  background: linear-gradient(
    to right,
    aqua,
    rgb(36, 252, 94),
    rgb(254, 247, 46),
    rgb(255, 143, 23),
    rgb(253, 40, 125)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 12rem;
  .button_student {
    height: 10em;
  }

  .button_faculty {
    height: 10em;
  }

  .button_admin {
    height: 9.5em;
  }

  a {
    text-decoration: none;
  }
  .StudentButton,
  .FacButton,
  .AdminButton {
    background: #ffffff;
    padding: 15em;
    border-radius: 50%;
    transition: scale 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      background 0.5s ease-in-out;
  }
  .StudentButton:hover,
  .FacButton:hover,
  .AdminButton:hover {
    scale: 1.2;
    box-shadow: 10px 10px 20px #edff21, -10px -10px 20px #edff21;
    background: rgb(98, 211, 255);
  }

  .StudentButton:hover img,
  .FacButton:hover img,
  .AdminButton:hover img {
    transform: scale(1.2);
    transition: transform 0.3s 0.2s ease-in-out;
    /* Set the duration and easing of the img scale transition */
  }
  .StudentButton:hover::after {
    content: "Click here to login as a Student";
    position: absolute;
    bottom: -2em;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0.5em;
    border-radius: 0.5em;
    font-size: 1.2em;
    color: black;
    pointer-events: none;
    /* Ensures the tooltip doesn't interfere with clicking the button */
  }

  .FacButton:hover::after {
    content: "Click here to login as a Faculty";
    position: absolute;
    bottom: -2em;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0.5em;
    border-radius: 0.5em;
    font-size: 1.2em;
    color: black;
    pointer-events: none;
  }

  .AdminButton:hover::after {
    content: "Click here to login as a Admin";
    position: absolute;
    bottom: -2em;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0.5em;
    border-radius: 0.5em;
    font-size: 1.2em;
    color: black;
    pointer-events: none;
  }
`;

export default LoginType;
