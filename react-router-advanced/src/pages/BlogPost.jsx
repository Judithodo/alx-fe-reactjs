// src/pages/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams(); // Fetch dynamic 'id' parameter from the URL

  return (
    <div>
      <h1>Blog Post #{id}</h1>
      {/* Simulate fetching post data */}
      <p>This is the content of the blog post with ID: {id}</p>
    </div>
  );
};

export default BlogPost;
