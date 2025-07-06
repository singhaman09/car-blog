"use client";
import Image, { StaticImageData } from "next/image";
import { Post, User } from "@/types";

type Props = {
  posts: Post[];
  users: User[];
  title?: string;
  newTechImages: (string | StaticImageData)[];

};

export default function NewTechnology({ posts, users, title = "New Technology", newTechImages }: Props) {
  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold py-4">{title}</h2>
        <p className="text-gray-600 cursor-pointer hover:text-gray-800">See all</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.slice(0, 4).map((post, index) => {
          const author = users.find((user) => user.id === post.userId);
          return author ? (
            <div
              key={post.id}
              className="bg-[#F4F0F8] group cursor-pointer hover:border-2 border-black rounded-lg p-5 hover:shadow-lg transition-shadow"
            >
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
  );
}