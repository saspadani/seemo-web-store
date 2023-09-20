import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';
import { Button } from '../ui/button';

export const ProductsContent = ({
  imageUrl,
  title,
  category,
  id,
}: {
  imageUrl: string;
  title: string;
  category: string;
  id: number;
}) => {
  return (
    <>
      <div className='flex items-center gap-4'>
        <CardContent className='p-0 h-[56px] w-[56px]'>
          <Image
            src={imageUrl}
            alt='product'
            width={56}
            height={56}
            className='object-cover h-full w-full rounded-md'
          />
        </CardContent>
        <CardHeader className='p-4 flex flex-row justify-between w-full'>
          <div>
            <Link href={`/categories/${category}`}>
              <CardDescription>{category}</CardDescription>
            </Link>

            <Link href={`/product/${id}`}>
              <CardTitle className='font-bold text-[16px] md:text-[20px] w-[300px]'>
                {title}
              </CardTitle>
            </Link>
          </div>
          <Link href={`/product/${id}`} className='flex items-center'>
            <MoveUpRight className='h-5 w-5 text-[#DC2626]' />
          </Link>
        </CardHeader>
      </div>
    </>
  );
};

export const ProductsCard = ({ children }: { children: any }) => {
  return (
    <>
      <Card className='w-full md:w-[544px] p-3'>
        <h1>Latest Machine</h1>
        <div className='flex flex-col gap-10'>{children}</div>
        <div>
          <Button className='text-[16px] w-full text-[#DC2626] py-4 px-6 bg-transparent outline outline-1 outline-[#DC2626] hover:bg-[#DC2626] hover:text-white'>
            View All Product
          </Button>
        </div>
      </Card>
    </>
  );
};
