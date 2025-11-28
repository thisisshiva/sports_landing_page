import { Trophy, Users, Handshake, Eye, Calendar } from "lucide-react";

export function AchievementsSection() {
  const metrics = [
    {
      icon: Trophy,
      value: "60+",
      label: "Sports Tournaments"
    },
    {
      icon: Users,
      value: "2000+",
      label: "Registered Players"
    },
    {
      icon: Handshake,
      value: "15+",
      label: "Corporate Partners"
    },
    {
      icon: Eye,
      value: "12M+",
      label: "Cricheros Viewers"
    },
    {
      icon: Calendar,
      value: "7+",
      label: "Years Experience"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-[#545454] to-[#3a3a3a] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Our Journey in Numbers</h2>
          <p className="text-xl text-gray-300">Milestones that define our success</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 border-2 border-[#a7fa25]/40">
                  <Icon className="w-10 h-10 text-[#a7fa25]" />
                </div>
                <p className="text-4xl mb-2">{metric.value}</p>
                <p className="text-gray-300">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
