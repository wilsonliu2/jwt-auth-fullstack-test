import axios from "axios";

const API_URL = "http://localhost:8080/auth/";

// Function to register a new user
const register = (username, password, name) => {
  // Send a POST request to the register endpoint with user details
  return axios.post(API_URL + "register", {
    username,
    password,
    name,
    role: "USER", // OR ADMIN
  });
};

// Function to login a user
const login = (username, password) => {
  // Send a POST request to the authenticate endpoint with username and password
  return axios
    .post(API_URL + "authenticate", {
      username,
      password,
    })
    .then((response) => {
      // If the response contains a JWT token, save it to localStorage
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

// Function to logout a user
const logout = () => {
  localStorage.removeItem("user");
};

// Function to get the currently logged-in user
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

// Export the authentication functions
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
