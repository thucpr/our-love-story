import { Heart } from 'lucide-react';

const CoupleSection = () => {
  return (
    <section className="wedding-section bg-gradient-section">
      <div className="wedding-container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="wedding-subtitle">Lời cảm ơn</p>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg mt-6 font-script text-2xl">
            Chúng con xin gửi lời cảm ơn chân thành và sâu sắc nhất đến ông bà, cô bác, 
            anh chị em, bạn bè và đồng nghiệp đã dành thời gian quý báu đến tham dự lễ cưới của chúng con
          </p>
        </div>

        {/* Couple Cards */}
        <div className="relative grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Heart Divider - Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-xl animate-pulse-slow">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          {/* Groom */}
          <div
            className="wedding-card text-center group animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-slow" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
                alt="Chú rể"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-script text-4xl text-primary mb-2">Bá Thức</h3>
            <p className="text-muted-foreground leading-relaxed">
              Chàng IT quen sửa lỗi bug 😂, gặp nàng mới biết, có những "vấn đề" 
              sinh ra để yêu và chăm sóc cả đời 😍
            </p>
          </div>

          {/* Bride */}
          <div
            className="wedding-card text-center group animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse-slow" />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                alt="Cô dâu"
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="font-script text-4xl text-primary mb-2">Vân Anh</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nàng CS xinh xắn, duyệt mẫu nhanh như gió, vậy mà chỉ chậm một nhịp… 
              đã rơi trọn vào "bản thiết kế tình yêu" của chàng IT 😍
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;