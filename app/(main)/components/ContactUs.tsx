// components/ContactUs.tsx
import React from 'react';
import Image from 'next/image';
import Button from '@/app/(main)/components/ui/Button';

const ContactUs: React.FC = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="md:flex gap-x-24 clear-left md:mb-16 mb-10">
          <div className="md:mb-0 mb-4">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-5 md:text-left text-center">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg font-normal leading-7 mb-7 md:text-left text-center">
              Whether you have a concern or simply want to say hello, We are here to facilitate communication with you.
            </p>
            <div className="flex md:items-center md:justify-start justify-center">
              <Button variant="primary"  shape="full">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="border-l-2 md:border-orange-600 border-white px-10 py-6">
            <div className="mb-8">
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Email Address</h6>
              <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">pagedone@gmail.com</h3>
            </div>
            <div>
              <h6 className="text-gray-500 text-sm font-medium leading-5 pb-3 md:text-start text-center">Phone Number</h6>
              <h3 className="text-black text-xl font-semibold leading-8 md:text-start text-center">470-601-1911</h3>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          {[
            {
              country: 'United Kingdom',
              address: '123 High Street, Westminster, London',
              image: 'https://pagedone.io/asset/uploads/1696246502.png',
              alt: 'United Kingdom image',
            },
            {
              country: 'Germany',
              address: '101 Unter den Linden, Mitte District, Berlin',
              image: 'https://pagedone.io/asset/uploads/1696246522.png',
              alt: 'Germany image',
            },
            {
              country: 'France',
              address: '456 Rue de la Paix, 8th Arrondissement, Paris',
              image: 'https://pagedone.io/asset/uploads/1696246551.png',
              alt: 'France image',
            },
            {
              country: 'Switzerland',
              address: '987 Bahnhofstrasse, Zurich City Center, Zurich',
              image: 'https://pagedone.io/asset/uploads/1696246565.png',
              alt: 'Switzerland image',
            },
          ].map((location) => (
            <div key={location.country} className="h-96 relative flex justify-center">
              <div className="w-full h-full absolute bg-gradient-to-t from-gray-800/50 to-gray-600/50" />
              <Image
                src={location.image}
                alt={location.alt}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 mb-6 text-center px-6">
                <h5 className="text-white text-lg font-semibold leading-7 mb-2">{location.country}</h5>
                <p className="text-white text-base font-medium leading-6">{location.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
