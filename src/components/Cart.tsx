'use client';
import { Sheet, ShoppingCartIcon } from 'lucide-react';
import React from 'react';
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from './ui/sheet';

const Cart = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCartIcon className='h-6 w-6 flex-shrink-0 text-gray-500 group-hover:text-gray-400' />
      </SheetTrigger>
      {/* <SheetTrigger>Open</SheetTrigger>
      <SheetContent className='w-[400px] sm:w-[540px]'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent> */}
    </Sheet>
  );
};

export default Cart;
