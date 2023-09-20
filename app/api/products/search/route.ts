import { NextResponse } from 'next/server';

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET',
  });

  const products = await response.json();
  return products;
}

export async function GET(request: any) {
  const products = await fetchProducts();
  const { searchParams } = new URL(request.url || '');
  const query = searchParams.get('query');

  const filteredProducts = products.filter((product: any) => {
    return product.title.toLowerCase().includes(query?.toLowerCase() || '');
  });

  return NextResponse.json(filteredProducts);
}
