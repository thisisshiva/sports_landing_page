import { Calendar, Briefcase, Tv, Users, Zap, Handshake, MapPin } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Calendar,
      title: "Sports Event Management",
      description: "Professional cricket tournaments, league operations, and complete ground management.",
      color: "bg-[#545454]"
    },
    {
      icon: Briefcase,
      title: "Corporate Cricket Leagues",
      description: "Creator of Legends Corporate League (LCL) — India's first structured cricket league for professionals.",
      color: "bg-[#a7fa25]"
    },
    {
      icon: Tv,
      title: "Media & Live Broadcasting",
      description: "Live stream production, highlight reels, OTT preparation, and branded content.",
      color: "bg-[#545454]"
    },
    {
      icon: Users,
      title: "Youth Development Leagues",
      description: "Academy tours, U14–U19 tournaments, learning camps & exposure programs.",
      color: "bg-[#a7fa25]"
    },
    {
      icon: Zap,
      title: "Box Cricket & Indoor Events",
      description: "High-energy formats for corporates, societies & colleges.",
      color: "bg-[#545454]"
    },
    {
      icon: Handshake,
      title: "Sponsorship & Brand Integration",
      description: "End-to-end brand partnerships across events & media platforms.",
      color: "bg-[#a7fa25]"
    },
    {
      icon: MapPin,
      title: "Ground Management",
      description: "Complete venue management, pitch preparation, and facility coordination for all tournaments.",
      color: "bg-[#545454]"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">Comprehensive sports management solutions for every need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-[#a7fa25] transition-all"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${service.color} rounded-lg mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
