import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto-play on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        setHasInteracted(true);
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
        document.removeEventListener('click', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, [hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="music-toggle group"
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        <div className={`absolute inset-0 rounded-full bg-primary/30 ${isPlaying ? 'animate-ping' : ''}`} />
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-pulse"
                  style={{
                    height: `${12 + Math.random() * 8}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          ) : (
            <Music className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
    </>
  );
};

export default MusicPlayer;
