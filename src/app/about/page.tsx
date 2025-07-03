export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About CarBlog</h1>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-600 mb-8">
            Welcome to CarBlog - your ultimate destination for everything automotive. We're passionate about cars and dedicated to bringing you the most comprehensive, honest, and up-to-date information about the automotive world.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">Why CarBlog Exists</h2>
          <p className="mb-6">
            In today's rapidly evolving automotive landscape, making informed decisions about vehicles has become more complex than ever. With the rise of electric vehicles, hybrid technology, autonomous driving features, and countless new models hitting the market every year, car buyers need a trusted source of information.
          </p>
          
          <p className="mb-8">
            CarBlog was created to bridge this gap by providing detailed reviews, practical maintenance tips, industry insights, and expert analysis to help you navigate the world of automobiles with confidence.
          </p>
          
          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🚗 Vehicle Reviews</h3>
              <p>Comprehensive reviews of the latest cars, from budget-friendly options to luxury vehicles and everything in between.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">⚡ Electric Vehicles</h3>
              <p>Deep dives into the world of EVs, including range tests, charging infrastructure, and sustainability insights.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🚙 SUVs & Trucks</h3>
              <p>Reviews and comparisons of SUVs, pickup trucks, and family vehicles for every lifestyle and budget.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">🔧 Maintenance Tips</h3>
              <p>Practical advice on keeping your vehicle running smoothly, from basic maintenance to troubleshooting common issues.</p>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4">Our Tech Stack</h2>
          <p className="mb-4">
            CarBlog is built with modern web technologies to ensure a fast, responsive, and user-friendly experience:
          </p>
          <ul className="list-disc list-inside mb-8 space-y-2">
            <li><strong>Next.js 14</strong> - React framework with App Router for optimal performance</li>
            <li><strong>TypeScript</strong> - Type-safe development for better code quality</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework for responsive design</li>
            <li><strong>Vercel</strong> - Cloud platform for seamless deployment and hosting</li>
          </ul>
          
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="mb-6">
            To empower car enthusiasts, buyers, and owners with the knowledge they need to make informed decisions about their vehicles. Whether you're looking to buy your first car, upgrade to an electric vehicle, or simply maintain your current ride, we're here to help.
          </p>
          
          <div className="bg-secondary text-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="mb-4">Stay updated with the latest car news, reviews, and tips.</p>
            <button className="bg-white text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}