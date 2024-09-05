import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../../../lib/handler";
import Link from "next/link";
import Image from "next/image";



type Params = {
    params: {
      slug: string;
    };
  };


  export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);
    console.error(post)
    console.log(
    "debug here"
    )
    if (!post) {
      return notFound();
    }
  
    const content = await markdownToHtml(post.content || "");
  
    return (
      <main className="bg-zinc-900 mx-auto h-full w-full">
        <div className="container mx-auto px-5 w-full ">
            <article className="mb-32">
            <div className="items-center mx-auto">
                <div className="prose  prose-zinc prose-invert"/>
                    <div className="prose lg:prose-xl prose-zinc prose-invert" dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
            </article>
        </div>
        {/* <Alert preview={post.preview} />
        <Container>
          <Header />
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
          </article>
        </Container> */}
      </main>
    );
  }


  export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.map((post) => (

        {
      slug: post.slug,
    }));
  }