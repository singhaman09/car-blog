import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getUser, mockCarSpecs } from "@/lib/api";
import CarSpecs from "@/components/CarSpecs";

export default async function PostPage({ params }: { params: { id: string } }) {
  try {
    const post = await getPost(params.id);
    const author = await getUser(post.userId);
    const specs = mockCarSpecs(post.id);

    return (
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-secondary hover:underline mb-4"
            >
              ← Back to Home
            </Link>

            <div className="mb-6">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                {specs.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-lg font-semibold">
                  {author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-gray-500 text-sm">{author.email}</p>
              </div>
              <div className="text-gray-500 text-sm">
                <p>Published on Dec 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src="https://unsplash.com/photos/a-concept-car-is-shown-in-the-dark-V1DFo8C4JPA"
              alt="Test Car"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-gray-700">{post.body}</p>

            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut perspiciatis
              unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium.
            </p>
          </div>

          {/* Car Specs */}
          <CarSpecs specs={specs} />

          {/* All Categories Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">All Categories</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: "Car Reviews",
                  icon: "🚗",
                  desc: "Latest car reviews and ratings",
                },
                {
                  name: "Maintenance Tips",
                  icon: "🔧",
                  desc: "Keep your car in perfect condition",
                },
                {
                  name: "Car Modifications",
                  icon: "⚙️",
                  desc: "Customize and upgrade your ride",
                },
                {
                  name: "Driving Tips",
                  icon: "🛣️",
                  desc: "Improve your driving skills",
                },
              ].map((category) => (
                <div
                  key={category.name}
                  className="text-center p-6 bg-gray-50 rounded-lg"
                >
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
