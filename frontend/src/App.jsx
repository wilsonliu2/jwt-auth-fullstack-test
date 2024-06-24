import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UserDetail from "./components/UserDetail";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Logout />
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user-details" element={<PrivateRoute />}>
            <Route path="" element={<UserDetail />} />
          </Route>
          <Route path="/" element={<Navigate to="/user-details" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
