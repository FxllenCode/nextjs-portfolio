import { Post } from "@/interfaces/post";
import { PostSmall } from "../components/PostSmall";
import { getAllPosts } from "../../lib/handler";



  


export default function Blog() {

    const allPosts = getAllPosts();
    return (
      <main className="h-vh w-full bg-zinc-800 text-white">
        <div className="">
            <h1 className="text-center text-3xl md:text-4xl pt-24">Blog</h1>
            <p className="text-center text-lg mx-4">Welcome to my blog! I write about a variety of topics, from Computer Science to Public Transportation and many more! There&apos;s no real reason I write the stuff I write other than to rant, so take it at face value. :)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-16 gap-y-20 md:gap-y-32">
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