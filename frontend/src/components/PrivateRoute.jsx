import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authService from "../services/AuthService";

// PrivateRoute component to protect routes that require authentication
const PrivateRoute = () => {
  // Get the current user from the authentication service
  const user = authService.getCurrentUser();

  // If a user is authenticated, render the Outlet to display the nested route's content
  // If no user is authenticated, navigate to the login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
