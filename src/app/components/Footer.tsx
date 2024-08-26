"use client"

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaTwitch, } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathName = usePathname()
  if (pathName == '/') {
    return (
      <footer className="bg-neutral-900 backdrop-blur bg-opacity-80 text-white py-6 fixed w-full bottom-0  p-3">
        <div className="container  mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-xl font-bold transition ease-in-out hover:opacity-30">fxllencode.dev</p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://twitter.com/fxllencode" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl bg-clip-text transition ease-in-out hover:text-[#26a7de] hover:scale-125" />
            </Link>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaTwitch className="text-2xl bg-clip-text transition ease-in-out hover:text-[#6441a5] hover:scale-125" />
            </a> */}
            <Link href="https://github.com/fxllencode" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl bg-clip-text transition ease-in-out hover:text-[#6e5494] hover:scale-125" />
            </Link>
          </div>
        </div>
      </footer>
    );
  } else {
    // topbar here, make navigation super easy and clear 
  }
  
};

export default Footer;