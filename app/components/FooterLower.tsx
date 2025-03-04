import { FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6'


const Footer = () => {
  return (
    <>
      <div className='container mx-auto text-white sticky bottom-0'>

        {/* Footer Bottom Section */}
        <div className="relative mt-8 bottom-0">
          <div className="relative flex flex-col md:flex-row justify-between items-center border-t border-gray-100 pt-4">
            <p className="text-sm text-gray-100 text-center md:text-left mb-4 md:mb-0">&copy; {new Date().getFullYear()} Well Lit Pictures.</p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-100 hover:text-orange-500">
                <FaTiktok className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-100 hover:text-orange-500">
                <FaYoutube className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-100 hover:text-orange-500">
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-100 hover:text-orange-500">
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
