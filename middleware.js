// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // 记录请求路径
  console.log(`[Middleware] 请求路径: ${request.nextUrl.pathname}`);
  
  // 示例：如果访问 /admin 路径，重定向到首页
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // 继续正常响应
  return NextResponse.next();
}

// 配置中间件匹配的路径（可选，不配置则匹配所有）
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};