import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-link">
          User
        </Link>
        <Link to="/brand" className="nav-link">
          Brand
        </Link>
        <Link to="/product" className="nav-link">
          Product
        </Link>
        <form class="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default Navbar;
