import React, { useContext, useEffect } from "react";
import Post from "./Post";
import { PostList as PostsListsItem } from "../store/Post-list-store";
import Msg from "./Msg";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostsListsItem);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  }, []);
  return (
    <center className="d-flex flex-wrap m-2">
      {postList.length === 0 && <Msg />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </center>
  );
}

export default PostList;
