// app/api/hello/route.js
export async function GET() {
  return Response.json({
    message: 'Hello from Next.js!',
    time: new Date().toLocaleString(),
  });
}