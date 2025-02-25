import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa6'
import Link from 'next/link'

const socialMediaLinks = [
    { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebookF },
    { name: 'Twitter', href: 'https://twitter.com', icon: FaXTwitter },
    { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedinIn },
    { name: 'TikTok', href: 'https://tiktok.com', icon: FaTiktok }
];

const Footer = () => {
  return (
    <footer className="text-white py-6 mt-auto w-full sticky bottom-0">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center max-sm:items-start px-4 sm:px-8">
        {/* Left: Social Media Icons with Links */}
        <div className="flex space-x-6 mb-4 sm:mb-0 border-1 p-2 border-rose-100">
          {socialMediaLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-100"
            >
              <Icon size={24} /> {/* Social Media Icon */}
            </a>
          ))}
        </div>

        {/* Right: Footer Links */}
        <div className="space-x-2 text-md mb-4 sm:mb-0">
          <Link href="/terms" className="hover:text-rose-100">Terms & Conditions</Link>
          <span className="text-rose-100">/</span>
          <Link href="/about" className="hover:text-rose-100">About Us</Link>
          <span className="text-rose-100">/</span>
          <Link href="/disclaimer" className="hover:text-rose-100">Disclaimer</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Well-lit Pictures. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer;
