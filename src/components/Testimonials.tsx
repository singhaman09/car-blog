'use client';
import { useState } from 'react';

export default function TestimonialSection() {
  const testimonials = [
    {
      name: 'Jonathan Vallem',
      location: 'New York',
      country: 'USA',
      initials: 'JV',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Amanda Smith',
      location: 'Los Angeles',
      country: 'USA',
      initials: 'AS',
      message:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      name: 'Rahul Sharma',
      location: 'Mumbai',
      country: 'India',
      initials: 'RS',
      message:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const t = testimonials[index];

  return (
    <section className="relative left-1/2 right-1/2 ml-[-49.7vw] mr-[-50vw] w-screen bg-gray-900 text-white py-20 mt-16">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Title */}
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-400 mb-2">TESTIMONIALS</p>
            <h2 className="text-4xl font-bold mb-6">
              What people say<br />
              about our blog
            </h2>
            <p className="text-gray-300 text-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className="relative">
            <div className="mb-8">
              <p className="text-xl leading-relaxed mb-6">{t.message}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{t.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-400">{t.location}</p>
                  <p className="text-sm text-gray-400">{t.country}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                  onClick={handlePrev}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  onClick={handleNext}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
