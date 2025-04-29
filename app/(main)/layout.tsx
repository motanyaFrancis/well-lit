// app/discover/Layout.tsx
import Header from './components/Header';
import Navigation from './components/Navigation';
import Aside from './components/Aside';
import Footer from './components/Footer';
import FooterRight from './components/FooterRight';
import ArrowButtons from './components/ArrowButtons';
import SearchBar from './components/SearchBar';
import './styles/gallery.css';
import { ReactNode } from 'react';
import Head from 'next/head';

interface DiscoverLayoutProps {
  children: ReactNode;
}

const DiscoverLayout: React.FC<DiscoverLayoutProps> = ({ children }) => {
  return (
    <section className='gallery_body'>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:900|Sarabun:200,400,800"
          rel="stylesheet"
        />
      </Head>
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