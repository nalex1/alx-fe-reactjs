import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,   // 5 minutes — data stays fresh
    cacheTime: 1000 * 60 * 10,  // 10 minutes — data kept in cache
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">{error.message}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Posts (React Query)
      </h2>

      <div className="flex justify-center mb-4">
        <button
          onClick={refetch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Refetch Posts
        </button>
      </div>

      <ul className="space-y-4">
        {posts.slice(0, 15).map((post) => (
          <li key={post.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700 text-sm">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;