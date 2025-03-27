import React from "react";

function Msg() {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">There Are No Post</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            There are no posts available here at the moment. If you want to add
            a post, you need to create one. Click on the "Create Post" button to
            get started. Once you create a post, it will be visible here. Start
            sharing your thoughts now!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Msg;
