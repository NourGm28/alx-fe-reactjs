import React from "react";
import { useQuery } from "react-query";

// Fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  // React Query's useQuery hook to fetch and manage posts
  const { data, isLoading, isError, error, refetch } = useQuery(
    "posts", // Unique key for caching
    fetchPosts,
    {
      staleTime: 10000, // Cache is fresh for 10 seconds
      cacheTime: 300000, // Data stays in cache for 5 minutes
      refetchOnWindowFocus: false, // Avoid refetching when window regains focus
    }
  );

  // Loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Error state
  if (isError) return <p>Error: {error.message}</p>;

  // Render fetched posts
  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch} style={{ marginBottom: "10px" }}>
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
