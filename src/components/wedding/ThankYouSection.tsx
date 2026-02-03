import { Heart } from 'lucide-react';

const ThankYouSection = () => {
  return (
    <section className="wedding-section bg-gradient-section">
      <div className="wedding-container">
        <div className="wedding-card max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary/50" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse-slow" />
            <div className="h-px w-12 bg-primary/50" />
          </div>

          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
            Trân Trọng Cảm Ơn
          </h2>

          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Chúng tôi xin gửi lời cảm ơn chân thành nhất đến gia đình, bạn bè và những người 
            thân yêu đã luôn đồng hành, sẻ chia niềm vui và chúc phúc cho chúng tôi. 
            Sự hiện diện và tình cảm của mọi người chính là niềm hạnh phúc và vinh dự lớn lao 
            nhất trong ngày trọng đại này.
          </p>

          <div className="font-script md:text-5xl text-primary mb-6">
            Bá Thức & Vân Anh
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            12.03.2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
