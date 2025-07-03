'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CarBlog
          </Link>
          
        <div className="hidden md:flex items-center space-x-8 p-1">
                <Link href="/" className="hover:text-secondary transition-colors cursor-pointer">Home</Link>
                <Link href="/blog" className="hover:text-secondary transition-colors cursor-pointer">Blogs</Link>
                <Link href="/about" className="hover:text-secondary transition-colors cursor-pointer">About</Link>
                <Link href="/contact" className="hover:text-secondary transition-colors cursor-pointer">Contact Us</Link>

                <button className="hover:text-secondary transition-colors bg-white text-black px-4 py-2 rounded border cursor-pointer">
                    Subscribe
                </button>
        </div>


          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
              <span className="w-full h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blogs</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}