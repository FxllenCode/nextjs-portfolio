import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';


export default function CustomSend({ url, text }: { url: string, text: string }) {
    return (
        <span className="transition ease-in-out hover:underline text-blue-500 group">
            <Link href={url} target='_blank'>
                <p className="group-hover:underline inline-flex items-center">
                    {text}
                    <GoArrowUpRight className="inline transition ease-in-out group-hover:translate-x-1 ml-1" />
                </p>
            </Link>
        </span>
    );
}