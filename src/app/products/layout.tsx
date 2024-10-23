import Link from "next/link";

export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
          <Link href="/products" className="inline-block text-orange-400 p-4 font-bold hover:scale-110">All Products</Link>
            {children}
        </div>
    )
}