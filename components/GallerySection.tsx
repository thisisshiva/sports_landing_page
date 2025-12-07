"use client";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryImage {
  url: string;
  category: string;
}

// Map category names to folder names
const categoryToFolder: Record<string, string> = {
  "Match Highlights": "Match_highlights",
  "Trophy Celebrations": "Trophies",
  "Team Photos": "Team",
  "News Features": "News_feature",
  "All": "all"
};

export function GallerySection() {
  const categories = ["All", "Match Highlights", "Trophy Celebrations", "Team Photos", "News Features"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllImages = async () => {
      setLoading(true);
      const allImages: GalleryImage[] = [];

      // Fetch images from "all" folder
      try {
        const allResponse = await fetch("/api/gallery?folder=all");
        if (allResponse.ok) {
          const allData = await allResponse.json();
          allImages.push(...allData.images.map((url: string) => ({
            url,
            category: "All"
          })));
        }
      } catch (error) {
        console.error("Error fetching 'all' images:", error);
      }

      // Fetch images from each category folder
      for (const [category, folder] of Object.entries(categoryToFolder)) {
        if (category === "All") continue; // Already handled above

        try {
          const response = await fetch(`/api/gallery?folder=${folder}`);
          if (response.ok) {
            const data = await response.json();
            allImages.push(...data.images.map((url: string) => ({
              url,
              category
            })));
          }
        } catch (error) {
          console.error(`Error fetching ${category} images:`, error);
        }
      }

      setGalleryImages(allImages);
      setLoading(false);
    };

    fetchAllImages();
  }, []);

  // Filter images based on active category
  const filteredImages = activeCategory === "All" 
    ? galleryImages.filter(img => img.category === "All")
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
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading gallery images...</p>
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No images found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={`${image.category}-${index}`}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer aspect-square"
              >
                <ImageWithFallback 
                  src={image.url}
                  alt={`Gallery image ${index + 1} - ${image.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
