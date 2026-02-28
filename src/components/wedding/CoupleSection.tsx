import { Heart } from "lucide-react";
import groomImg from "../../image/cr.webp";
import brideImg from "../../image/cd1.webp";

const CoupleSection = () => {
  return (
    <section className="wedding-section bg-gradient-section py-20">
      <div className="wedding-container max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-playfair text-base tracking-[0.4em] uppercase text-primary opacity-80">
            HAPPY WEDDING
          </p>
        </div>

        {/* Couple Cards */}
        <div className="relative grid md:grid-cols-2 gap-10 lg:gap-20 items-stretch">

          {/* Heart Divider */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-xl animate-pulse-slow">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
          </div>

          {/* Groom */}
          <div className="wedding-card text-center group animate-fade-up h-full flex flex-col">
            <div className="relative w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
              
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

              {/* Image */}
              <img
                src={groomImg}
                alt="Chú rể"
                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="font-script text-4xl text-primary mb-3">
              Bá Thức
            </h3>

            <p className="text-muted-foreground leading-relaxed px-4 mt-auto">
              Chàng IT quen viết code và sửa bug, khi gặp đúng người, chàng nhận
              ra có một “vấn đề” không cần sửa chữa — chỉ cần yêu thương và bảo
              vệ cả đời 😍
            </p>
          </div>

          {/* Bride */}
          <div className="wedding-card text-center group animate-fade-up h-full flex flex-col">
            <div className="relative w-52 h-52 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">

              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />

              {/* Image */}
              <img
                src={brideImg}
                alt="Cô dâu"
                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="font-script text-4xl text-primary mb-3">
              Vân Anh
            </h3>

            <p className="text-muted-foreground leading-relaxed px-4 mt-auto">
              Nàng CS xinh xắn với nụ cười dịu dàng, quen chăm sóc khách hàng, cuối cùng nàng đã gặp được “vị khách” muốn ở bên để chăm sóc suốt đời và
              làm bến đỗ hạnh phúc 💕
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;