// app/discover/page.tsx
import ImageGrid from '../components/ImageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photos',
};

const PhotoPage = () => {
  return (
    <ImageGrid />
  );
};

export default PhotoPage;