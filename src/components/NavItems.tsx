'use client';

import React from 'react';

const NavItems = () => {
  const [active, setActive] = React.useState<null | number>(null);
  return (
    <div className='flex gap-4 h-full'>
      <p>NavItems</p>
      <p>NavItems</p>
      <p>NavItems</p>
      <p>NavItems</p>
    </div>
  );
};

export default NavItems;
