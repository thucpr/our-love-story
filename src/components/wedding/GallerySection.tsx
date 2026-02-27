import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import g0 from "../../image/g0.webp";
import g1 from "../../image/g1.webp";
import g2 from "../../image/g2.webp";
import g3 from "../../image/g3.webp";
import g4 from "../../image/g4.webp";
import g5 from "../../image/g5.webp";
import g6 from "../../image/g6.webp";
import g7 from "../../image/g7.webp";

const galleryImages = [g0, g1, g2, g3, g4, g5, g6, g7];
const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section className="wedding-section bg-gradient-section">
      <div className="wedding-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="wedding-subtitle">Our Memories</p>
        <h2 className="wedding-title text-[clamp(1.6rem,2.6vw,2.2rem)]">
            Bộ Sưu Tập
          </h2>

        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image}
                alt={`Wedding photo ${index + 1}`}
                className={`w-full object-cover ${
                  index === 0 || index === 5 ? 'h-64 md:h-full' : 'h-48 md:h-64'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 p-2 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={galleryImages[selectedImage]}
            alt="Gallery preview"
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 p-2 text-white hover:text-primary transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImage ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(index);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
