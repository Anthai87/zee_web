import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src="./logo-v1.png" alt="" className="img-fluid" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span>
              <i id="bar" className="fas fa-bars "></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ms-auto">
              {/* ****  Dropdown  **** */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                  <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/products">
                      Fashion
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#!">
                      Sorteringsposer
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dropdown */}

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              {/* ****  Dropdown  **** */}

              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Follow Us
                  <i className="fas fa-angle-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.instagram.com/zeecycled/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="https://www.facebook.com/OpbrugGenbrug"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Dropdown */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;