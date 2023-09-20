import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

const ProductCard = ({
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
      <Card className='w-[379px] md:w-[350px]'>
        <CardContent className='p-0 h-[238px]'>
          <Image
            src={imageUrl}
            alt='product'
            width={379}
            height={238}
            className='object-contain h-full w-full'
          />
        </CardContent>
        <CardHeader className='p-4 flex flex-row justify-between align-middle'>
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
      </Card>
    </>
  );
};

export default ProductCard;
