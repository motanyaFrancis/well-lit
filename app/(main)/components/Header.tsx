'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <>
      <nav className="barStyle topBar">
        <span className="header_span">Well-Lit</span>
        <strong className="header_strong">Pictures</strong>
        <button className="menuButton" onClick={toggleOverlay}>
          <div className="menu-icon"></div>
        </button>
      </nav>

      {isOverlayOpen && (
        <div className="overlay_nav fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white z-50">
          <button
            className="absolute top-4 right-6 text-4xl font-light text-gray-300 hover:text-white transition duration-150"
            onClick={toggleOverlay}
          >
            &times;
          </button>
          <ul className="space-y-6 text-xl mt-10 text-center text-white font-light uppercase tracking-wide">
            <li>
              <Link href="#photos">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">Photos</span>
              </Link>
            </li>
            <li>
              <Link href="#videos">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">Videos</span>
              </Link>
            </li>
            <li>
              <Link href="#music">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">Music</span>
              </Link>
            </li>
            <li>
              <Link href="#discover">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">Discover</span>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">About Us</span>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <span className="hover:text-yellow-400 transition duration-150 cursor-pointer">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
