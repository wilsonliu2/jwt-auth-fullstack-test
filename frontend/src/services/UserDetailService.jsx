import axios from "axios";
import authService from "./AuthService";

const API_URL = "http://localhost:8080/user-details";

// Function to create a new user detail
const createUserDetail = (detail) => {
  // Get the current authenticated user from the auth service
  const user = authService.getCurrentUser();
  // Send a POST request to the user details endpoint with the new detail

  return axios.post(
    API_URL,
    { detail }, // Payload containing the new detail
    {
      headers: {
        Authorization: `Bearer ${user.jwt}`, // Set the Authorization header with the user's JWT
      },
    }
  );
};

// Function to get the list of user details
const getUserDetails = () => {
  // Get the current authenticated user from the auth service
  const user = authService.getCurrentUser();
  // Send a GET request to the user details endpoint to retrieve the user details
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${user.jwt}`,
      "Content-Type": "application/json",
    },
  });
};

export default {
  createUserDetail,
  getUserDetails,
};
