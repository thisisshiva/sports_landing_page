import { Trophy, Users, Target, Tv } from "lucide-react";

export function AboutFounder() {
  const highlights = [
    {
      icon: Trophy,
      value: "60+",
      label: "Tournaments Completed"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Players Engaged"
    },
    {
      icon: Target,
      value: "300+",
      label: "Clubs & Academies"
    },
    {
      icon: Tv,
      value: "Live",
      label: "Broadcast & Production"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Meet Our Founder – Neeraj Sachdeva</h2>
          <p className="text-xl text-[#545454]">Founder & Managing Director, JK Sports & Media Ventures Pvt. Ltd.</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            With 7+ years of experience in sports event management, Neeraj has executed 60+ tournaments, 
            youth leagues, and corporate events across North India. His vision is to build structured sports 
            platforms that empower talent, promote fitness, and elevate corporate sports culture.
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a7fa25]/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-[#545454]" />
                </div>
                <p className="text-3xl text-[#545454] mb-2">{item.value}</p>
                <p className="text-gray-600">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            <span className="text-black font-extrabold">100+ cricket clubs</span> & <span className="text-black font-extrabold">200+ cricket academies</span> engaged with us throughout India
          </p>
        </div>
      </div>
    </div>
  );
}
