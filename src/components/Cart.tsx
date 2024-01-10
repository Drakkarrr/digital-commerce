'use client';
import { ShoppingCartIcon } from 'lucide-react';
import React from 'react';
import { Separator } from '@/components/ui/separator';

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

const Cart = () => {
  const itemCount = 10;
  return (
    <Sheet>
      <SheetTrigger className='group -m-2 flex items-center p-2'>
        <ShoppingCartIcon
          className='h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-400'
          aria-hidden='true'
        />
        <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-400'>
          0
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart (0) </SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className='flex w-full flex-col pr-6'>
              {/* TODO: logic here */}
              Your cart is empty.
            </div>
            <div className='space-y-4 pr-6'>
              <Separator />
            </div>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
