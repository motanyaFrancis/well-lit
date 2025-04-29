// app/discover/components/Aside.tsx
import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaTwitter, FaGooglePlusG } from 'react-icons/fa';

const Aside: React.FC = () => {
  return (
    <div className="border-none aside"> {/* Use global class names */}
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaInstagram size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaFacebookSquare size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaTwitter size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaGooglePlusG size={24} />
      </Link>
    </div>
  );
};

export default Aside;