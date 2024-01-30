import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/create"}
              >
                Create User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/users"}>
                All Users
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/delete"}>
                Delete User
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to={"/update"}>
                Update User
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link " aria-disabled="true" to={"/findOne"}>
                Find One
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
