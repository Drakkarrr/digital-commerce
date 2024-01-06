import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

const perks = [
  {
    name: 'Fast Delivery',
    Icon: ArrowDownToLine,
    description:
      'Get your purchase be delivere to your home and use them right away.',
  },
  {
    name: 'High Quality',
    Icon: CheckCircle,
    description:
      'Every product on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.',
  },
  {
    name: 'For the Platforms',
    Icon: Leaf,
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

export default function Home() {
  return (
    <>
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
            <Button variant='ghost'>Our quality products &rarr;</Button>
          </div>
        </div>

        {/* List of products here */}
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            test
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
