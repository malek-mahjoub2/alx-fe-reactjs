import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Error fetching posts');
  }
  return response.json();
};

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts',  // A unique key to store the query data
    fetchPosts, // Function to fetch the data
    {
      staleTime: 5000, // Cache data for 5 seconds before refetching
      cacheTime: 10000, // Keep cached data for 10 seconds after it becomes stale
    }
  );

  // Handling loading state
  if (isLoading) return <div>Loading...</div>;

  // Handling error state
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
