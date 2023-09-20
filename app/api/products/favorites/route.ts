import { NextResponse } from 'next/server';

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET',
  });

  const products = await response.json();
  return products;
}

export async function GET(request: Request) {
  const products = await fetchProducts();

  const sortedProducts = products.sort(
    (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
      b.rating.rate - a.rating.rate
  );

  const favorites = sortedProducts.slice(0, 3);

  return NextResponse.json(favorites);
}
