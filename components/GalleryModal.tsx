"use client";

import { useState, useEffect, useCallback } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { X } from "lucide-react";

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  year: string;
  description: string;
}

export function GalleryModal({ isOpen, onClose, title, year, description }: GalleryModalProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fetchImages = useCallback(async (folder: string) => {
    setLoading(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(`/api/gallery?folder=${encodeURIComponent(folder)}`, {
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.statusText}`);
      }
      const data = await response.json();
      setImages(data.images || []);
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.error("Request timeout: Taking too long to fetch images");
      } else {
        console.error("Error fetching images:", error);
      }
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen && year) {
      const sanitizedYear = year.trim();
      if (sanitizedYear) {
        fetchImages(sanitizedYear);
      }
    } else {
      setImages([]);
      setSelectedImage(null);
      setLoading(false);
    }
  }, [isOpen, year, fetchImages]);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(10px)',
        }}
      />

      {/* Modal - Centered */}
      <div
        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <div
          className="bg-white rounded-lg shadow-2xl w-full max-w-7xl max-h-[90vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            width: '100%',
            maxWidth: '80rem',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div className="px-6 pt-6 pb-4 border-b flex items-center justify-between flex-shrink-0" style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-semibold text-gray-900" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827' }}>
                {title}
              </h2>
              <p className="text-sm text-gray-500 mt-1" style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>
                <b>Year:</b> { year || "N/A"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 rounded-lg p-2 hover:bg-gray-100 transition-colors flex-shrink-0"
              aria-label="Close modal"
              style={{
                marginLeft: '1rem',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X className="w-5 h-5 text-gray-500" style={{ width: '1.25rem', height: '1.25rem', color: '#6b7280' }} />
            </button>
          </div>

          {/* Content */}
          <div 
            className="flex-1 overflow-y-auto px-6 pb-6" 
            style={{ 
              flex: 1, 
              overflowY: 'auto', 
              padding: '1.5rem', 
              paddingBottom: '1.5rem', 
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {/* Description */}
            {description && (
              <div className="mb-6 pb-6 border-b" style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #e5e7eb' }}>
                <p className="text-sm text-gray-700" style={{ fontSize: '0.875rem', color: '#374151' }}>
                  <b>Description:</b>
                </p>
                <p className="text-sm text-gray-600 mt-2" style={{ fontSize: '0.875rem', color: '#4b5563', marginTop: '0.5rem', whiteSpace: 'pre-line' }}>
                  {description}
                </p>
              </div>
            )}
            
            {loading ? (
              <div className="flex items-center justify-center py-20" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="text-gray-500" style={{ color: '#6b7280' }}>Loading images...</div>
              </div>
            ) : images.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '5rem', paddingBottom: '5rem' }}>
                <div className="text-gray-500 text-lg mb-2" style={{ color: '#6b7280', fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  No images available for {year}
                </div>
                <div className="text-gray-400 text-sm" style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  This gallery folder is empty or doesn't exist.
                </div>
              </div>
            ) : (
              <>
                <style dangerouslySetInnerHTML={{__html: `
                  .gallery-grid-modal {
                    display: grid !important;
                    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
                    gap: 0.75rem !important;
                  }
                  @media (min-width: 640px) {
                    .gallery-grid-modal {
                      grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
                    }
                  }
                  @media (min-width: 768px) {
                    .gallery-grid-modal {
                      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
                    }
                  }
                `}} />
                <div className="gallery-grid-modal">
                  {images.map((imagePath, index) => (
                    <div
                      key={`${imagePath}-${index}`}
                      className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(imagePath)}
                      style={{
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '1 / 1',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        cursor: 'pointer',
                      }}
                    >
                      <ImageWithFallback
                        src={imagePath}
                        alt={`${title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      />
                      <div 
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" 
                        style={{ 
                          position: 'absolute', 
                          top: 0, 
                          left: 0, 
                          right: 0, 
                          bottom: 0 
                        }}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Full-screen image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[10001] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10001,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: 'white',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <X className="w-8 h-8" style={{ width: '2rem', height: '2rem' }} />
          </button>
          <div className="max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '80rem', maxHeight: '100%' }}>
            <ImageWithFallback
              src={selectedImage}
              alt={title}
              className="max-w-full max-h-[90vh] object-contain"
              style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
