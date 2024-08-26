import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";

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

  const dateParsed = parseISO(date);

  return (
    <div className="m-12 p-10 rounded-lg bg-black">
      <div className="mb-5">
        <Image src={coverImage} alt={title} width={650} height={315} className="object-contain w-full"></Image>
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
      </div>
      <p className="text-lg leading-relaxed mb-1">{excerpt}</p>
      <i className="text-md mb-4"><time dateTime={date}>{format(dateParsed, "LLLL	d, yyyy")}</time></i>

    </div>
  );
}