import React, { useState, useEffect } from "react";

import axios from "axios";

const APIURL = "http://localhost:3500/users";
function User() {
  const [user, setUser] = useState([]);

  const getData = axios.get(APIURL).then((res) => setUser(res.data));
  // console.log(user);
  return (
    <main>
      <h1 className="user">Users List</h1>
      <div className="main-box">
        {user.map((user) => (
          <div className="box">
            <p class="h6">First Name : {user.firstName}</p>
            <p class="h6">Last Name : {user.lastName}</p>
            <p class="h6">Age : {user.age}</p>
            <p class="h6">Email : {user.email}</p>
            <p class="h6">ID : {user._id}</p>
            <p class="h6">Add : {user.addresses}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default User;
