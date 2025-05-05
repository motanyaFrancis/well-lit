import AudioManager from '@/app/utils/AudioManager';
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';
import { Track } from '@/app/types/music';

interface MusicCardProps {
  track: Track;
}

const MusicCard: React.FC<MusicCardProps> = ({ track }) => {
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

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

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
    <div className="group flex flex-col space-y-2 bg-white px-6 py-4 hover:bg-gray-50 rounded-lg transition shadow-sm">
      {/* Top: Album Art + Track Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            src={track.thumbnail}
            alt={track.title}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-semibold text-gray-900">{track.title}</span>
            <span className="text-sm text-gray-500">{track.artist}</span>
            {track.album && (
              <span className="text-xs text-gray-400">Album: {track.album}</span>
            )}
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="inline-flex items-center justify-center text-orange-600 hover:text-orange-700"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <PauseIcon className="h-6 w-6 md:h-7 md:w-7" />
          ) : (
            <PlayIcon className="h-6 w-6 md:h-7 md:w-7" />
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={track.audioUrl}
        preload="none"
      />
    </div>
  );
};

export default MusicCard;
