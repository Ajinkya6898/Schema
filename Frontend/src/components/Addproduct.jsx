import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

export const Addproduct = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3500/products", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add Product Here</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Product Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="productName"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Brand Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="brandName"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            launch Date
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="launchDate"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            category
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="category"
              className="form-control"
              id="inputPassword"
              placeholder="Category"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Price
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="price"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Price Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <input className="submit" type="submit" value="Submit" />
        <button className="submit" onClick={() => navigate("/product")}>
          Product Page
        </button>
      </form>
    </div>
  );
};
