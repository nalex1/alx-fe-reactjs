import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "Advanced Routing" },
    { id: 3, title: "Protected Routes" }
  ];

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}