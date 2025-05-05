import React from 'react';
import styles from '@/app/styles/VideoReel.module.css';

const videos = [
  {
    id: 1,
    title: 'Nature Documentary',
    src: '/videos/nature.mp4',
    thumbnail: '/thumbnails/nature.jpg',
  },
  {
    id: 2,
    title: 'City Life',
    src: '/videos/city.mp4',
    thumbnail: '/thumbnails/camera.jpg',
  },
  {
    id: 3,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
  {
    id: 4,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
  {
    id: 5,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
  {
    id: 6,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
  {
    id: 7,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
  {
    id: 8,
    title: 'Underwater World',
    src: '/videos/underwater.mp4',
    thumbnail: '/thumbnails/sky.jpg',
  },
];

const VideoReel = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full h-full overflow-y-auto sm:overflow-x-auto sm:overflow-y-hidden">
        <div
          className={`flex flex-col sm:flex-row gap-4 sm:gap-8 sm:justify-center ${styles.scrollContainer} pt-20 mx-auto my-auto`}
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-full sm:w-36 md:w-48 lg:w-64 xl:w-80 bg-gray-800 text-white shadow-lg snap-start"
            >
              <div className="relative group overflow-hidden ">
                <video
                  className="w-full aspect-[10/16] object-cover"
                  poster={video.thumbnail}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 group-hover:border-3 group-hover:border-gray-300"></div>

                {/* Title centered on hover */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="text-white text-sm md:text-base uppercase font-bold">
                    {video.title}
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoReel;
