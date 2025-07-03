"use client";
import { useState, useEffect } from "react";
import CarPostCard from "@/components/CarPostCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import { getPosts, getUser, mockCarSpecs } from "@/lib/api";
import { Post, User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import button from "./assest/Group 8.png";
import car from "./assest/post.png"; // Assuming you have a car image in your assets
// Top of your file
import r1 from './assest/r1.png';
import r2 from './assest/r2.png';
import r3 from './assest/r3.png';
import r4 from './assest/r4.png';

import e1 from './assest/e1.png';
import e2 from './assest/e2.png';
import e3 from './assest/e3.png';
import e4 from './assest/e4.jpg';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategoryImages = [e1, e2, e3, e4];
  const newTechImages = [r1, r2, r3, r4];

  const categories = ["EV", "Hybrid", "Luxury", "SUV"];

  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, usersData] = await Promise.all([
          getPosts(),
          Promise.all(Array.from({ length: 10 }, (_, i) => getUser(i + 1))),
        ]);

        setPosts(postsData.slice(0, 20));
        setUsers(usersData);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    if (selectedCategory === "All") return matchesSearch;

    const specs = mockCarSpecs(post.id);
    return matchesSearch && specs.category === selectedCategory;
  });

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary mx-auto mb-4"></div>
          <p>Loading car blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-30"
        style={{ backgroundImage: `url('/assests/car.jpeg')` }}
      >
        <div className="container mx-auto px-6 text-left">
          <h1 className="text-5xl font-bold mb-6">
            Your Journey
            <br />
            Your Car
            <br />
            <span className="text-secondary">Your Way</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl text-left">
            Discover the latest car reviews, automotive insights, and expert
            tips to help you make the perfect choice for your next vehicle.
          </p>
          <Image src={button} alt="Subscribe" className="inline-block mr-2" />
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* ROW 1: Latest + Trending */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Latest Post */}
          <section className="flex flex-col justify-between">
            <h2 className="text-3xl font-bold py-3">Latest</h2>
            {filteredPosts.length > 0 && (() => {
              const latestPost = filteredPosts[0];
              const author = users.find((u) => u.id === latestPost.userId);
              const specs = mockCarSpecs(latestPost.id);

              if (!author) return null;

              return (
                <>
                  <CarPostCard post={latestPost} author={author} category={specs.category} />
                  <div className="mt-6">
                    <Link
                      href="/blog"
                      className="inline-block bg-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Read more
                    </Link>
                  </div>
                </>
              );
            })()}
          </section>

          {/* Trending Blogs */}
          <section className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold py-3">Trending Blogs</h2>
            {filteredPosts.slice(1, 5).map((post) => {
              const author = users.find((u) => u.id === post.userId);
              if (!author) return null;

              return (
                <div
                  key={post.id}
                  className={`p-6 rounded-lg shadow-md ${
                    post.id % 2 === 0 ? 'bg-secondary text-white' : 'bg-white'
                  }`}
                >
                  <div className="text-sm mb-1">
                    By{' '}
                    <span className="text-red-500 font-medium">
                      {author.name}
                    </span>{' '}
                    | Aug 23, 2023
                  </div>
                  <h3 className="font-bold text-lg leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              );
            })}

            <div className="mt-4">
              <Link
                href="/blog"
                className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                See all
              </Link>
            </div>
          </section>
        </div>

        {/* ROW 2: New Technology Section */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold py-4">New Technology</h2>
            <p className="text-gray-600 cursor-pointer hover:text-gray-800">See all</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.slice(0, 4).map((post, index) => {
              const author = users.find((user) => user.id === post.userId);
              return author ? (
                <div key={post.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={newTechImages[index]}
                      alt={`New Technology ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                      <span>{author.name}</span>
                    </div>
                    <span>•</span>
                    <span>Dec 15</span>
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </section>

        {/* ROW 3: All Category Section */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold py-4">All Category</h2>
            <div className="h-0.5 bg-gray-300 flex-1 ml-8"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Car Reviews", image: allCategoryImages[0], description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.", bgColor: "bg-purple-100" },
              { title: "Maintenance Tips", image: allCategoryImages[1], description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.", bgColor: "bg-blue-100" },
              { title: "Car Modifications", image: allCategoryImages[2], description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.", bgColor: "bg-gray-100" },
              { title: "Driving Tips", image: allCategoryImages[3], description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.", bgColor: "bg-green-100" }
            ].map((category, index) => (
              <div key={index} className={`${category.bgColor} p-6 rounded-lg text-center group cursor-pointer hover:shadow-lg transition-shadow`}>
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16 bg-gray-900 text-white py-16 px-8 rounded-lg">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Testimonials Header */}
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

              {/* Right Side - Testimonial Content */}
              <div className="relative">
                <div className="mb-8">
                  <p className="text-xl leading-relaxed mb-6">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JV</span>
                    </div>
                    <div>
                      <h4 className="font-bold">Jonathan Vallem</h4>
                      <p className="text-sm text-gray-400">New York</p>
                      <p className="text-sm text-gray-400">USA</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
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
      </div>
    </>
  );
}