// app/api/getProducts/route.ts
import { NextResponse } from 'next/server';
import { stripe } from '@/utils/stripe';

export async function GET() {
  try {
    const products = await stripe.products.list({
      expand: ['data.default_price'],
      limit: 10,
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to load products' }, { status: 500 });
  }
}
