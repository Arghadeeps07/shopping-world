import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { getProducts } from "./services/getProducts";
import Footer from "@/components/Footer";

export default async function Home() {
  const products = await getProducts(6);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-800 h-64 w-full flex items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center px-4">
          <span className="text-orange-600">Best online </span>
          <span className="text-white">shopping store </span>
          <span className="text-green-800">in INDIA</span>
        </h1>
      </div>

      {/* Product List Section */}
      <div className="m-4 flex flex-wrap justify-center gap-4 md:gap-5">
        {products.data.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>

      {/* View All Products Link */}
      <div className="text-center">
        <Link
          href="/products"
          className="inline-block text-orange-400 p-4 font-bold hover:underline"
        >
          View All {">"}
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
