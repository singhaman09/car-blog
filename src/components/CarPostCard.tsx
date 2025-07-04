import Link from 'next/link';
import { Post, User } from '@/types';
import car from '../app/assest/post.png'; 

interface Props {
  post: Post;
  author: User;
  category: string;
}

export default function CarPostCard({ post, author, category }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 my-4">
      <div className="relative">
        <img 
  src={car.src} // Use the imported car image
  alt="Test Car"
  className="w-full h-96 object-cover rounded-lg"
/>

        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-secondary transition-colors">
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.body.substring(0, 100)}...
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">{author.name.charAt(0)}</span>
            </div>
            <div>
              <p className="font-semibold text-sm">{author.name}</p>
              <p className="text-gray-500 text-xs">2 days ago</p>
            </div>
          </div>
          
          <Link 
            href={`/posts/${post.id}`}
            className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}