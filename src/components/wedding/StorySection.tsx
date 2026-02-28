import { useState } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import dating from "../../image/date.webp";
import married from "../../image/maried.webp";
const stories = [
  {
    date: '02/2025',
    title: 'Lần đầu gặp gỡ',
    description: 'Chúng mình chẳng gặp nhau giữa ánh đèn lấp lánh của một buổi tiệc sang trọng, cũng không nhờ mai mối từ bạn bè hay người thân. Chỉ đơn giản là hai người xa lạ tình cờ lướt qua nhau trên mạng xã hội, rồi trò chuyện và ở lại. Thế giới ảo nhưng tình yêu là thật, một cuộc gặp gỡ rất tình cờ nhưng đủ để bắt đầu một câu chuyện dài lâu.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
  },
  {
    date: '02/2025',
    title: 'Buổi đầu hẹn hò',
    description: 'Chúng mình chọn một quán café nhỏ giữa lòng Hà Nội, nơi chúng mình ngồi cạnh nhau chia sẻ những câu chuyện đời thường. Giữa những câu chuyện giản dị và tiếng cười nhẹ nhàng, hai trái tim bắt đầu tìm thấy sự đồng điệu.',
    image: dating
  },
  {
    date: '02/2026',
    title: 'Cầu Hôn',
    description: 'Không có hoa hồng hay nhẫn kim cương lấp lánh, chỉ có một lời cầu hôn chân thành và một cái gật đầu đầy yêu thương. Từ khoảnh khắc ấy, chúng mình biết đã sẵn sàng đi cùng nhau đến hết một đời.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
  },

   {
    date: '03/2026',
    title: 'Kết Hôn',
    description: 'Từ những rung động đầu tiên đến lời hẹn ước trăm năm, chúng mình quyết định viết tiếp câu chuyện ấy bằng một đám cưới mang tên: Hạnh Phúc',
    image: married,
  },
];

const StorySection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="wedding-section bg-gradient-hero">
      <div className="wedding-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="wedding-subtitle">We Love Each Other</p>
        <h2 className="wedding-title text-[clamp(1.6rem,2.6vw,2.2rem)]">
        Câu Chuyện Tình Yêu
        </h2>

         <p className="max-w-2xl mx-auto mt-3 text-sm md:text-base leading-relaxed text-muted-foreground text-justify">

          Chúng mình tin rằng mỗi cuộc gặp gỡ đều có lý do của nó. Một người làm việc với hệ thống và công nghệ, một người làm việc với con người và cảm xúc. Từ hai thế giới khác biệt, chúng mình gặp nhau ở điểm chung sự thấu hiểu và chân thành. Sau nhiều lần “update cảm xúc” và “fix lỗi hiểu lầm”, chúng mình quyết định “merge cuộc đời” và tạo nên một dự án mang tên: Gia đình nhỏ.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

          {/* Story Items */}
          <div className="space-y-12">
            {stories.map((story, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10 mt-8" />

                {/* Date Badge */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-full -mt-2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    {story.date}
                  </span>
                </div>

                {/* Content Card */}
                <div 
                  className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] wedding-card cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {/* Mobile Date */}
                  <span className="md:hidden inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                    {story.date}
                  </span>

                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary fill-primary" />
                        {story.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${
                        expandedIndex === index ? '' : 'line-clamp-2'
                      }`}>
                        {story.description}
                      </p>
                    </div>
                    <button className="flex-shrink-0 p-2 rounded-full bg-muted hover:bg-primary/10 transition-colors">
                      {expandedIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Image */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    expandedIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
                  }`}>
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-48 md:h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
