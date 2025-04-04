import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Siderbar({ seletedTap, setSeletedTap, isOpen, setIsopen }) {
  return (
    <div
      className={`d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar ${
        isOpen === "open" ? "open" : "close"
      }`}
      style={{ width: "180px" }}
    >
      <div className="d-flex align-items-center justify-content-between  mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">My-Post</span>

        <AiOutlineClose
          className="ms-4 fs-4 closeIcone"
          onClick={() => setIsopen("close")}
        />
      </div>

      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSeletedTap("Home")}>
          <Link
            to="/"
            className={`nav-link text-white ${
              seletedTap === "Home" && `active`
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </Link>
        </li>
        <li onClick={() => setSeletedTap("Create Post")}>
          <Link
            to="/creactePoste"
            className={`nav-link text-white ${
              seletedTap === "Create Post" && `active`
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Create Post
          </Link>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Siderbar;
