// app/discover/Layout.tsx
import Header from '@/app/components/Header';
import Navigation from '@/app/(main)/components/Navigation';
import Aside from '@/app/components/Aside';
import Footer from '@/app/components/Footer';
import FooterRight from '@/app/components/FooterRight';
import ArrowButtons from '@/app/components/ArrowButtons';
import SearchBar from '@/app/components/SearchBar';
import '@/app/styles/gallery.css';
import { ReactNode } from 'react';

interface DiscoverLayoutProps {
  children: ReactNode;
}

const DiscoverLayout: React.FC<DiscoverLayoutProps> = ({ children }) => {
  return (
    <section className='gallery_body'>
      <div className="blur"></div>
      <Header />
      {children}
      <Navigation />
      <SearchBar />
      <Aside />
      <ArrowButtons />
      <Footer />
      <FooterRight />
    </section>
  );
};

export default DiscoverLayout;