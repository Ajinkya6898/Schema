import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Brands() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(`http://localhost:3500/brands`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  };

  return (
    <main>
      <h1 className="user">Brands List</h1>
      <button className="submit" onClick={() => navigate("/addbrand")}>
        Add Brand
      </button>
      <div className="main-box">
        {user.map((user, i) => (
          <div className="box" key={i}>
            <p className="h6">Brand Name : {user.brandName}</p>
            <p className="h6">Founder Name : {user.foundername}</p>
            <p className="h6">Category : {user.category}</p>
            <p className="h6">Formed In Year : {user.formedYear}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Brands;
