import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="footer bg-orange-600 flex items-baseline justify-center py-4">
      <p className="text-white text-sm mt-auto">
        &copy; {new Date().getFullYear()} Well-Lit Pictures. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
