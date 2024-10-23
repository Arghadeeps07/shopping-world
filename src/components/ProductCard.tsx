import { formatAmount } from '@/utils/formatAmount';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  item: {
    id: string;
    name: string;
    description: string;
    images: string[];
    default_price: {
      unit_amount: number;
    };
  };
}

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <div className="w-72 md:w-80 lg:w-96 rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 transition-transform duration-300 hover:shadow-lg transform hover:scale-105 hover:shadow-blue-500/50 dark:hover:shadow-blue-900/50 m-4">
      <Link href={`/products/${item.id}`}>
        <div className="w-full h-72 md:h-80 relative">
          <Image
            src={item.images[0] || '/placeholder.jpg'} // Fallback if no image
            alt={item.name}
            layout="fill" // Make the image take up the entire container
            objectFit="cover" // Ensures the image covers the container without distortion
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4 md:p-6">
        <h2 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">{item.name}</h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-4 w-56 md:w-full truncate">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-gray-900 dark:text-gray-100 font-bold text-lg">
            {formatAmount(item.default_price.unit_amount)}
          </span>
        </div>
      </div>
    </div>
  );
}
