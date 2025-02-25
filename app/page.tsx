import Navigation from "./components/Navigation";
import Cards from "./components/Card";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'

const socialMediaLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
  { name: 'Twitter', href: 'https://twitter.com', icon: FaXTwitter },
  { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
  { name: 'TikTok', href: 'https://tiktok.com', icon: FaTiktok }
];



export default function Home() {
  return (
    <>

      <Navigation />
      
      <div className="flex flex-col ">
        <div className="relative lg:mt-0 md:mt-28 sm:mt-32 mt-36">
          <div className="row" >
          <Cards />            
          </div>
        </div>
      </div>
    </>
  );
}
