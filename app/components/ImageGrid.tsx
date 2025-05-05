'use client'

import Image from 'next/image';
import React, { useState } from 'react';
import { images } from '@/app/data/images';
import Lightbox from './Lightbox';

const ImageGrid: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="container_gallery pt-3">
        {images.map((img, index) => (
          <div key={index} className={img.layoutClass}>
            <Image
              className="img_grid"
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              onClick={() => setSelectedIndex(index)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() => setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length)}
          onNext={() => setSelectedIndex((prev) => (prev! + 1) % images.length)}
        />
      )}
    </>
  );
};

export default ImageGrid;
