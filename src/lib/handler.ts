import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from 'remark-rehype'
import rehypeRaw from "rehype-raw";
import rehypeExternalLinks from 'rehype-external-links'
import rehypeReact, { Options, Components } from "rehype-react";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from "rehype-pretty-code";
import TwitterEmbed from "../app/components/TwitterEmbed";
import rehypeParse from "rehype-parse";
import remarkGfm from "remark-gfm";
import remarkYoutube from "remark-youtube";
import rehypeFormat from "rehype-format";
import remarkTwitterLinks from './remark-twitter-links'; // Import the plugin
import remarkEmbedder from '@remark-embedder/core'
import oembedTransformer from '@remark-embedder/transformer-oembed'
import * as prod from 'react/jsx-runtime'
import * as React from 'react'
// ignore ts warning
// @ts-ignore
import remarkVideos from '@chailotl/remark-videos'
import { Component, createElement } from "react";

interface MyComponents extends Components {
  TwitterEmbed: React.ComponentType<{ url: string }>;
}

const production: Options = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs, components: { TwitterEmbed, } as MyComponents };



const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export async function markdownToHtml(markdown: string): Promise<JSX.Element> { // refactor for the 3rd time!
  const result = await unified()
    .use(remarkParse)
    .use(remarkTwitterLinks)
    .use(remarkYoutube)
    .use(remarkGfm)
    .use(remarkVideos)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrettyCode)
    .use(rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] })
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeReact, production)
    // .use(() => {
    //   return (tree: any) => {
    //     // only log elements that are not p tags 
    //     console.log(tree.children.filter((node: any) => node.type !== 'element' || node.tagName !== 'p'));
    //   }}) // debug
    .process(markdown);  
    
    // console.log(result.result)
    
    return result.result;


}