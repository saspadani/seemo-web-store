'use client';

import Image from 'next/image';
import { Bookmark, ChevronsDown, Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';

const IconMenu = () => {
  const Languages = [
    { imageUrl: '/uk.png', label: 'EN' },
    { imageUrl: '/gr.png', label: 'GR' },
    { imageUrl: '/ru.png', label: 'RU' },
  ];

  return (
    <div className='flex gap-3 md:gap-6 items-center'>
      <div className='relative'>
        <Bookmark width={28} height={28} />
        <div className='rounded-full w-4 h-4 bg-[#DC2626] absolute top-0 right-0 text-xs text-white flex items-center justify-center'>
          1
        </div>
      </div>
      {/* <Separator orientation='vertical' className='w-0.5 text-black' /> */}
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button className='hidden lg:flex bg-white text-black hover:bg-slate-400 gap-1'>
              <Image
                src={Languages[0].imageUrl}
                alt='uk'
                width={24}
                height={24}
              />
              {Languages[0].label}
              <ChevronsDown className='ml-auto h-4 w-4 shrink-0 opacity-50 text-[#DC2626]' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='flex flex-col gap-1 w-26 p-1'>
            {Languages.map((language) => (
              <Button
                key={language.label}
                className='flex gap-2 bg-white text-black hover:bg-slate-400'
              >
                <Image
                  src={language.imageUrl}
                  alt={language.label}
                  width={24}
                  height={24}
                />
                {language.label}
              </Button>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Popover>
          <PopoverTrigger className='flex lg:hidden' asChild>
            <Menu />
          </PopoverTrigger>
          <PopoverContent className='w-screen md:w-[375px] h-screen'>
            content here
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default IconMenu;
