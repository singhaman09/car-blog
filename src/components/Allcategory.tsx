import Image from "next/image";
import e1 from "../app/assest/e1.png";
import e2 from "../app/assest/e2.png";
import e3 from "../app/assest/e3.png";
import e4 from "../app/assest/e4.jpg";

const allCategoryImages = [e1, e2, e3, e4];

const categories = [
  {
    title: "Car Reviews",
    image: allCategoryImages[0],
    description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.",
    bgColor: "bg-[#F4F0F8]",
  },
  {
    title: "Maintenance Tips",
    image: allCategoryImages[1],
    description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.",
    bgColor: "bg-[#F4F0F8]",
  },
  {
    title: "Car Modifications",
    image: allCategoryImages[2],
    description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.",
    bgColor: "bg-[#F4F0F8]",
  },
  {
    title: "Driving Tips",
    image: allCategoryImages[3],
    description: "Lorem ipsum dolor sit amet consectetur. Urna dignissim in elementum ut.",
    bgColor: "bg-[#F4F0F8]",
  },
];

export default function AllCategorySection() {
  return (
    <section className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold py-4">All Category</h2>
        {/* <div className="h-0.5 bg-gray-300 flex-1 ml-8"></div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${category.bgColor} p-6 rounded-lg text-center group cursor-pointer hover:shadow-lg transition-shadow hover:border-2 border-black`}
          >
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
  );
}