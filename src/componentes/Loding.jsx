import React from "react";
function Loding() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "400px", width: "100vw" }}
    >
      <div
        className="spinner-border text-primary"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loding;
