"use client";
import { useState, useEffect } from "react";
import CarPostCard from "@/components/CarPostCard";
import { getPosts, getUser, mockCarSpecs } from "@/lib/api";
import { Post, User } from "@/types";
import Image from "next/image";
import Link from "next/link";
import button from "./assest/Group 8.png";
import r1 from './assest/r1.png';
import r2 from './assest/r2.png';
import r3 from './assest/r3.png';
import r4 from './assest/r4.png';
import AllCategorySection from "../components/Allcategory";
import Testimonials from "@/components/Testimonials";
import NewTechnology from "@/components/NewTechnology";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery] = useState("");
  const [selectedCategory] = useState("All");
  const newTechImages = [r1, r2, r3, r4];
  useEffect(() => {
    async function fetchData() {
      try {
        const [postsData, usersData] = await Promise.all([
          getPosts(),
          Promise.all(Array.from({ length: 10 }, (_, i) => getUser(i + 1))),
        ]);

        setPosts(postsData.slice(0, 20));
        setUsers(usersData);
      } catch {
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
  <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
    
    {/* Text content (left side) */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
        Your Journey<br />
        Your Car<br />
        <span className="text-[#FF5959]">Your Way</span>
      </h1>
      <p className="text-xl mb-8 max-w-lg mx-auto md:mx-0">
        Discover the latest car reviews, automotive insights, and expert
        tips to help you make the perfect choice for your next vehicle.
      </p>
      <Image src={button} alt="Subscribe" className="inline-block mr-2 hover:scale-105 transition-transform" />
    </div>
    <div className="w-full md:w-1/2 hidden md:block h-[400px]"></div>

  </div>
</section>

<div className="mx-auto max-w-[90rem] px-10 py-16">
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
                    post.id === 3 ? 'bg-red-400 text-white' : 'bg-white'
                  }`}
                >
                  <div className="text-sm mb-1">
                    By{' '} 
                    <span className={`text-red-500 font-medium ${post.id === 3 ? 'text-white' : ''}`}> 
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

        {/*New Technology */}
        <section className="mt-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold py-4">New Technology</h2>
            <p className="text-gray-600 cursor-pointer hover:text-gray-800">See all</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.slice(0, 4).map((post, index) => {
              const author = users.find((user) => user.id === post.userId);
              return author ? (
                <div key={post.id} className="bg-[#F4F0F8] group cursor-pointer hover:border-2 border-black rounded-lg p-5 hover:shadow-lg transition-shadow">
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
       <AllCategorySection/>
        <Testimonials />
        <NewTechnology posts={posts} users={users} newTechImages={newTechImages} />

      </div>
    </>
  );
}