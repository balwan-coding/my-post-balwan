import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/Post-list-store";
function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="m-2 card" style={{ maxWidth: "39rem" }}>
      <span
        onClick={() => deletePost(post.id)}
        className="top-0 position-absolute deletIcon start-100 translate-middle badge rounded-pill bg-danger"
      >
        <MdDeleteForever />
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        {post.tags.map((tag) => (
          <span key={tag} className="m-1 badge text-bg-primary">
            #{tag}
          </span>
        ))}
      </div>
      <div className="alert alert-info">
        <span className="mx-2 badge bg-success">👍 {post.reactions.likes}</span>
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
