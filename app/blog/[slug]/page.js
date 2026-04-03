// app/blog/[slug]/page.js
import Link from 'next/link';
const apiUrl = process.env.API_BASE_URL || 'http://localhost:3000';
async function getPost(slug) {
  const res = await fetch(`${apiUrl}/api/posts/${slug}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return <div>文章不存在</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/blog">← 返回博客列表</Link>
    </div>
  );
}

