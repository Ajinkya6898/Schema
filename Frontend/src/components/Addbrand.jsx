import { useState } from "react";
import "./style.css";

export const Addbrand = () => {
  const [form, setForm] = useState({});
  const handlechange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3500/brands", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add Brand Here</h1>

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
            Founder Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="foundername"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Category
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="category"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Age Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Formed In Year
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="formedYear"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Email Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <input className="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
