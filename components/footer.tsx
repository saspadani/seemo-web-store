import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='px-4 md:px-[120px] py-[72px] flex flex-col md:flex-row gap-8 lg:gap-[171px]'>
        <Image src='/logoFooter.svg' alt='logo' width={138} height={28} />
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex flex-col gap-3'>
            <h2 className='text-white text-[14px] font-medium'>Location</h2>
            <p className='text-[14px] text-slate-500 w-[200px]'>
              Seegräber GmbH Chauvignystr. 1765366 Geisenheim Germany
            </p>
            <Link href='#' className='text-[#DC2626] text-[14px]'>
              View On Google Map
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            <h2 className='text-white text-[14px] font-medium'>Contact us</h2>
            <p className='text-[14px] text-white'>
              Phone: <span className='text-slate-500'>+49 (0) 6722-500670</span>
            </p>
            <p className='text-[14px] text-white'>
              Mon.-Fri.:{' '}
              <span className='text-slate-500'>08:00-17:00 (GMT+1)</span>
            </p>
            <p className='text-[14px] text-white'>
              Email: <span className='text-slate-500'>info@seema.de</span>
            </p>
          </div>
          <div>
            <h2 className='text-white text-[14px] font-medium'>CHAT WITH US</h2>
            <Button className='px-[20px] py-[10px] bg-transparent outline outline-[#DC2626] text-[#DC2626] mt-5'>
              OPEN CHAT
            </Button>
          </div>
        </div>
      </div>
      <div className='px-4 py-4 md:px-[120px] flex flex-col md:flex-row gap-5 md:justify-between'>
        <p className='text-slate-500'>copyright ©2021 Seegräber GmbH</p>
        <div className='text-white flex gap-[18px] underline'>
          <Link href='#'>Impressum</Link>
          <Link href='#'>Terms and conditions</Link>
          <Link href='#'>Privacy</Link>
          <Link href='#'>Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
