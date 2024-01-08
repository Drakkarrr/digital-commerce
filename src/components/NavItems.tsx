'use client';

import { PRODUCT_CATEGORIES } from '@/config';
import React from 'react';

const NavItems = () => {
  const [active, setActive] = React.useState<null | number>(null);
  return (
    <div className='flex gap-4 h-full'>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () =>
          active === index ? setActive(null) : setActive(index);
        const isActive = active === index;

        return <p key={index}>{category.label}</p>;
      })}
    </div>
  );
};

export default NavItems;
