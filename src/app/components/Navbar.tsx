"use client"

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaTwitch, } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname()
  if (pathName != '/') {
    return (
      <footer className="bg-neutral-900 backdrop-blur bg-opacity-80 text-white fixed py-6 w-full z-[100] p-3">
        <div className="container  mx-auto flex justify-between items-center">
          <div>
            <Link href="/">
              <p className="text-xl font-bold transition ease-in-out hover:opacity-30">fxllencode.dev</p>
            </Link>
          </div>
          <div className='hidden sm:flex'>
            <p>testwhere is this?</p>
          <div className="flex hidden sm:flex space-x-4">
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
          {/* start menu */}
          <button data-collapse-toggle="navbar-hamburger" type="button" className="flex sm:hidden inline-flex items-center justify-center px-2 w-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
           <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
         </button>
         {/* stop menu */}
         {/* opened menu */}
         <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600" aria-current="page">Home</a>
          </li>
         <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
          </li>
          <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
         </li>
         <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
         </li>
      </ul>
    </div>
    {/* closed menu */}
          </div>
          
        </div>
      </footer>
    );
  
    // topbar here, make navigation super easy and clear 
    
  }
  
};

export default Navbar;