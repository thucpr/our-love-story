import { useState, useRef, useEffect } from 'react';
import { Music } from 'lucide-react';

const MUSIC_KEY = 'wedding_music_enabled';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTriedAutoPlay = useRef(false);

  const [isPlaying, setIsPlaying] = useState(() => {
    return localStorage.getItem(MUSIC_KEY) === 'true';
  });

  // 🔹 Try autoplay on scroll or first click
  useEffect(() => {
    const tryPlay = () => {
      if (!audioRef.current) return;
      if (hasTriedAutoPlay.current) return;
      if (localStorage.getItem(MUSIC_KEY) !== 'true') return;

      hasTriedAutoPlay.current = true;

      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    };

    window.addEventListener('scroll', tryPlay, { passive: true });
    document.addEventListener('click', tryPlay, { once: true });

    return () => {
      window.removeEventListener('scroll', tryPlay);
      document.removeEventListener('click', tryPlay);
    };
  }, []);

  // 🔹 Toggle manually
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      localStorage.setItem(MUSIC_KEY, 'false');
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          localStorage.setItem(MUSIC_KEY, 'true');
          setIsPlaying(true);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/My_Love.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="music-toggle group"
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        <div
          className={`absolute inset-0 rounded-full bg-primary/30 ${
            isPlaying ? 'animate-ping' : ''
          }`}
        />

        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-white rounded-full animate-pulse"
                  style={{
                    height: `${12 + i * 4}px`,
                    animationDelay: `${i * 0.12}s`,
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
