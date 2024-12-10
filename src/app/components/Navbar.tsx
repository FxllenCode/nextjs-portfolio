"use client"

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaTwitch, } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import { use, useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  if (pathName != '/') {
    return (
      <nav className="bg-neutral-900 backdrop-blur bg-opacity-80 text-white fixed py-4 w-full z-[100] p-3">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-xl font-bold transition ease-in-out hover:opacity-30">fxllencode.dev</p>
            </Link>
          </div>
          <div className='hidden md:flex items-center content-center'>
            <div className="flex space-x-4 mr-4">
              <Link href="/" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/' ? 'opacity-30' : ''}`}>Home</p>
              </Link>
              <Link href="/about" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/about' ? 'opacity-30' : ''}`}>About Me</p>
              </Link>
              <Link href="/projects" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/projects' ? 'opacity-30' : ''}`}>Projects</p>
              </Link>
              <Link href="/blog" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/blog' ? 'opacity-30' : ''}`}>Blog</p>
              </Link>
              <Link href="/photography" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/photography' ? 'opacity-30' : ''}`}>Photography</p>
              </Link>
              <Link href="/contact" passHref>
                <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/contact' ? 'opacity-30' : ''}`}>Contact</p>
              </Link>
            </div>
            <div className="flex hidden md:flex space-x-4">
              <Link href="https://twitter.com/fxllencode" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl bg-clip-text transition ease-in-out hover:text-[#26a7de] hover:scale-125" />
              </Link>
              <Link href="https://github.com/fxllencode" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl bg-clip-text transition ease-in-out hover:text-[#6e5494] hover:scale-125" />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes className="text-2xl " /> : <FaBars className="text-2xl " />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-neutral-900 text-white w-full py-4 mt-8">
            <Link href="/" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/' ? 'opacity-30' : ''}`}>Home</p>
            </Link>
            <Link href="/about" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/about' ? 'opacity-30' : ''}`}>About Me</p>
            </Link>
            <Link href="/projects" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/projects' ? 'opacity-30' : ''}`}>Projects</p>
            </Link>
            <Link href="/blog" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/blog' ? 'opacity-30' : ''}`}>Blog</p>
            </Link>
            <Link href="/photography" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/photography' ? 'opacity-30' : ''}`}>Photography</p>
            </Link>
            <Link href="/contact" passHref>
              <p className={`text-l font-medium transition ease-in-out py-1 px-1 rounded hover:bg-white hover:text-black ${pathName === '/contact' ? 'opacity-30' : ''}`}>Contact</p>
            </Link>
            <div className="flex space-x-4 mt-4">
              <Link href="https://twitter.com/fxllencode" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl bg-clip-text transition ease-in-out hover:text-[#26a7de] hover:scale-125" />
              </Link>
              <Link href="https://github.com/fxllencode" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl bg-clip-text transition ease-in-out hover:text-[#6e5494] hover:scale-125" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    );
  }
};

export default Navbar;