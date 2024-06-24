import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Handler function for registration form submission
  const handleRegister = (e) => {
    e.preventDefault();

    // Call the register method from authService with username, password, and name
    authService.register(username, password, name).then(
      () => {
        navigate("/login");
      },
      (error) => {
        console.error("Error registering", error);
      }
    );
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
