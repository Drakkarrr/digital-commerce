import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
          The very best marketplace here on
          <span className='text-blue-600'> Milky Way!</span>.
        </h1>
        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
          Welcome to DigitalCommerce. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Odit optio illum non vero maxime. Dolore.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products'>
            <Button>Browse Products</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
