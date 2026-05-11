// import React from 'react'

// const Login = () => {
//   return (
//     <div>login</div>
//   )
// }

// export default Login

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMP login check
    if (username && password) {
      alert("Login Successful");
      navigate("/home"); // home page
    } else {
      alert("Please enter username and password");
    }
  };

  const handleNavigateToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="d-flex vh-100">

      {/* LEFT IMAGE */}
      <div className="w-50">
        <img
          src="sign-in-image.avif"
          alt="Login"
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-50 d-flex flex-column justify-content-center align-items-center">
        <Form style={{ width: "70%" }} onSubmit={handleLogin}>

          <h3 className="mb-4 text-center">Login</h3>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button type="submit" className="w-100">
            Login
          </Button>

        </Form>

        <div className="mt-3">
          Don’t have an account?{" "}
          <span
            onClick={handleNavigateToSignup}
            className="text-primary cursor-pointer text-decoration-underline"
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
}
