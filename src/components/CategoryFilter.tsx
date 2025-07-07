'use client';
interface Props {
  categories?: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories = [], 
  selectedCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <button
        onClick={() => onCategoryChange('All')}
        className={`px-6 py-2 rounded-full font-semibold transition-colors ${
          selectedCategory === 'All'
            ? 'bg-[#232536] text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        All Categories
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-colors ${
            selectedCategory === category
              ? 'bg-[#232536] text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
