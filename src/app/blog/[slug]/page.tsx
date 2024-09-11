import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../../../lib/handler";
import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";




type Params = {
    params: {
      slug: string;
    };
  };


  export default async function Post({ params }: Params) {
    const post = getPostBySlug(params.slug);
    if (!post) {
      return notFound();
    }
  
    const content = await markdownToHtml(post.content || "");
    const dateParsed = parseISO(post.date);

  
    return (
      <main className="bg-zinc-800 w-full h-full">
        <div className="container flex items-center justify-center mx-auto">
            <article className="mb-32 mx-4">
              <h1 className="pt-32 text-4xl md:text-6xl lg:text-7xl font-bold font-black tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{post.title}</h1>
              <i className="text-md mt-4 text-center md:text-left mb-4"><time dateTime={post.date}>{format(dateParsed, "LLLL	d, yyyy")}</time></i>
              <Image
                className="rounded"
                src={post.coverImage}
                alt={`Cover Image for ${post.title}`}
                width={1300}
                height={630}
    />
              <div className="prose prose-zinc prose-invert lg:prose-xl mx-auto">
                <div dangerouslySetInnerHTML={{ __html: content }}/> {/* :sob: */}

              </div>

            </article>
          </div>
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


  // <div className="items-center mx-auto">
  // <div className="prose  prose-zinc prose-invert">
  // {/* <div className="prose lg:prose-xl prose-zinc prose-invert" dangerouslySetInnerHTML={{ __html: content }} /> */}
    
// </div>
// </div>