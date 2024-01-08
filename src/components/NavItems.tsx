'use client';

import React, { useRef, useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/config';
import NavItem from './NavItem';

const NavItems = () => {
  const [active, setActive] = useState<null | number>(null);
  const isAnyOpen = active !== null;
  const navRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () =>
          active === index ? setActive(null) : setActive(index);
        const isOpen = active === index;

        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
