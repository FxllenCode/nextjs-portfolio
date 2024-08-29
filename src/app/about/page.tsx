import Image from 'next/image';
import Link from 'next/link';
import { GoArrowDown} from 'react-icons/go';

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <div className="h-screen w-screen sm:bg-none text-white dark overflow-hidden overscroll-none">
      <div className="dark absolute inset-0 blur-sm bg-zinc-800 opacity-60 sm:hidden">
        <Image src="/assets/about/IMG_6960(2).jpg" alt="Background" fill={true} quality={100} className="z-0 object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center h-full text-center sm:flex-row sm:justify-between sm:text-center">
        <div className="z-20 sm:z-0 p-4 sm:w-1/2 sm:h-full sm:flex sm:flex-col sm:justify-center sm:bg-zinc-800 sm:bg-opacity-75">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="text-md sm:text-lg whitespace-pre-line">Hello! I'm Ethan, but you may know me by fallen or FxllenCode. I create things for the internet that are sometimes cool, but mostly useless for anyone other than myself! I'm fluent in JavaScript, TypeScript, HTML, and CSS. I'm proficent in Rust, Lua, Java, and Python. I have extensive experience working with Node.js, Express.js, Next.Js, and React apps, but I have worked with many other industry standard tools as well. 
          {"\n\n"}
          Aside from development, I am a student pilot with 21.3 flight hours and currently working towards my solo flight. I'm a hobbist photograper, and I especially enjoy aviation photography. Every photo on my website is my own composition! I'm also a student in high school.
          </div>

          <span className="transition ease-in-out hover:underline font-bold text-xl mt-5 text-blue-500 group">
            <Link href="/assets/about/Resume.pdf" target="_blank" download={true}>
                <p className="group-hover:underline inline-flex items-center">
                    Resume
                    <GoArrowDown className="inline transition ease-in-out group-hover:translate-x-1 ml-1" />
                </p>
            </Link>
        </span>
        </div>
        <div className="hidden sm:block sm:relative  sm:object-cover sm:w-1/2 sm:h-full">
          <Image src="/assets/about/IMG_6960(2).jpg" alt="Image" fill={true} quality={100}  className="z-0 object-cover"
 />
        </div>
      </div>
    </div>
    </main>
    
  );
}
