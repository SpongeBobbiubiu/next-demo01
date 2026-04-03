// app/api/posts/[slug]/route.js
const postsData = {
  'first-post': {
    title: '我的第一篇文章',
    content: '内容从 API 获取。你可以连接数据库来动态加载。',
  },
  'second-post': {
    title: 'Next.js 进阶',
    content: 'ISR 和中间件让你拥有更灵活的全栈能力。',
  },
};

export async function GET(request, { params }) {
  const { slug } = await params; // Next.js 15+ 中 params 是 Promise
  const post = postsData[slug];
  console.log(post,slug,'222222222222')
  if (!post) {
    return new Response('Not Found', { status: 404 });
  }
  return Response.json(post);
}