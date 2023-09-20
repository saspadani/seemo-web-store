'use client';

import { useEffect, useState } from 'react';
import { ProductsCard, ProductsContent } from '../cards/products-card';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const LatestMachine = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await fetch('/api/products/');
    const data = await res.json();
    setProducts(data.slice(0, 3));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='px-4 md:px-[120px] pt-[72px] pb-9 md:pt-[140px] md:pb-[75px] bg-[#F5F5F5] flex flex-col lg:flex-row gap-8'>
      <ProductsCard>
        {products.map((product) => (
          <ProductsContent
            key={product.id}
            imageUrl={product.image}
            title={product.title}
            category={product.category}
            id={product.id}
          />
        ))}
      </ProductsCard>
      <ProductsCard>
        {products.map((product) => (
          <ProductsContent
            key={product.id}
            imageUrl={product.image}
            title={product.title}
            category={product.category}
            id={product.id}
          />
        ))}
      </ProductsCard>
    </div>
  );
};

export default LatestMachine;
