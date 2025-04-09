import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Header({ setIsopen }) {
  return (
    <header className="header text-bg-dark">
      <div className="container">
        <div className="flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start">
          <ul className="mb-2 nav col-12 col-lg-auto mb-md-0">
            <li onClick={() => setIsopen("open")}>
              <IoMdMenu className="mt-2 fs-1 pointer menu" />
            </li>
            <li className="headerItem">
              <Link to="/" className="px-2 text-white nav-link pointer">
                Home
              </Link>
            </li>
            <li className="headerItem">
              <Link
                to="/creactePoste"
                className="px-2 text-white nav-link pointer"
              >
                Create Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
