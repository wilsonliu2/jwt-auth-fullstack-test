import React, { useState, useEffect } from "react";
import userDetailService from "../services/UserDetailService";

// UserDetail component to display and manage user-specific details
const UserDetail = () => {
  const [details, setDetails] = useState([]);
  const [newDetail, setNewDetail] = useState("");

  useEffect(() => {
    // Fetch user details from the service
    userDetailService.getUserDetails().then(
      (response) => {
        // On successful fetch, update the details state with the response data
        setDetails(response.data);
      },
      (error) => {
        console.error("Error fetching user details", error);
      }
    );
  }, []);

  // Handler function for creating a new user detail
  const handleCreateDetail = (e) => {
    e.preventDefault();
    // Call the createUserDetail method from the userDetailService with the new detail
    userDetailService.createUserDetail(newDetail).then(
      (response) => {
        // On successful creation, update the details state with the new detail and reset the newDetail state
        setDetails([...details, response.data]);
        setNewDetail("");
      },
      (error) => {
        console.error("Error creating user detail", error);
      }
    );
  };

  return (
    <div>
      <h2>User Details</h2>
      <form onSubmit={handleCreateDetail}>
        <div>
          <label>New Detail:</label>
          <input
            type="text"
            value={newDetail}
            onChange={(e) => setNewDetail(e.target.value)}
          />
        </div>
        <button type="submit">Add Detail</button>
      </form>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail.detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetail;
