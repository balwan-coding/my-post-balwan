import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className=" card m-3" style={{ width: "45rem" }}>
      <span
        onClick={() => deletePost(post.id)}
        className="position-absolute top-0 deletIcon start-100 translate-middle badge rounded-pill bg-danger"
      >
        <MdDeleteForever />
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary m-1">
            #{tag}
          </span>
        ))}
      </div>
      <div className="alert alert-info">
        <span className="badge bg-success mx-2">👍 {post.reactions.likes}</span>
        <span className="badge bg-danger">
          👎 {post.reactions.dislikes}
        </span>{" "}
        Pepole reactions{" "}
        <span className="badge text-bg-primary">{post.views}</span>
      </div>
    </div>
  );
}

export default Post;
