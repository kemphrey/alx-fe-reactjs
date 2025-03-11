import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Consider data fresh for 1 minute
    refetchOnWindowFocus: false, // Prevent automatic refetch on window focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()} className="bg-blue-500 text-white px-4 py-2 rounded">
        Refresh Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
