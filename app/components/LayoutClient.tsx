'use client';

import React, { useEffect, useState } from 'react';
import Loader from './Loader';

interface Props {
  children: React.ReactNode;
}

const LayoutClient: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timeout);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
};

export default LayoutClient;
