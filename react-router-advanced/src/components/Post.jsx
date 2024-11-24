import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams(); // This will fetch the dynamic postId from the URL

  return (
    <div>
      <h2>Blog Post #{postId}</h2>
      <p>This is a blog post with the ID: {postId}</p>
    </div>
  );
};

export default Post;
