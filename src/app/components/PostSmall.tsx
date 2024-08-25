import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

export function PostSmall({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <div className="m-12 p-10 rounded-lg bg-black">
      <div className="mb-5">
        <Image src={coverImage} alt={title} width={1300} height={630} className="w-full"></Image>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
    <p>todo</p>
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}