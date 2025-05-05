import { Metadata } from 'next';
import React from 'react';
import VideoReel from "@/app/components/VideoReel"



export const metadata: Metadata = {
  title: 'Film',
};

const Film: React.FC = () => {
  return (
    <>
      <div className='container_body'>
        <div>
          <VideoReel />
        </div>
      </div>
    </>
  );
};

export default Film;
