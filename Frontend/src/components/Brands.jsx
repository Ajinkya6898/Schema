import React, { useState, useEffect } from "react";

import axios from "axios";

const APIURL = "http://localhost:3500/brands";
function Brands() {
  const [user, setUser] = useState([]);

  const getData = axios.get(APIURL).then((res) => setUser(res.data));

  return (
    <main>
      <h1 className="user">Brands List</h1>
      <div className="main-box">
        {user.map((user) => (
          <div className="box">
            <p class="h6">Brand Name : {user.brandName}</p>
            <p class="h6">Founder Name : {user.foundername}</p>
            <p class="h6">Category : {user.category}</p>
            <p class="h6">Formed In Year : {user.formedYear}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Brands;
