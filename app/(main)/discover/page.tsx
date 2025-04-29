// app/discover/page.tsx
import ImageGrid from '../components/ImageGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Discover',
};

const DiscoverPage = () => {
  return (
    <ImageGrid />
  );
};

export default DiscoverPage;