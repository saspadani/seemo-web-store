import { NextResponse } from 'next/server';

async function fetchCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories', {
    method: 'GET',
  });

  const categories = await response.json();
  return categories;
}

export async function GET(request: Request) {
  const categories = await fetchCategories();
  return NextResponse.json(categories);
}
