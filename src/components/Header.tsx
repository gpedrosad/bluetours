// components/Header.tsx

import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <Image
          src="/logo.webp"
          alt=""
          width={120}
          height={120}
        />
      </div>
    </header>
  );
};

export default Header;