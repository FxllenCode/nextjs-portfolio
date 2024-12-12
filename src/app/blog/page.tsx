import { Post } from "@/interfaces/post";
import { PostSmall } from "../components/PostSmall";
import { getAllPosts } from "../../lib/handler";
import { Metadata } from "next";



  
export const metadata: Metadata = {
  title: "Blog | fxllencode.dev",
  description:
    "Welcome to my blog! I write about a variety of topics, from Computer Science to Public Transportation and many more! There's no real reason I write the stuff I write other than to rant, so take it at face value. :)",
  keywords: [
    "blog",
    "fxllencode",
    "fxllencode.dev",
    "Ethan Webber",
    "portfolio",
    "developer",
    "photographer",
    "student",
    "aviation"
  ],
  openGraph: {
    url: "https://fxllencode.dev/blog",
    type: "website",
    title: "Blog | fxllencode.dev",
    description:
      "Welcome to my blog! I write about a variety of topics, from Computer Science to Public Transportation and many more! There's no real reason I write the stuff I write other than to rant, so take it at face value. :)",

  },
  
  alternates: {
    canonical: "https://fxllencode.dev/blog"
  }
};


export default function Blog() {

    const allPosts = getAllPosts();
    return (
      <main className="h-vh w-full bg-zinc-800 text-white">
        <div className="">
            <h1 className="text-center text-3xl md:text-4xl pt-24">Blog</h1>
            <p className="text-center text-lg mx-4">Welcome to my blog! I write about a variety of topics, from Computer Science to Public Transportation and many more! There&apos;s no real reason I write the stuff I write other than to rant, so take it at face value. :)</p>
            <div className="grid grid-cols-1 md:grid-cols-2">
        {allPosts.map((post) => (
          <PostSmall
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
          </div>
        </div>

      </main>
        
    )
}