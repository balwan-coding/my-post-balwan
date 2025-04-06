import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostsListsItem } from "../store/Post-list-store";
import Msg from "./Msg";
import Loding from "./Loding";

function PostList() {
  const { fetching, postList } = useContext(PostsListsItem);

  return (
    <center className="container my-4">
      {!fetching && <Loding />}
      {!fetching && postList.length === 0 && <Msg />}
      {!fetching && (
        <div className="row">
          {postList.map((post) => (
            <div
              className="mt-4 mb-4 d-flex flex-column justify-content-center align-items-center flex-wrap"
              key={post.id}
            >
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </center>
  );
}

export default PostList;
