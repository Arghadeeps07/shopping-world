import React from 'react'
import ProductCard from '../../components/ProductCard'
import { getProducts } from '../services/getProducts'

const Product = async () => {
  console.log('All products returned');
  
  // Fetch products
  const products = await getProducts();

  // Handle loading state or empty data
  if (!products || products.data.length === 0) {
    return <div className="text-center mt-12">No products available.</div>;
  }

  return (
    <div className='my-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16'>
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 '>
        {products.data.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;
