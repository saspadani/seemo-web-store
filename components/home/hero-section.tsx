import Image from 'next/image';
import { Button } from '../ui/button';
import { CheckCircle2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='px-4 md:px-[120px] py-8 md:py-[135px] flex flex-col lg:flex-row-reverse gap-8 md:gap-[72px]'>
      <div className='flex-1 flex items-center'>
        <Image src='/heroImage.png' alt='hero' width={547} height={344} />
      </div>

      <div className='flex-1'>
        <h1 className='text-[40px] md:text-[56px] font-bold leading-normal overflow-hidden'>
          Machinen der Getränke- und Verpackungsindustrie
        </h1>
        <div className='flex gap-5 justify-beetween mt-[30px] md:mt-[50px]'>
          <Button className='py-4 font-bold md:py-[14px] px-4 md:px-5 text-[14px] md:text-[16px]'>
            Second hand machines
          </Button>
          <Button className='py-4 md:py-[14px] px-4 md:px-5 text-[14px] md:text-[16px] bg-transparent outline outline-1 text-[#DC2626] font-bold hover:bg-[#DC2626] hover:text-white'>
            New machines
          </Button>
        </div>
        <div className='flex gap-[37px] mt-[44px] md:mt-16'>
          <div>
            <CheckCircle2 className='h-8 w-8 text-[#DC2626]' />
            <p className='text-[12px] md:text-[14px] font-bold mt-[9px] w-[120px]'>
              400x machines in stock
            </p>
          </div>
          <div>
            <CheckCircle2 className='h-8 w-8 text-[#DC2626]' />
            <p className='text-[12px] md:text-[14px] font-bold mt-[9px] md:w-[180px]'>
              Service for installation and spare parts
            </p>
          </div>
          <div>
            <CheckCircle2 className='h-8 w-8 text-[#DC2626]' />
            <p className='text-[12px] md:text-[14px] font-bold mt-[9px] md:w-[180px]'>
              New machines custum build to requirments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
