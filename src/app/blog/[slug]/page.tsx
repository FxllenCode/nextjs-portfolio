import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, markdownToHtml } from "../../../lib/handler";
import Link from "next/link";
import Image from "next/image";
import type { Metadata, ResolvingMetadata } from "next";
import { parseISO, format } from "date-fns";





type Params = {
    params: {
      slug: string;
    };
  };

  export async function generateMetadata({ params }: Params
  ): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
   
    return {
      title: `${post.title} | dminhvu`,
      authors: [
        {
          name: "Ethan Webber"
        }
      ],
      description: post.excerpt,
      keywords: post.tags,
      openGraph: {
        title: `${post.title} | fxllencode.dev`,
        description: post.excerpt,
        type: "article",
        url: `https://fxllencode.dev/${post.slug}`,
        publishedTime: post.date,
        authors: ["https://fxllencode.dev/about"],
        tags: post.tags,
        images: [
          {
            url: post.coverImage,
            alt: post.title
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        site: "@fxllencode",
        creator: "@fxllencode",
        title: `${post.title} | fxllencode.dev`,
        description: post.excerpt,
        images: [
          {
            url: post.coverImage,
            alt: post.title
          }
        ]
      },
      alternates: {
        canonical: `https://fxllencode.dev/${post.slug}`
      }
    };
  }


  export default async function Post({ params }: Params) {
    const post  = getPostBySlug(params.slug);
    if (!post) {
      return notFound();
    }
  
    const content = await markdownToHtml(post.content || "");
    const dateParsed = parseISO(post.date);

  
    return (
      <main className="bg-zinc-800 w-full h-full">
        <div className="container flex items-center justify-center mx-auto px-4 sm:px-6 lg:px-8">
            <article className="mb-32 mx-4 max-w-full">
              <h1 className="pt-32 text-4xl md:text-6xl lg:text-7xl font-bold font-black tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">{post.title}</h1>
              <i className="text-md mt-4 text-center md:text-left mb-4"><time dateTime={post.date}>{format(dateParsed, "LLLL	d, yyyy")}</time></i>
              <Image
                className="rounded max-w-full"
                src={post.coverImage}
                alt={`Cover Image for ${post.title}`}
                width={1300}
                height={630}
              />
              <div className="prose prose-zinc prose-invert lg:prose-xl mx-auto max-w-full">
                {content}
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