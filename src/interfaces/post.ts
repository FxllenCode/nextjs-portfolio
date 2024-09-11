export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    excerpt: string;
    ogImage: {
        url: string;
    };
    tags: Array<string>;
    content: string;

};