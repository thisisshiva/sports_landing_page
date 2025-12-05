"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Trophy, Users, Heart, Tv, TrendingUp } from "lucide-react";

export function FeaturedProject() {
  const features = [
    { icon: Trophy, label: "Franchise Model" },
    { icon: Users, label: "Corporate Networking" },
    { icon: Heart, label: "Fitness & Wellness Focus" },
    { icon: Tv, label: "Live Broadcasts" },
    { icon: TrendingUp, label: "National Expansion Roadmap" }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="lcl" className="py-20 bg-gradient-to-br from-[#a7fa25]/10 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-[#a7fa25] text-[#545454] px-6 py-2 rounded-full mb-4">
            Flagship Project
          </div>
          <h2 className="text-4xl mb-4">Legends Corporate League (LCL)</h2>
          <p className="text-xl text-gray-700">India's first corporate-exclusive cricket league</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback 
                src="LCL_JK.svg"
                alt="Legends Corporate League"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Legends Corporate League (LCL) is revolutionizing corporate cricket in India. 
              Built on a franchise model, LCL brings together corporate professionals for competitive 
              cricket while fostering networking, fitness, and team building.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#545454] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#a7fa25]" />
                    </div>
                    <p className="text-lg text-gray-800">{feature.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#545454] text-white px-8 py-4 rounded-lg hover:bg-[#3a3a3a] transition-colors">
                Know More About LCL
              </button>
              <button 
                onClick={scrollToContact}
                className="bg-[#a7fa25] text-[#545454] px-8 py-4 rounded-lg hover:bg-[#95e020] transition-colors"
              >
                Become a Sponsor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
