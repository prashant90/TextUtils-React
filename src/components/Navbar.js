import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
      data-bs-theme={`${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switchCheckDefault"
              onClick={props.toggleMode}
            />
            <label className="form-check-label" htmlFor="switchCheckDefault">
             Enable DarkMode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired };
Navbar.defaultProps = { title: 'Set title here', aboutText: 'About text here' }
