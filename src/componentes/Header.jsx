import React from "react";
import { IoMdMenu } from "react-icons/io";

function Header({ setIsopen, setSeletedTap, seletedTap }) {
  return (
    <header className="header text-bg-dark">
      <div className="container">
        <div className="flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start">
          <ul className="mb-2 nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
            <li onClick={() => setIsopen("open")}>
              <IoMdMenu className="mt-2 fs-1 pointer menu" />
            </li>
            <li>
              <a
                className="px-2 text-white nav-link pointer"
                onClick={() => setSeletedTap("Home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => setSeletedTap("Create Post")}
                href="#"
                className="px-2 text-white nav-link pointer"
              >
                Create Post
              </a>
            </li>

            <li>
              <a href="#" className="px-2 text-white nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
