import { Button, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../components/Posts";
import useShowToast from "../hooks/useShowToast";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        if (data.error) {
          return toast("Error", data.error, "error"); // Fix the error handling here
        }
        setPosts(data);
        console.log(data);
      } catch (error) {
        toast("Error", error.message, "error"); // Access the error message directly
      } finally {
        setLoading(false);
      }
    };

    getFeedPosts();
  }, [toast]);

  return (
    <>
      {loading && (
        <Flex justifyContent="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      )}

      {!loading && posts.length === 0 && (
        <h1>You have to follow users to see the feed</h1>
      )}

      {posts.map((post) => {
        return <Posts key={post._id} post={post} postedBy={post.postedBy} />;
      })}
    </>
  );
};

export default Homepage;
