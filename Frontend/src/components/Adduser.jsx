import { useState } from "react";
import "./style.css";

export const Adduser = () => {
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

    fetch("http://localhost:3500/users/create", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="user">Add User Here</h1>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="firstName"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="lastName"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Name Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Age
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="age"
              className="form-control"
              id="inputPassword"
              placeholder="Enter Age Here"
              onChange={handlechange}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              name="email"
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
