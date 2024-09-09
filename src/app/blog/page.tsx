import { Post } from "@/interfaces/post";
import { PostSmall } from "../components/PostSmall";
import { getAllPosts } from "../../lib/handler";



  


export default function Blog() {

    const allPosts = getAllPosts();
    return (
      <main>
        <div className="h-screen w-screen sm:bg-none bg-zinc-800 text-white">
            <h1 className="text-center text-3xl md:text-4xl pt-24">Blog</h1>
            <p>Welcome to my blog! I write about a variety of topics, from Computer Science to Public Transportation and many more! There's no real reason I write the stuff I write other than to rant, so take it at face value. :)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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