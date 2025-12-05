"use client";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GallerySection() {
  const categories = ["All", "Match Highlights", "Trophy Celebrations", "Team Photos", "Ground Shots", "News Features"];
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryImages = [
    {url: "/static/images/all/Indian_cricket_Umpire.jpg", category: "Indian Cricket Umpire"},
    {
      url: "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzY0MzQ2OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Match Highlights"
    },
    {
      url: "https://images.unsplash.com/photo-1580831800257-f83135932664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwdHJvcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0MzQ2OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Trophy Celebrations"
    },
    {
      url: "https://images.unsplash.com/photo-1734519654307-ceb306e4073a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBjcmlja2V0JTIwdGVhbXxlbnwxfHx8fDE3NjQzNDY5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Team Photos"
    },
    {
      url: "https://images.unsplash.com/photo-1759210720510-59dfa8ff9f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwZ3JvdW5kJTIwYWVyaWFsfGVufDF8fHx8MTc2NDM0Njk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Ground Shots"
    },
    {
      url: "https://images.unsplash.com/photo-1709134800935-d00e89d5b8e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMGNyaWNrZXQlMjBwbGF5ZXJzfGVufDF8fHx8MTc2NDM0Njk3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Match Highlights"
    },
    {
      url: "https://images.unsplash.com/photo-1745180266203-5d648c4f4f37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYnJvYWRjYXN0aW5nJTIwY2FtZXJhfGVufDF8fHx8MTc2NDM0Njk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Corporate Events"
    },
    {
      url: "https://images.unsplash.com/photo-1710127789998-bf671c582707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBjcmlja2V0JTIwYm94fGVufDF8fHx8MTc2NDM0Njk4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Match Highlights"
    },
    {
      url: "https://images.unsplash.com/photo-1625401586082-9a9b17bc4ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMHRvdXJuYW1lbnR8ZW58MXx8fHwxNzY0MzQ2OTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      category: "Ground Shots"
    }
  ];

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-4">Moments That Define Us</h2>
          <p className="text-xl text-gray-600">Capturing the spirit of sports excellence</p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-[#a7fa25] text-[#545454]"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square"
            >
              <ImageWithFallback 
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
