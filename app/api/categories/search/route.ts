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
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  const filteredCategories = categories.filter((category: string) => {
    return category.toLowerCase().includes(query?.toLowerCase() || '');
  });

  return NextResponse.json(filteredCategories);
}
