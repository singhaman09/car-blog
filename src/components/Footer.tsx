import button from '../app/assest/Group 8.png'
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CarBlog</h3>
            <p className="text-gray-400">Your ultimate destination for car reviews, tips, and automotive insights.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Electric Vehicles</li>
              <li>SUVs</li>
              <li>Luxury Cars</li>
              <li>Car Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Get latest updates and news</p>
            <div className="flex mr-20">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg text-black bg-white border-2"
              />
              <Image src={button} alt="Subscribe" className="inline-block" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 CarBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}