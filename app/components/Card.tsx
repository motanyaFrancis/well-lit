'use client';

import Link from 'next/link';
import { BsCamera2, BsFilm } from 'react-icons/bs';
import { GiSaxophone } from 'react-icons/gi';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cardData = [
  {
    id: 1,
    icon: BsCamera2,
    title: 'Photo',
    contactLink: '/photo',
  },
  {
    id: 2,
    icon: BsFilm,
    title: 'Film',
    contactLink: '/film',
  },
  {
    id: 3,
    icon: GiSaxophone,
    title: 'Music',
    contactLink: '/music',
  },
];

const Cards: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center gap-6 flex-col sm:flex-row px-4 py-8">
      {cardData.map((card) => (
        <TiltCard key={card.id} card={card} />
      ))}
    </div>
  );
};

// Component that handles the 3D tilt + animation
const TiltCard = ({ card }: { card: (typeof cardData)[0] }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, 300], [15, -15]);
  const rotateY = useTransform(x, [0, 300], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = (ref.current as unknown as HTMLDivElement).getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX);
    y.set(posY);
  }

  return (
    <Link href={card.contactLink}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        whileHover={{
          scale: 1.06,
        }}
        style={{ rotateX, rotateY }}
        className="relative cursor-pointer text-center group"
      >
        {/* Outer Glow */}
        <div className="bg-orange-600/25 blur-lg opacity-25 absolute rounded-xl h-full w-full -left-2 -top-2" />

        {/* Card */}
        <div className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 bg-gray-950/50 border-t-8 border-r-8 border-gray-100/50 rounded-full shadow-lg relative space-y-4 flex flex-col justify-center items-center overflow-hidden">
          {/* Light Beam */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-1/3 h-full bg-white/20 blur-xl transform -skew-x-12 animate-beam-sweep" />
          </div>

          {/* Icon */}
          <div className="mb-2 z-10 relative">
            <card.icon className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white" />
          </div>
          {/* Title */}
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-100 uppercase z-10 relative">
            {card.title}
          </h2>
        </div>
      </motion.div>
    </Link>
  );
};

export default Cards;
