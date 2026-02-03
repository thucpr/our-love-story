import { useState } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';

const stories = [
  {
    date: '17/08/2019',
    title: 'Lần đầu gặp gỡ',
    description: 'Lần đầu gặp nhau chẳng phải ở buổi tiệc sang trọng hay app hẹn hò, mà là ở một quán cafe nhỏ xinh. Định mệnh đã đưa chúng tôi đến với nhau.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600',
  },
  {
    date: '07/10/2019',
    title: 'Buổi đầu hẹn hò',
    description: 'Buổi hẹn hò đầu, người ta thường đi cà phê hay dạo phố, còn chúng tôi chọn… quán nướng 😆 Khói nghi ngút, thịt xèo xèo, bia lăn tăn bọt, chưa kịp "say bia" thì đã say nắng nhau mất rồi! 🍻',
    image: 'https://images.unsplash.com/photo-1529543544277-750e1a75a0e1?w=600',
  },
  {
    date: '06/04/2025',
    title: 'Cầu Hôn',
    description: 'Lần này, chúng tôi không đi học, không đi nhậu, mà… đi trốn deadline ở một bãi biển đầy nắng. Không có nhẫn kim cương lấp lánh, chỉ có một lời cầu hôn giản dị mà chân thành.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600',
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
          <h2 className="wedding-title">Câu Chuyện Tình Yêu</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            Chúng tôi gặp nhau vào một ngày thật tình cờ – rồi chẳng ai ngờ rằng 
            sự tình cờ ấy lại trở thành định mệnh.
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
