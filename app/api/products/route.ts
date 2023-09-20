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
  return NextResponse.json(products);
}
