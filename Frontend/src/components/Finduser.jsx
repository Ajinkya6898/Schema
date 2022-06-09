import React, { useState } from "react";
import "./style.css";
import axios from "axios";

function Finduser() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState();

  function getData(val) {
    console.warn(val.target.value);
    setData(val.target.value);
  }

  const getUsers = () => {
    const APIURL = `http://localhost:3500/users/${data}`;
    axios.get(APIURL).then((res) => setUser(res.data));
    console.log(user);
  };

  return (
    <main>
      <div className="container">
        <h1 className="user">Get User by ID</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            ID
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="email"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Email Here"
              onChange={getData}
            />
          </div>
        </div>
        <button className="submit" onClick={getUsers}>
          Get Users
        </button>
      </div>

      <div className="main-box">
        {user.map((user) => (
          <div className="box">
            <p class="h6">First Name : {user.firstName}</p>
            <p class="h6">Last Name : {user.lastName}</p>
            <p class="h6">Age : {user.age}</p>
            <p class="h6">Email : {user.email}</p>
            <p class="h6">ID : {user._id}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Finduser;
