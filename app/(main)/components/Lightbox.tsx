import Image from 'next/image';
import React, { useState } from 'react';
import { ImageData } from '@/app/data/images';

interface LightboxProps {
  images: ImageData[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, index, onClose, onPrev, onNext }) => {
  const image = images[index];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
    if (touchStartX !== null) {
      const distance = e.changedTouches[0].clientX - touchStartX;
      const threshold = 50; // px to consider a valid swipe
      if (distance > threshold) {
        onPrev();
      } else if (distance < -threshold) {
        onNext();
      }
    }
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="lightbox-close" onClick={onClose}>
          ✕
        </button>
        <button className="lightbox-nav prev" onClick={onPrev}>
          ‹
        </button>
        <div className="lightbox-image">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
        <button className="lightbox-nav next" onClick={onNext}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
