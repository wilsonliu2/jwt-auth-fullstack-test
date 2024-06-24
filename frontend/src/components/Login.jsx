import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthService";

// Login component for user authentication
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Handler function for login form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Call the login method from authService with username and password
    authService.login(username, password).then(
      () => {
        // On successful login, navigate to the user details page
        navigate("/user-details");
      },
      (error) => {
        console.error("Error logging in!", error);
      }
    );
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
