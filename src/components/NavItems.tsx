'use client';

import React, { use, useRef, useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/config';
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const NavItems = () => {
  const [active, setActive] = useState<null | number>(null);
  const isAnyOpen = active !== null;
  const navRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(navRef, () => setActive(null));

  return (
    <div className='flex gap-4 h-full' ref={navRef}>
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
