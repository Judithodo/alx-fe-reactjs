// import React from 'react';
// import { useQuery } from 'react-query';

// // Function to fetch posts
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const PostsComponent = () => {
//   const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
//     'posts', // Query key to identify this query
//     fetchPosts, // Function to fetch the data
//     {
//       staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
//     }
//   );

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Posts</h1>
//       <button onClick={refetch} disabled={isFetching}>
//         {isFetching ? 'Refreshing...' : 'Refresh Data'}
//       </button>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostsComponent;


// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isLoading, isError, isFetching, refetch } = useQuery(
    'posts', // Query key to identify this query
    fetchPosts, // Function to fetch the data
    {
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      cacheTime: 10 * 60 * 1000, // Data stays in cache for 10 minutes after it becomes stale
      refetchOnWindowFocus: false, // Prevent refetch when the window is focused
      keepPreviousData: true, // Keep the previous data while fetching new data
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Refreshing...' : 'Refresh Data'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
