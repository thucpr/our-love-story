import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    title: 'Nhà Gái',
    location: 'Xã Tế Thắng, Huyện Nông Cống, Tỉnh Thanh Hóa',
    schedules: [
      { time: '17:00', date: 'Thứ 4, 11/03/2026', event: 'Bữa cơm thân mật' },
      { time: '11:00', date: 'Thứ 5, 12/03/2026', event: 'Lễ Vu Quy' },
    ],
    mapUrl: 'https://maps.google.com/maps?q=Tế+Thắng,+Nông+Cống,+Thanh+Hóa',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.123456789!2d105.6617813!3d19.6839322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136fc336156dc0f%3A0x7cfeae93577b752d!2zVOG6vyBUaOG6r25nLCBOw7RuZyBD4buRbmcsIFRoYW5oIEjDs2EsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890',
  },
  {
    title: 'Nhà Trai',
    location: 'Xã Hoằng Tân, Huyện Hoằng Hóa, Tỉnh Thanh Hóa',
    schedules: [
      { time: '17:00', date: 'Thứ 4, 11/03/2026', event: 'Bữa cơm thân mật' },
      { time: '11:00', date: 'Thứ 5, 12/03/2026', event: 'Lễ Thành Hôn' },
    ],
    mapUrl: 'https://maps.google.com/maps?q=Hoằng+Tân,+Hoằng+Hóa,+Thanh+Hóa',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15007.123456789!2d105.8591213!3d19.7826836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31365746cf493b4b%3A0xcd675f6f9104cc89!2zSG_hurFuZyBUw6JuLCBIb-G6sW5nIEjDs2EsIFRoYW5oIEjDs2EsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890',
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
                className="wedding-button w-full mt-4"
              >
                <MapPin className="w-4 h-4" />
                Mở Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
