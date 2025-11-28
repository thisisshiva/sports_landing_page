"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const handleExplore = () => {
    document.getElementById('tournaments')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleForm = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-[#545454] via-[#3a3a3a] to-[#2a2a2a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl leading-tight">
              Building India's Next Generation of <span className="text-[#a7fa25]">Sports & Corporate Leagues</span>
            </h1>
            <p className="text-xl text-gray-300">
              Professional sports management, corporate cricket leagues, youth tournaments, and media production — all under one brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleExplore}
                className="bg-[#a7fa25] text-[#545454] px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-[#95e020] transition-colors"
              >
                Explore Our Tournaments
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={handleForm}
                className="bg-transparent border-2 border-[#a7fa25] text-[#a7fa25] px-8 py-4 rounded-lg hover:bg-[#a7fa25] hover:text-[#545454] transition-colors"
              >
                Fill Form
              </button>
            </div>
          </div>

          {/* Founder Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#a7fa25]/20 to-transparent z-10"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1671450960874-0903baf942c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDM0Njk3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Neeraj Sachdeva - Founder"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#a7fa25] text-[#545454] px-6 py-4 rounded-xl shadow-xl">
              <p className="text-sm">Founder & MD</p>
              <p>Neeraj Sachdeva</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
