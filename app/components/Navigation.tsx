'use client';

import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import '../(main)/styles/Header.css';
import { navItems } from '@/app/lib/navItems';


export default function Navigation() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const variants = {
    hidden: (i: number) => ({
      x: -50,
      opacity: 0,
      transition: { delay: i * 0.05 },
    }),
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
    exit: (i: number) => ({
      x: 50,
      opacity: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  return (
    <Disclosure as="nav" className="sticky top-0 z-[999]">
      <div className="relative w-full">
        <div className="absolute top-10 left-40 right-40 max-sm:top-0 max-sm:left-0 max-sm:right-0 max-lg:top-10 max-lg:left-10 max-lg:right-10 flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  alt="Well Lit Pictures"
                  src="/logo.png"
                  className="h-20 w-auto"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>

          {/* <div className="flex items-center"> */}
          {/* Custom Menu Button */}
          <button className="menuButton p-2" onClick={toggleOverlay}>
            <div className={`menu-icon menu-icon_home  ${isOverlayOpen ? 'open' : ''}`}></div>
          </button>
          {/* </div> */}
        </div>
      </div>

      {/* Overlay Menu */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div
            className="overlay_nav enhanced-overlay fixed inset-0 flex flex-col z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col md:flex-row w-full h-full text-white text-center text-xl font-light uppercase tracking-widest">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  className="flex-1 flex items-center justify-center relative group"
                  style={{ backgroundColor: item.color }}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                >
                  <Link href={item.href} passHref>
                    <span
                      onClick={() => setIsOverlayOpen(false)}
                      className="relative hover-underline-animation cursor-pointer"
                      data-content={item.content}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <DisclosurePanel className="7xl:hidden fixed inset-0 bg-orange-950 bg-opacity-100 z-20 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/overlay-bg.jpg')" }}>
        <div className="absolute top-10 left-40 right-40 max-sm:top-0 max-sm:left-0 max-sm:right-0 max-lg:top-10 max-lg:left-10 max-lg:right-10 flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  alt="Well Lit Pictures"
                  src="/logo.png"
                  className="h-20 w-auto"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <DisclosureButton
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-orange-700"
              onClick={toggleOverlay}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="block h-12 w-12 size-12" />
            </DisclosureButton>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
