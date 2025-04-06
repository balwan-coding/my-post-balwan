import React from "react";

function Loding() {
  return (
    <div className="d-flex loding-spin justify-content-center">
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
