import React, { useState } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function LoginForm() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    style: {
      fontSize: "1.5rem",
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
    }
  };
  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error("Username should be greater than 3 characters", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Pasword should be greater equal or greater than 8 characters",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Container>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="brand">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              placeholder="ConfirmPassword"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Submit</button>
            <span>
              Already have an account? <Link to={Register}>Register</Link>
            </span>
          </div>
        </form>
      </Container>
      <ToastContainer />
    </>
  );
}

const Container = styled.div`
  * {
    font-family: sans-serif;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bolder;
    background: #ec2acf;
    padding: 1rem;
  }
  form {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(254, 247, 46);
    resize: both;
    max-width: 50;
  }
  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    flex-direction: column;
    background: rgb(254, 246, 12);
    border: 2px solid rgb(254, 12, 12);
    padding: 10rem 5rem;
    box-shadow: 2px 2px 10px#040504, -2px -2px 10px #040504;
    border-radius: 4rem;
    transition: all 0.4s ease-in-out;
    &:hover {
      box-shadow: 5px 5px 15px#040504, -5px -5px 15px #040504;
    }
  }
  input {
    text-decoration: none;
    background: transparent;
    border: none;
    font-size: 2rem;
    padding: 2rem 5rem;
    padding-bottom: 1rem;
    border-radius: 1rem;
    border: 0.1rem solid #36fc24;
    outline: none;
    transition: all 0.3s ease-in-out;
    box-shadow: 2px 2px 4px #232623;
    &:hover {
      border: 0.2rem solid #2110a3;
      outline: none;
      box-shadow: 3px 3px 5px #0c0b0c;
      border-radius: 2rem;
      cursor: pointer;
    }
  }
  button {
    margin-top: 2.4rem;
    background: transparent;
    font-size: 2rem;
    padding: 1rem 2rem;
    border-radius: 1.1rem;
    font-weight: bold;
    box-shadow: 3px 3px 3px #2e302e;
    color: #2e302e;
    &:hover {
      box-shadow: 1.5px 1.5px 3px #232623;
    }
  }
  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: limegreen;
    }
  }
  span {
    font-weight: bold;
    font-size: 2rem;
    text-transform: uppercase;
  }
`;

export default LoginForm;
