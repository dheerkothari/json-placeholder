import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../components/post";
import axios from 'axios'

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then(({ data }) => {
        setPost(data);

        setLoading(false);
      });
  }, []);

  return <Post  id={post.id} title={post.title} body={post.body}/>;
};

export default PostDetails;
