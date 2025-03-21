import React from "react";

function Footer() {
  return (
    <footer className="footer myFooter bg-dark text-secondary  d-flex flex-wrap justify-content-between align-items-center py-3  border-top ">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <svg className="bi" width="30" height="24">
            <use xlinkHref="#bootstrap"></use>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-secondary">© 2024 Company, Inc</span>
      </div>
    </footer>
  );
}

export default Footer;
