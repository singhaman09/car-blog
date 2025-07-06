import {
  Car,
  BatteryCharging,
  Wrench,
  Truck,
  Code2,
  Layers,
  Rocket,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          <Car className="inline w-8 h-8  mb-1 mr-2" />
          About <span className="text-black">CarBlog</span>
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          Welcome to <strong>CarBlog</strong> – your trusted hub for car enthusiasts, buyers, and casual readers. We bring you honest, practical, and exciting automotive content in one place.
        </div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5" /> Why CarBlog Exists
          </h2>
          <p className="mb-4 text-gray-600">
            In today’s fast-evolving automotive world, it’s hard to keep up. From electric cars to self-driving features, there's a lot to consider before making a decision.
          </p>
          <p className="text-gray-600">
            That’s where we come in — <strong>CarBlog bridges the gap</strong> with reviews, tips, and insights that help you stay ahead confidently.
          </p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5" /> What We Cover
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard icon={<Car className="w-6 h-6" />} title="Vehicle Reviews" description="In-depth reviews of the latest cars — from budget-friendly to luxury." />
            <FeatureCard icon={<BatteryCharging className="w-6 h-6" />} title="Electric Vehicles" description="Everything EV: range tests, charging, and green tech insights." />
            <FeatureCard icon={<Truck className="w-6 h-6" />} title="SUVs & Trucks" description="Thorough comparisons of SUVs and pickups for all lifestyles." />
            <FeatureCard icon={<Wrench className="w-6 h-6" />} title="Maintenance Tips" description="Simple advice to keep your car healthy and avoid costly repairs." />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" /> Our Tech Stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 pl-2">
            <li><strong>Next.js 14</strong> – Powerful React framework with App Router.</li>
            <li><strong>TypeScript</strong> – Safer, cleaner code.</li>
            <li><strong>Tailwind CSS</strong> – Fast styling and responsive design.</li>
            <li><strong>Vercel</strong> – Lightning-fast deployment and CI/CD.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Rocket className="w-5 h-5" /> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To empower readers with trustworthy and simple information, no matter where they are on their car journey — buying, upgrading, or just learning.
          </p>
        </section>

       <section className="relative bg-[#232536] text-white py-16 px-8 rounded-3xl overflow-hidden shadow-xl">
  <div className="absolute inset-0 opacity-10 bg-[url('/assests/pattern.svg')] bg-cover bg-center pointer-events-none"></div>

  <div className="relative z-10 max-w-3xl mx-auto text-center">
    <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
      Join the CarBlog Community
    </h3>
    <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
      Stay in the loop with exclusive updates, expert car reviews, and latest auto trends—delivered right to your inbox.
    </p>

    <button className="inline-flex items-center gap-2 text-[#232536] bg-white px-8 py-3 text-base font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg">
      <span>Subscribe Now</span>
    </button>
  </div>
</section>

      </div>
    </div>
  );
}
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
