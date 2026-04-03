// app/api/posts/route.js
export async function GET() {
  const posts = [
    { slug: 'first-post', title: '我的第一篇文章', description: '欢迎学习 Next.js 动态路由' },
    { slug: 'second-post', title: 'Next.js 进阶', description: 'ISR 和中间件使用' },
  ];
  return Response.json(posts);
}