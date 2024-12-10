"use client"

import Link from 'next/link';
import Typewriter from 'typewriter-effect';

import { usePathname } from 'next/navigation';

const TypewriterEffect = () => {
    return (
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

  
    )

};

export default TypewriterEffect;