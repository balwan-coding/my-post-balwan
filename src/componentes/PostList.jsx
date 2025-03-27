import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostsListsItem } from "../store/Post-list-store";
import Msg from "./Msg";
import Loding from "./Loding";

function PostList() {
  const { fetching, postList } = useContext(PostsListsItem);

  return (
    <div className="flex-wrap d-flex align-items-center justify-content-center">
      {fetching && <Loding />}
      {!fetching && postList.length === 0 && <Msg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
