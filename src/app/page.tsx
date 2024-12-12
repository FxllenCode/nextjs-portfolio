import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "./components/TypewriterEffect";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "fxllencode.dev",
  description:
    "fxllencode.dev - My personal portfolio and blog.",
  keywords: [
    "fxllencode",
    "fxllencode.dev",
    "Ethan Webber",
    "portfolio",
    "blog",
    "developer",
    "photographer",
    "student",
    "aviation"
  ],
  openGraph: {
    url: "https://fxllencode.dev",
    type: "website",
    title: "fxllencode.dev",
    description:
      "fxllencode.dev - My personal portfolio and blog.",

  },
  
  alternates: {
    canonical: "https://fxllencode.dev"
  }
};

export default function About() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <div className="absolute inset-0 blur-sm">
        <Image
          src="/assets/index/IMG_0044.jpg"
          alt="Background"
          fill={true}
          quality={100}
          className="z-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80 z-10"></div>
      </div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl text-white">Ethan Webber</h1>
        
        <TypewriterEffect />

        <div className="mt-4 flex flex-col sm:flex-row gap-4">
          <Link href="/about" scroll={false}>
            <button className="transition ease-in-out font-bold text-white py-2 px-4 rounded hover:bg-white hover:text-black">
                <p>About Me</p>
              </button>
          </Link>
          <Link href="/projects">
          <button className="transition ease-in-out font-bold text-white py-2 px-4 rounded hover:bg-white hover:text-black">
            <p>Projects</p>
          </button>
          </Link>
          <Link href="/blog">
          <button className="transition ease-in-out font-bold text-white py-2 px-4 rounded hover:bg-white hover:text-black">
            <p>Blog</p>
          </button>
          </Link>
          {/* <Link href="/photography">
          <button className="transition ease-in-out font-bold text-white py-2 px-4 rounded hover:bg-white hover:text-black">
            <p>Photography</p>
          </button>
          </Link> */}
          <Link href="/contact">
          <button className="transition ease-in-out font-bold text-white py-2 px-4 rounded hover:bg-white hover:text-black">
            <p>Contact</p>
          </button>
          </Link>
          
        </div>
      </div>
    </main>
  );
}