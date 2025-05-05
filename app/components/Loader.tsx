import React from 'react';
import Image from 'next/image';

const Loader: React.FC = () => {
  return (
    <div style={styles.container}>
      <Image
        src="/loader.gif"
        alt="Loading..."
        width={200}
        height={200}
        unoptimized
      />
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1b1b1b',
  },
};

export default Loader;
