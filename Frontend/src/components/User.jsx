import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function User() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3500/users`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  };

  return (
    <main>
      <h1 className="user">Users List</h1>
      <button className="submit" onClick={() => navigate("/adduser")}>
        Add User
      </button>
      <div className="main-box">
        {user.map((user, i) => (
          <div className="box" key={i}>
            <p className="h6">First Name : {user.firstName}</p>
            <p className="h6">Last Name : {user.lastName}</p>
            <p className="h6">Age : {user.age}</p>
            <p className="h6">Email : {user.email}</p>
            <p className="h6">Add : {user.address}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default User;
