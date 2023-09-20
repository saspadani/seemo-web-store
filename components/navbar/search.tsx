'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>('');
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fetchProducts = await axios
      .get('/api/products/search', {
        params: {
          query,
        },
      })
      .then((res) => {
        return res;
      });

    const fetchCategories = await axios
      .get('/api/categories/search', {
        params: {
          query,
        },
      })
      .then((res) => {
        return res;
      });

    const products = fetchProducts;
    const categories = fetchCategories;

    setProducts(products.data);
    setCategories(categories.data);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='hidden lg:flex w-[566px] h-9 p-[1px] bg-[#F3F4F6] rounded-md items-center'>
      <Popover open={open}>
        <PopoverTrigger>
          <form onSubmit={handleSubmit} className='flex items-center'>
            <Input
              id='searchInput'
              type='search'
              value={query}
              placeholder='Search'
              onChange={(e) => setQuery(e.target.value)}
              className='bg-transparent rounded-none outline-none focus-visible:ring-0 h-[30px] w-[536px]'
            />
          </form>
        </PopoverTrigger>

        <PopoverContent
          className='hidden md:flex flex-col gap-1 w-screen max-w-[1440px] h-[366px] py-8 px-[120px] rounded-none mt-14'
          align='center'
          onPointerDownOutside={handleClose}
          onEscapeKeyDown={handleClose}
        >
          <div className='flex gap-8'>
            <div className='w-[584px] flex flex-col gap-3'>
              <h1 className='text-lg font-semibold'>
                Result {query.length > 1 ? products.length : ''}
              </h1>
              {query.length > 1 && products.length > 0 ? (
                products.slice(0, 3).map((product: any) => (
                  <div key={product.id} className='flex gap-4'>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={72}
                      height={72}
                      className='rounded-md overflow-hidden bg-slate-300'
                      style={{ height: '72px' }}
                    />
                    <Link
                      key={product.id}
                      href={`/post/${product.id}`}
                      className='hover:underline'
                    >
                      {product.title}
                    </Link>
                  </div>
                ))
              ) : (
                <>no product</>
              )}
              <Link
                href={`/products/${query}`}
                className='text-[#DC2626] font-medium'
              >
                See All Results
              </Link>
            </div>
            <div className='w-[584px] flex flex-col gap-3'>
              <h1 className='text-lg font-semibold'>Categories</h1>
              <div className='flex gap-3'>
                {query.length > 1 && categories.length > 0 ? (
                  categories.map((category: string) => (
                    <Button
                      key={category}
                      className='p-3 bg-slate-400 outline-none'
                    >
                      <Link
                        key={category}
                        href={`/post/${category}`}
                        className='hover:underline'
                      >
                        {category}
                      </Link>
                    </Button>
                  ))
                ) : (
                  <>no result</>
                )}
              </div>
              <Link
                href={`/categories/${query}`}
                className='text-[#DC2626] font-medium'
              >
                See All Results
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      <Button
        type='submit'
        onClick={handleSubmit}
        className='w-[30px] h-[30px] p-[6px] bg-[#DC2626]'
      >
        <Search width={24} height={24} />
      </Button>
    </div>
  );
};
