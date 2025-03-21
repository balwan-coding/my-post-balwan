import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

function CeratePost() {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const userTitleElement = useRef();
  const userBodyElement = useRef();
  const userReactionsElement = useRef();
  const userTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const userTitle = userTitleElement.current.value;
    const userBody = userBodyElement.current.value;
    const views = userReactionsElement.current.value;
    const userTags = userTagsElement.current.value.split(" ");
    addPost(userId, userTitle, userBody, views, userTags);
    userIdElement.current.value = "";
    userTitleElement.current.value = "";
    userBodyElement.current.value = "";
    userReactionsElement.current.value = "";
    userTagsElement.current.value = "";
  };
  return (
    <form className="m-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user id..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Your Topic
        </label>
        <input
          ref={userTitleElement}
          type="text"
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Containt
        </label>
        <textarea
          ref={userBodyElement}
          type="text"
          className="form-control"
          id="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Pepol Reaction
        </label>
        <input
          ref={userReactionsElement}
          type="text"
          className="form-control"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Your #tags
        </label>
        <input
          ref={userTagsElement}
          type="text"
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
}

export default CeratePost;
