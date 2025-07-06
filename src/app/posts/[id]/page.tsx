import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getUser, mockCarSpecs } from "@/lib/api";
import CarSpecs from "@/components/CarSpecs";
import car from '../../assest/post.png'; 
import Image from "next/image";
import AllCategorySection from "@/components/Allcategory";


interface PostPageProps {
  params: Promise<{ id: string }>; // Update type to reflect params as a Promise
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { id } = await params;
    const post = await getPost(id);
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
             <Image
  src={car.src}
  alt="Test Car"
  className="w-full h-96 object-cover rounded-lg"
  width={500}
  height={300}
/>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg leading-relaxed text-gray-700">{post.body}</p>

            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunnulla pariatur.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mt-6">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deseru laudantium.
            </p>
          </div>
          <CarSpecs specs={specs} />
          <AllCategorySection/>
          
        </div>
      </div>
    );
  } catch {
    notFound();
  }
}
