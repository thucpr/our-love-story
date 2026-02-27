import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import couple from "../../image/couple.webp";

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

  // ⚠ Tháng tính từ 0 → tháng 3 = 2
  const weddingDate = new Date(2026, 2, 12, 11, 0, 0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      } else {
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#f8f5f2] py-16 flex items-center justify-center overflow-hidden">
      
      {/* Ảnh trong khung (không full màn hình nữa) */}
      <div className="relative w-[90%] md:w-[73%] rounded-3xl overflow-hidden shadow-2xl">
        <img
          src={couple}
          alt="Couple"
          className="w-full h-auto object-contain"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Nội dung */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">

          <p className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-90">
            Save The Date
          </p>

          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl mb-6 drop-shadow-lg">
            Bá Thức & Vân Anh
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 md:w-24 bg-white/60" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <div className="h-px w-16 md:w-24 bg-white/60" />
          </div>

          <p className="text-2xl md:text-3xl font-light mb-8">
            12 Tháng 03, 2026
          </p>

          {/* Countdown */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {[
              { value: countdown.days, label: "Ngày" },
              { value: countdown.hours, label: "Giờ" },
              { value: countdown.minutes, label: "Phút" },
              { value: countdown.seconds, label: "Giây" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg min-w-[70px]"
              >
                <div className="text-2xl font-semibold text-pink-500">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-gray-600">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;