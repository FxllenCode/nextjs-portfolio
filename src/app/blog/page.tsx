import { Post } from "@/interfaces/post";
import { PostSmall } from "../components/PostSmall";
import { getAllPosts } from "../../lib/handler";



  


export default function Blog() {

    const allPosts = getAllPosts();
    return (
        <div className="h-screen w-screen sm:bg-none bg-white text-white">
            <h1 className="text-center text-xl">Hey there! Here is my blog!</h1>
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

    )
}