import { CarSpecs } from '@/types';

interface Props {
  specs: CarSpecs;
}

export default function CarSpecsComponent({ specs }: Props) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mt-8">
      <h3 className="text-xl font-bold mb-4">Car Specifications</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold">Model Year:</span>
          <span>{specs.modelYear}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold">Fuel Type:</span>
          <span>{specs.fuelType}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold">Top Speed:</span>
          <span>{specs.topSpeed}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span className="font-semibold">Price:</span>
          <span className="text-secondary font-bold">{specs.price}</span>
        </div>
      </div>
    </div>
  );
}