import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import couple from '../../image/couple.webp';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const HeroSection = () => {
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const weddingDate = new Date('2026-03-09T11:00:00+07:00');

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
           backgroundImage: `url(${couple})`,
           backgroundPosition: 'center 26%',
           
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              width: `${20 + i * 5}px`,
              height: `${20 + i * 5}px`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-up">
<div className="flex flex-col items-center text-center translate-y-6 md:translate-y-10">
  <p className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-90">
    Save The Date
  </p>

  <h1 className="font-script text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
    Bá Thức & Vân Anh
  </h1>
</div>

        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 md:w-24 bg-white/60" />
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <div className="h-px w-16 md:w-24 bg-white/60" />
        </div>

        <p className="text-2xl md:text-3xl font-light mb-12">
          12 Tháng 03, 2026
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
  {[
    { value: countdown.days, label: 'Ngày' },
    { value: countdown.hours, label: 'Giờ' },
    { value: countdown.minutes, label: 'Phút' },
    { value: countdown.seconds, label: 'Giây' },
  ].map((item, index) => (
    <div
      key={index}
      className="countdown-box px-3 py-2 min-w-[64px]"
    >
      <span className="countdown-number text-2xl md:text-3xl">
        {String(item.value).padStart(2, '0')}
      </span>
      <span className="countdown-label text-[10px]">
        {item.label}
      </span>
    </div>
  ))}
</div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
