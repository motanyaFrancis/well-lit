'use client';

import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const HomeButton: React.FC = () => {
  return (
    <div className="arrowButton bg-sky-500 flex items-center justify-center">
      <Link href="/" aria-label="Home">
        <AiFillHome size={32} color="white" />
      </Link>
    </div>
  );
};

export default HomeButton;
