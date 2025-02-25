import React from 'react';
import '../styles/globals.css';

const Loader: React.FC = () => {
  return (
    <div className="container">
      <div className="yellow"></div>
      <div className="red"></div>
      <div className="blue"></div>
      <div className="violet"></div>
    </div>
  );
}

export default Loader;
