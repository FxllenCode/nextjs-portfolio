'use client';

import Image from "next/image";
import Link from "next/link";
import Typewriter from 'typewriter-effect';

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
        
        <div className="text-white mt-4">
          <Typewriter
            options={{
              autoStart: true,
              deleteSpeed: 150,
              delay: 100,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, world!")
                .pauseFor(2000)
                .deleteAll()
                .typeString("I'm Ethan.")
                .pauseFor(1000)
                .deleteChars(6)
                .typeString("FxllenCode.")
                .pauseFor(2000)
                .changeDeleteSpeed(25)
                .deleteChars(11)
                .typeString("a developer.")
                .pauseFor(2000)
                .deleteChars(12)
                .typeString("a photographer.")
                .pauseFor(2000)
                .deleteChars(15)
                .typeString("a pilot.")
                .pauseFor(2000)
                .deleteChars(8)
                .typeString("a student.")
                .deleteAll()
                .start();
            }}
          />
        </div>
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