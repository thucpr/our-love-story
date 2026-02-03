import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Nhà Gái',
    location: 'Xã Thắng Lợi - Tỉnh Thanh Hóa',
    schedules: [
      { time: '17:00', date: 'Thứ 4, 11/03/2026', event: 'Bữa cơm thân mật' },
      { time: '11:00', date: 'Thứ 5, 12/03/2026', event: 'Lễ Vu Quy' },
    ],
    mapUrl: 'https://maps.app.goo.gl/skM6ANq9PGaPcVFJ6',
  },
  {
    title: 'Nhà Trai',
    location: 'Thôn Cẩm Vinh - Xã Hoằng Lộc - Tỉnh Thanh Hóa',
    schedules: [
      { time: '17:00', date: 'Thứ 4, 11/03/2026', event: 'Bữa cơm thân mật' },
      { time: '11:00', date: 'Thứ 5, 12/03/2026', event: 'Lễ Thành Hôn' },
    ],
    mapUrl: 'https://maps.app.goo.gl/zG5ZTQjwaXUjRPDBA',
  },
];

const EventSection = () => {
  return (
    <section 
      className="wedding-section relative"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      <div className="wedding-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <p className="wedding-subtitle !text-white/90">Sự kiện đặc biệt</p>
          <h2 className="wedding-title !text-white">Lịch Trình</h2>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="wedding-card animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <h3 className="font-script text-3xl text-primary text-center mb-6">
                {event.title}
              </h3>
              
              <div className="flex items-start gap-3 mb-6 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>{event.location}</span>
              </div>

              <div className="space-y-4">
                {event.schedules.map((schedule, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50"
                  >
                    <div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-primary/10">
                      <Clock className="w-5 h-5 text-primary mb-1" />
                      <span className="text-sm font-semibold text-primary">{schedule.time}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{schedule.event}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {schedule.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="wedding-button w-full mt-6"
              >
                <MapPin className="w-4 h-4" />
                Xem bản đồ
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
