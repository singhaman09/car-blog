'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#232536] text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-[1440px] mx-auto px-6 sm:px-8 py-5 sm:py-6">

        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group transition hover:scale-105">
            <div className="w-8 h-8 bg-[#FFD6D6] rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-300 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10 w-4 h-4 bg-white rounded-full group-hover:rotate-180 transition" />
            </div>
            <span className="text-lg font-bold group-hover:text-[#FFD6D6] transition">CarBlog</span>
          </Link>

         <div className="hidden md:flex items-center space-x-6 text-base font-semibold">

            {[
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-[#FFD6D6] transition-colors"
              >
                {label}
              </Link>
            ))}

            <button className="bg-white text-black px-4 py-1.5 rounded hover:bg-[#FFD6D6] hover:text-black transition-all">
              Subscribe
            </button>
          </div>

          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="w-full h-0.5 bg-white" />
              <span className="w-full h-0.5 bg-white" />
              <span className="w-full h-0.5 bg-white" />
            </div>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 text-sm font-medium">
            {[
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blog' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' }
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FFD6D6] transition-colors"
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => setIsOpen(false)}
              className="bg-white text-black px-4 py-2 rounded hover:bg-[#FFD6D6] transition"
            >
              Subscribe
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
