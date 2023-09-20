'use client';

import ProductCard from '../cards/product-card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

type Product = {
  map(
    arg0: (favorite: any) => import('react').JSX.Element
  ): import('react').ReactNode;
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

const Favorite = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const favoriteProduct: any = async () => {
    const res = await axios.get('/api/products/favorites');
    const products = res.data;

    setFavorites(products);
  };

  useEffect(() => {
    favoriteProduct();
  }, []);

  return (
    <div className='px-4 md:px-[120px] pt-[72px] pb-9 md:pt-[140px] md:pb-[75px] bg-[#F5F5F5] flex flex-col gap-6'>
      <h1 className='text-[28px] md:text-[40px] font-bold'>Favorite</h1>
      <div className='flex flex-row gap-6 overflow-x-auto lg:overflow-x-visible'>
        {favorites.map((favorite) => (
          <div key={favorite.id}>
            <ProductCard
              key={favorite.id}
              imageUrl={favorite.image}
              title={favorite.title}
              category={favorite.category}
              id={favorite.id}
            />
          </div>
        ))}
      </div>
      <div className='text-center'>
        <Button className='text-[16px] text-[#DC2626] py-4 px-6 bg-transparent outline outline-1 outline-[#DC2626] hover:bg-[#DC2626] hover:text-white'>
          View All Product
        </Button>
      </div>
    </div>
  );
};

export default Favorite;
