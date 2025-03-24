import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostsListsItem } from "../store/Post-list-store";
import Msg from "./Msg";
import Loding from "./Loding";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostsListsItem);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-center">
      {fetching && <Loding />}
      {!fetching && postList.length === 0 && <Msg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </div>
  );
}

export default PostList;
