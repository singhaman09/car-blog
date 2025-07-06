'use client';
import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#232536] text-white font-sans">
      <div
        className={`max-w-[1440px] mx-auto px-6 sm:px-8 py-12 space-y-12 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Logo & Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 group cursor-pointer hover:scale-105 transition">
            <div className="w-10 h-10 bg-[#FFD6D6] rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-300 opacity-0 group-hover:opacity-100 transition" />
              <div className="relative z-10 w-6 h-6 bg-white rounded-full group-hover:rotate-180 transition" />
            </div>
            <span className="text-lg font-bold group-hover:text-[#FFD6D6] transition">Car Blog</span>
          </div>
          <nav className="flex flex-wrap justify-center lg:justify-end gap-4 text-sm sm:text-base text-gray-300">
            {['Home', 'Blog', 'About', 'Contact', 'Privacy Policy'].map((item, i) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD6D6] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="bg-[#2A2B39] rounded-xl px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6 hover:bg-[#2E2F3D] transition relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition" />
          <h3 className="text-2xl md:text-4xl font-bold text-center lg:text-left relative z-10">
            Subscribe to our newsletter <br className="hidden sm:block" /> for latest updates
          </h3>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row w-full lg:w-auto gap-3 relative z-10"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe(e)}
              placeholder="example@email.com"
              className="flex-1 px-4 py-2 rounded-lg text-slate-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            <button
              type="submit"
              className={`px-5 py-2 rounded-lg font-medium transition ${
                isSubscribed
                  ? 'bg-green-500 text-white'
                  : 'bg-red-500 text-white hover:bg-red-600'
              }`}
            >
              {isSubscribed ? 'Subscribed ✓' : 'Subscribe ✈'}
            </button>
          </form>
        </div>

        {/* Address & Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="text-center md:text-left">
            <p className="hover:text-white transition">Firststreet 118 2561 abctown</p>
            <p className="hover:text-white transition">example@femail.com | 001 23345 442</p>
          </div>
          <div className="flex space-x-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 bg-slate-700 rounded-full flex items-center justify-center hover:bg-red-500 transition transform hover:scale-110"
              >
                <Icon size={18} className="text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD6D6] to-transparent opacity-30 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;
