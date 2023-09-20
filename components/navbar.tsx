import Image from 'next/image';

import { SearchBar } from '@/components/navbar/search';
import IconMenu from '@/components/navbar/icon-menu';
import { NavigationMenuDemo } from './navbar/menu';

const Navbar = () => {
  return (
    <nav className='px-4 md:px-[120px]'>
      <div className='flex items-center py-[17px] justify-between'>
        <Image
          src='/topLogo.svg'
          alt='logo'
          width={175.5}
          height={36}
          priority={true}
        />

        <SearchBar />

        <IconMenu />
      </div>
      <div className='hidden lg:flex justify-center py-[13.5px]'>
        <NavigationMenuDemo />
      </div>
    </nav>
  );
};

export default Navbar;
