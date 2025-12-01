"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { GalleryModal } from "./GalleryModal";

export function TournamentsGrid() {
  const [selectedGallery, setSelectedGallery] = useState<{ title: string; year: string } | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const tournaments = [
    {
      title: "2019: Noida Youth Cricket League (NYCL)",
      year: "2019",
      image: "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNyaWNrZXQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2NDM0Njk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2020: Late Smt. Manjeet Kaur U19 Trophy",
      year: "2020",
      image: "https://images.unsplash.com/photo-1580831800257-f83135932664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MzQ2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      viewership: "CRICHEROS VIEWERSHIP : 9389"
    },
    {
      title: "2021: Manjeet Kaur Memorial Open T20",
      year: "2021 ",
      image: "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzY0MzQ2OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2022: Box Cricket Premier League (BCPL)",
      year: "2022",
      image: "https://images.unsplash.com/photo-1710127789998-bf671c582707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBjcmlja2V0JTIwYm94fGVufDF8fHx8MTc2NDM0Njk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2023: GSR Dehradun Youth Tour",
      year: "2023",
      image: "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNyaWNrZXQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2NDM0Njk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2024: All India JK T20 Cricket Tournament",
      year: "2024",
      image: "https://images.unsplash.com/photo-1759210720510-59dfa8ff9f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwYWVyaWFsfGVufDF8fHx8MTc2NDM0Njk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2025: Inter-Society Cricket League",
      year: "2025",
      image: "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzY0MzQ2OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "2026: Private Academy Championships",
      year: "2026",
      image: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjcmlja2V0JTIwdGVhbXxlbnwxfHx8fDE3NjQzNDY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div id="tournaments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Tournaments We Have Organized</h2>
          <p className="text-xl text-gray-600">Delivering excellence across India's cricket landscape</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments.map((tournament, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Card clicked:', tournament.title, tournament.year);
                if (!isOpening) {
                  setIsOpening(true);
                  const gallery = { title: tournament.title, year: tournament.year.trim() };
                  console.log('Setting selected gallery:', gallery);
                  setSelectedGallery(gallery);
                  setTimeout(() => setIsOpening(false), 300);
                }
              }}
            >
              <div className="relative h-64">
                <ImageWithFallback 
                  src={tournament.image}
                  alt={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h3 className="text-lg mb-2">{tournament.title}</h3>
                {tournament.viewership && (
                  <div className="text-sm inline-flex items-center gap-2 text-[#a7fa25] group-hover:gap-3 transition-all">
                    {tournament.viewership}
                    <ExternalLink className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGallery && (
        <>
          {console.log('Rendering GalleryModal with:', selectedGallery)}
          <GalleryModal
            isOpen={true}
            onClose={() => {
              console.log('Closing modal');
              setSelectedGallery(null);
              setIsOpening(false);
            }}
            title={selectedGallery.title}
            year={selectedGallery.year}
          />
        </>
      )}
    </div>
  );
}
