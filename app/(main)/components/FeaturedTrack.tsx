import AudioManager from '@/app/utils/AudioManager';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import { Track } from '@/app/types/music';

interface FeaturedTrackProps {
  track: Track;
}

const FeaturedTrack: React.FC<FeaturedTrackProps> = ({ track }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      AudioManager.play(audio);
    } else {
      AudioManager.pause(audio);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio && audio.duration) {
      const percent = (audio.currentTime / audio.duration) * 100;
      setProgress(percent);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="bg-gradient-to-r from-sky-400 via-sky-500 to-orange-500 text-white p-6 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Thumbnail */}
        <img
          src={track.thumbnail}
          alt={track.title}
          className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-lg"
        />

        {/* Track Info */}
        <div className="flex flex-col items-center md:items-start flex-grow">
          <span className="text-2xl font-bold">{track.title}</span>
          <span className="text-md text-white/90 mt-1">{track.artist}</span>
          {track.album && <span className="text-sm text-white/70">Album: {track.album}</span>}

          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="mt-4 inline-flex items-center px-4 py-2 bg-white text-sky-600 font-semibold rounded shadow hover:bg-gray-200"
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

      <audio
        ref={audioRef}
        src={track.audioUrl}
        preload="none"
      />
    </div>
  );
};

export default FeaturedTrack;
