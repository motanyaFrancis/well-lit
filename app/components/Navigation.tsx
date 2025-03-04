'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';  // Import the Image component from next/image
// import Footer from './FooterLower';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Discover', href: '/discover', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Contact Us', href: 'contact', current: false },
  { name: 'Our Stories', href: '/blog', current: false },
  { name: 'Services', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="sticky top-0 z-10">
      <div className="relative w-full">
        <div className="absolute top-10 left-40 right-40  max-sm:top-0 max-sm:left-0 max-sm:right-0  max-lg:top-10 max-lg:left-10 max-lg:right-10  flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <div className="flex shrink-0 items-center">
              <Link href="/">
                <Image
                  alt="Well Lit Pictures"
                  src="/logo.png"
                  className="h-20 w-auto bg-whi"
                  width={80}  
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-White hover:text-orange-700 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-12 w-12 size-12 group-data-open:hidden" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile menu - always visible */}
      <DisclosurePanel className="7xl:hidden  fixed inset-0 bg-orange-950 bg-opacity-100 z-20 flex flex-col justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/overlay-bg.jpg')" }}>
        <div className="absolute top-10 left-40 right-40  max-sm:top-0 max-sm:left-0 max-sm:right-0  max-lg:top-10 max-lg:left-10 max-lg:right-10  flex items-center justify-between px-4 py-2">
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
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-orange-700 ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <XMarkIcon aria-hidden="true" className="Block h-12 w-12 size-12 group-data-open:block" />
            </DisclosureButton>
          </div>
        </div>

        {/* <div className="mb-auto"></div> */}
        <div className="space-y-0 mx-20 mt-32 max-sm:mx-0 p-10 top-40 text-right max-sm:text-left">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-orange-600 ' : 'text-gray-300  hover:text-rose-200',
                'block px-20 max-sm:px-8 py-4 max-sm:py-2 text-2xl max-sm:text-base font-normal uppercase'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        {/* <Footer /> */}
      </DisclosurePanel>
    </Disclosure>
  )
}
