// app/discover/components/Aside.tsx
import Link from 'next/link';
import { FaInstagram, FaSquareFacebook, FaTiktok, FaXTwitter } from 'react-icons/fa6';

const Aside: React.FC = () => {
  return (
    <div className="border-none aside"> {/* Use global class names */}
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaInstagram size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaSquareFacebook size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaXTwitter size={24} />
      </Link>
      <Link href="https://twitter.com/nuclearfischion" className="centerItem" target="_blank" rel="noopener noreferrer"> {/* Use global class names */}
        <FaTiktok size={24} />
      </Link>
    </div>
  );
};

export default Aside;