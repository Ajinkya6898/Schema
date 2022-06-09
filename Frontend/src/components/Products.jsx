import React, { useState, useEffect } from "react";

import axios from "axios";

const APIURL = "http://localhost:3500/products";
function Products() {
  const [user, setUser] = useState([]);

  const getData = axios.get(APIURL).then((res) => setUser(res.data));

  return (
    <main>
      <h1 className="user">Products List</h1>
      <div className="main-box">
        {user.map((user) => (
          <div className="box">
            <p class="h6">Product Name : {user.productName}</p>
            <p class="h6">Brand Name : {user.brandName}</p>
            <p class="h6">Launch Date : {user.launchDate}</p>
            <p class="h6">Category : {user.category}</p>
            <p class="h6">Price : {user.price}</p>
            <p class="h6">ID : {user._id}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
