import React from "react";
import { IoMdMenu } from "react-icons/io";

function Header({ setIsopen, setSeletedTap, seletedTap }) {
  return (
    <header className="header  text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li onClick={() => setIsopen("open")}>
              <IoMdMenu className="fs-1 mt-2" />
            </li>
            <li>
              <a
                className="nav-link px-2 text-white"
                onClick={() => setSeletedTap("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setSeletedTap("Create Post")}
                href="#"
                className="nav-link px-2 text-white"
              >
                Create Post
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-2 text-white">
                About
              </a>
            </li>
          </ul>

          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
