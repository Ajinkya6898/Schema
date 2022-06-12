import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Products() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3500/products`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  };

  return (
    <main>
      <h1 className="user">Products List</h1>
      <button className="submit" onClick={() => navigate("/addproduct")}>
        Add Product
      </button>
      <div className="main-box">
        {user.map((user, i) => (
          <div className="box" key={i}>
            <p className="h6">Product Name : {user.productName}</p>
            <p className="h6">Brand Name : {user.brandName}</p>
            <p className="h6">Launch Date : {user.launchDate}</p>
            <p className="h6">Category : {user.category}</p>
            <p className="h6">Price : {user.price}</p>
            <p className="h6">Review : {user.review}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
