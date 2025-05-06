'use client';

import AudioManager from '@/app/utils/AudioManager';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import { Track } from '@/app/types/music';
import ColorThief from 'colorthief';
import Image from 'next/image';

interface FeaturedTrackProps {
  track: Track;
}

const FeaturedTrack: React.FC<FeaturedTrackProps> = ({ track }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [gradientStyle, setGradientStyle] = useState<string>('');
  const [buttonColor, setButtonColor] = useState<string>('#0ea5e9');
  const [palette, setPalette] = useState<number[][]>([]);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      AudioManager.play(audio);
    } else {
      AudioManager.pause(audio);
    }
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (palette.length === 3) {
      const direction = screenWidth < 768 ? 'to bottom' : 'to right';
      const gradient = `linear-gradient(${direction}, rgb(${palette[0].join(',')}), rgb(${palette[1].join(',')}), rgb(${palette[2].join(',')}))`;
      setGradientStyle(gradient);
    }
  }, [palette, screenWidth]);

  const handleImageLoad = () => {
    const colorThief = new ColorThief();
    const img = imgRef.current;
    if (img && img.complete) {
      try {
        const extractedPalette = colorThief.getPalette(img, 3);
        const dominant = colorThief.getColor(img);
        setPalette(extractedPalette);
        if (dominant) {
          setButtonColor(`rgb(${dominant.join(',')})`);
        }
      } catch (err) {
        console.warn('Color extraction failed:', err);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => {
      if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(percent);
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div
      className="text-white p-6 rounded-lg shadow-md mb-8"
      style={{
        background:
          gradientStyle ||
          'linear-gradient(to right, rgb(109, 109, 109), rgb(138, 138, 138), rgb(29, 29, 29))',
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Thumbnail */}
        <Image
          ref={imgRef}
          src={track.thumbnail}
          alt={track.title}
          crossOrigin="anonymous"
          onLoad={handleImageLoad}
          width={500}
          height={500}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-lg"
        />

        {/* Track Info */}
        <div className="flex flex-col items-center md:items-start flex-grow">
          <span className="text-2xl font-bold">{track.title}</span>
          <span className="text-md text-white/90 mt-1">{track.artist}</span>
          {track.album && (
            <span className="text-sm text-white/70">Album: {track.album}</span>
          )}

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            style={{
              backgroundColor: 'white',
              color: buttonColor,
              border: `2px solid ${buttonColor}`,
            }}
            className="mt-4 inline-flex items-center px-4 py-2 font-semibold rounded shadow hover:opacity-90 transition-all"
          >
            {isPlaying ? (
              <>
                <PauseIcon className="w-5 h-5 mr-2" /> Pause
              </>
            ) : (
              <>
                <PlayIcon className="w-5 h-5 mr-2" /> Play
              </>
            )}
          </button>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden mt-4">
            <div
              className="h-full bg-white transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={track.audioUrl} preload="none" />
    </div>
  );
};

export default FeaturedTrack;
