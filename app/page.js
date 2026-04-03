// app/page.js
import Link from "next/link";
import Counter from "@/components/counter"; // @ 代表项目根目录

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>欢迎来到我的 Next.js 应用！</h1>
      <p>这是一个新手入门 Demo。</p>
      <Link
        href="/about"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        前往关于页面
      </Link>
      <Link
        href="/blog"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        前往博客
      </Link>
      <Counter />
    </div>
  );
}
