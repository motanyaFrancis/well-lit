'use client';

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useReducer } from 'react';

interface Product {
  name: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const products: Product[] = [
  { name: 'Analytics', description: 'Understand your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Engage customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Data safety ensured', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Strategic funnels', href: '#', icon: ArrowPathIcon },
];

type State = { mobileMenuOpen: boolean };
type Action = { type: 'TOGGLE_MENU' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, mobileMenuOpen: !state.mobileMenuOpen };
    default:
      return state;
  }
};

export default function Navigation() {
  const [state, dispatch] = useReducer(reducer, { mobileMenuOpen: false });

  const productItems = useMemo(
    () =>
      products.map((item) => (
        <div key={item.name} className="group flex items-center gap-x-4 rounded-lg p-4 hover:bg-gray-100/20">
          <item.icon className="size-6 text-gray-600 group-hover:text-indigo-600" />
          <div>
            <a href={item.href} className="font-semibold text-gray-900">
              {item.name}
            </a>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      )),
    []
  );

  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 py-3">
        <Link href="/" >
          <Image
            alt="Well Lit Pictures"
            src="/logo.png"
            className="h-20 w-auto bg-whi"
            width={80}
            height={80}
          />
        </Link>
        <div className="flex lg:hidden">
          <button onClick={() => dispatch({ type: 'TOGGLE_MENU' })} className="p-2 text-gray-700">
            <Bars3Icon className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex gap-x-12">
          <Popover>
            <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900">
              Product <ChevronDownIcon className="size-5 text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute mt-3 max-w-md rounded-xl bg-white shadow-md z-10 ">
              {productItems}
            </PopoverPanel>
          </Popover>
          <a href="#" className="font-semibold text-gray-900 hover:underline hover:decoration-[10px] hover:decoration-orange-500 underline-offset-[-2px]">Features</a>
          <a href="#" className="font-semibold text-gray-900 hover:underline hover:decoration-[10px] hover:decoration-orange-500">Marketplace</a>
          <a href="#" className="font-semibold text-gray-900 hover:underline hover:decoration-[10px] hover:decoration-orange-500">Company</a>
        </PopoverGroup>
        {/* <a href="#" className="hidden lg:block font-semibold text-gray-900">Log in →</a> */}
      </nav>
      <AnimatePresence>
        {state.mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 bg-white z-50 p-6 lg:hidden"
          >
            <div className="flex justify-between">
              <Link href="/" >
                <Image
                  alt="Well Lit Pictures"
                  src="/logo.png"
                  className="h-20 w-auto bg-whi"
                  width={80}
                  height={80}
                />
              </Link>
              <button onClick={() => dispatch({ type: 'TOGGLE_MENU' })} className="p-2 text-gray-700">
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="mt-6">
              {productItems}
              <a href="#" className="block mt-4 font-semibold text-gray-900">Features</a>
              <a href="#" className="block mt-4 font-semibold text-gray-900">Marketplace</a>
              <a href="#" className="block mt-4 font-semibold text-gray-900">Company</a>
              <a href="#" className="block mt-4 font-semibold text-gray-900">Log in</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
