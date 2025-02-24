'use client'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok} from 'react-icons/fa6';
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Discover', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
  { name: 'Our Stories', href: '#', current: false },
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
              <img
                alt="Your Company"
                src="logo.png"
                className="h-20 w-auto"
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
              <XMarkIcon aria-hidden="true" className="hidden h-12 w-12 size-12 group-data-open:block" />
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
              <img
                alt="Your Company"
                src="logo.png"
                className="h-20 w-auto"
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
        {/* <div className="absolute top-10 right-40 max-sm:right-2 px-4 py-2">
          
          <DisclosureButton className="text-white rounded-full hover:bg-rose-100 hover:text-rose-950 hover:bg-opacity-50  focus:outline-none">
            <XMarkIcon className="size-12 max-sm:size-6 max-sm:text-lg text-9xl" aria-hidden="true" />
          </DisclosureButton>
        </div> */}
        <div className="mb-auto"></div>
        <div className="space-y-0 mx-20 mt-32 max-sm:mx-0 p-10 top-40 text-right max-sm:text-left">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' underline decoration-sky-500 decoration-wavy decoration-4 underline-offset-[2px]' : 'text-gray-300  hover:text-rose-200',
                'block px-20 max-sm:px-8 py-4 text-2xl font-normal uppercase'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <footer className=" text-white py-6 mt-auto w-full sticky bottom-0">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-sm:items-start px-4 sm:px-8">
            {/* Left: Social Media Icons with Links */}
            <div className="flex space-x-6 mb-4 sm:mb-0 border-1 p-2 border-rose-100">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-100"
              >
                <FaFacebookF size={24} /> {/* Facebook Icon */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-100"
              >
                <FaXTwitter size={24} /> {/* Twitter Icon */}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-100"
              >
                <FaInstagram size={24} /> {/* Instagram Icon */}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-100"
              >
                <FaLinkedinIn size={24} /> {/* LinkedIn Icon */}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-100"
              >
                <FaTiktok size={24} /> {/* TikTok Icon */}
              </a>
            </div>

              {/* Right: Footer Links */}
              <div className="space-x-2 text-md mb-4 sm:mb-0">
                <Link href="/terms" className="hover:text-rose-100">Terms & Conditions</Link>
                <span className="text-rose-100">/</span>
                <Link href="/about" className="hover:text-rose-100">About Us</Link>
                <span className="text-rose-100">/</span>
                <Link href="/disclaimer" className="hover:text-rose-100">Disclaimer</Link>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm py-4">
              &copy; {new Date().getFullYear()} Well-lit Pictures. All Rights Reserved.
            </div>
        </footer>

      </DisclosurePanel>
    </Disclosure>

  )
}
