// app/blog/page.js
import Link from 'next/link';
const apiUrl = process.env.API_BASE_URL || 'http://localhost:3000';
async function getPosts() {
  const res = await fetch(`${apiUrl}/api/posts`, { cache: 'no-store' });
  const posts = await res.json();
  return posts;
}

export default async function BlogIndex() {
  const posts = await getPosts();
  return (
    <div style={{ padding: '2rem' }}>
      <h1>博客列表1</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}