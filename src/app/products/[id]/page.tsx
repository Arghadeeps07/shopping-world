import { getProductbyId } from '@/app/services/getProducts';
import Image from 'next/image';
import { CheckIcon } from 'lucide-react';
import ShareBtn from '@/components/ShareBtn'; 
import { formatAmount } from '@/utils/formatAmount';
import AddToCart from '@/components/AddToCart';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata<Metadata>({params:{id}}:any){

    const product = await getProductbyId(id)
    return {
        title:`Shopping World | ${product?.name }`
    }
}

export default async function ProductDetail({ params: { id } }: { params: { id: string } }) {
  const product: any = await getProductbyId(id); // Explicitly type the product
  const clientProduct = {
      name: product.name,
      description: product.description,
      id: product.id,
      price: product.default_price.unit_amount, // Now TypeScript recognizes unit_amount
      price_id: product.default_price.id,
      currency: 'INR',
      image: product.images[0],
  };

  return (
    <div className="m-2 md:px-20">
      {/* Container for product details */}
      <div className="flex flex-col md:flex-row justify-around items-center md:flex-nowrap flex-wrap gap-6">
        {/* Product Image */}
        <div className="w-full md:w-80 h-80">
          <Image
            priority
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
            width={320}
            height={320}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 max-w-md border rounded-md shadow-lg p-4 md:p-6 bg-white dark:bg-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold">{product.name}</h2>
          <div className="flex pt-2 gap-2 items-center">
            <CheckIcon className="text-lime-500 w-5 h-5" />
            <span className="font-semibold dark:text-white">In stock</span>
            <span className="hidden md:inline">|</span>
            <ShareBtn />
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="text-gray-500 dark:text-white">Price:</p>
            <p className="text-xl font-semibold dark:text-white">
              {formatAmount(product.default_price.unit_amount)}
            </p>
          </div>
          {/* Add to Cart */}
          <AddToCart product={clientProduct} />
        </div>
      </div>

      {/* Product Description */}
      <p className="mt-8 text-lg md:text-2xl dark:text-white text-center md:text-left">
        {product.description}
      </p>
    </div>
  );
}
