'use client'

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import Navigation from "./components/Navigation";
import Cards from "./components/Card";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <>
      <Navigation />

      <div className="relative w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
        />

        <div className="relative z-10 flex flex-col h-full bg-black/50">
          <div className="mt-auto mb-10 px-4">
            <Cards />
          </div>

          <div className="absolute bottom-4 right-4 flex gap-4 z-20">
            <button
              onClick={togglePlay}
              className="bg-sky-400/70 hover:bg-sky-400/90 p-3 rounded-full shadow"
              aria-label="Toggle play"
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-sky-400/70 hover:bg-sky-400/90 p-3 rounded-full shadow"
              aria-label="Toggle mute"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
