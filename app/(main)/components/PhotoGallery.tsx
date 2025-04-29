// app/discover/components/PhotoGallery.tsx
import React from 'react';
import Image from 'next/image';
import { ImageData } from '../../lib/images'; // Adjust path if needed
import styles from '../../styles/styles.module.css'; // Import your styles

interface PhotoGalleryProps {
  images: ImageData[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
  return (
    <div className={styles.container}> {/* Use your grid container style */}
      {images.map((image, index) => (
        <div key={index} className={image.className}> {/* Use the className for layout */}
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;