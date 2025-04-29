import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer bg-orange-600">
      <div className="scroll-icon-wrapper">
        <Image
          className="scroll-icon"
          src="/images/scroll-icon.svg"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Footer;