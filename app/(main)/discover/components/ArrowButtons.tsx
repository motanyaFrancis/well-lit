// app/discover/components/ArrowButtons.tsx
'use client'; // This component needs client-side interactivity

import React from 'react';

const ArrowButtons: React.FC = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: 100,
      behavior: 'smooth',
    });
  };

  return (
    <div className="arrowButton bg-sky-500"> {/* Use global class name */}
      <button><div className="arrowUpIcon"></div></button> {/* Use global class name */}
      <button onClick={handleScrollDown}><div className="arrowDownIcon"></div></button> {/* Use global class name */}
    </div>
  );
};

export default ArrowButtons;