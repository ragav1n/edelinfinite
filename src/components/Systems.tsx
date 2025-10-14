import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface System {
  title: string;
  description: string;
  images: string[];
}

export default function Systems() {
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openSlideshow = (system: System) => {
    setSelectedSystem(system);
    setCurrentImageIndex(0);
  };

  const closeSlideshow = () => {
    setSelectedSystem(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedSystem && currentImageIndex < selectedSystem.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  const systems = [
    {
      title: 'Edel Fusion Curtainwall',
      description: 'A next-generation unit wise Edel Fusion Curtain Wall system engineered for complete installation from the building side, ensuring a seamless and uninterrupted external façade. Designed to be loaded from within the structure, it offers unmatched speed, safety, and precision—eliminating the need for access equipment and perfectly suited for high-rise or restricted-access projects.',
      images: ['/TIDCO_FINTECH_TOWER.png', '/fintech_ongoing_2.png']
    },
    {
      title: 'Edel Virtis',
      description: 'High-precision vertical mullions with integrated fins & slim silicone joints for Shopfronts, Lobby Facades and Canopies.',
      images: ['/TIDEL IT PARK.png']
    },
    {
      title: 'Edel ETFE Systems',
      description: `Revolutionary lightweight ETFE skylights and membranes offering exceptional light transmission, durability, and thermal performance. Our systems create stunning architectural features while providing weather protection and energy efficiency for modern buildings.`,
      images: ['/radisson_blu.png', '/Sattva Endeavor.png', '/sattva_knowledge_point_2.png', '/sattva_knowledge_point_3.png']
    },
    {
      title: 'Edel Timber Holz',
      description: 'Timber facades are a standout design feature, infusing any building with the warmth and character of natural wood. Its rich colors, distinctive grain and tactile texture create a timeless, welcoming aesthetic. By bringing nature into the built environment, timber lends every facade a calm, inviting presence and enduring appeal.',
      images: ['/SNN Raj.png', '/timber_1.png', '/timber_2.png', '/timber_3.png', '/timber_4.png']
    },
    {
      title: 'Edel Gridshell & Tensegrity',
      description: 'Both grid shell and tensegrity structures are innovative architectural and engineering designs that emphasize efficiency, aesthetics, and structural integrity. Here\u2019s a concise overview of each:',
      images: ['/sattva knowldge point.png']
    }
  ];

  return (
    <section id="systems" className="py-16 sm:py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Systems
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Proprietary facade technologies engineered for performance and beauty
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={system.images[0]}
                  alt={system.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                {system.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    +{system.images.length - 1} more
                  </div>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {system.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {system.description}
                </p>
                <button
                  onClick={() => openSlideshow(system)}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Slideshow Modal */}
      {selectedSystem && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeSlideshow}
              className="absolute -top-2 -right-2 sm:top-4 sm:right-4 text-white hover:text-orange-500 transition-colors z-10 bg-black/50 rounded-full p-2 sm:p-3"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Image */}
            <div className="relative">
              <img
                src={selectedSystem.images[currentImageIndex]}
                alt={`${selectedSystem.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg"
              />

              {/* Navigation Arrows */}
              {selectedSystem.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-black/50 rounded-full p-2 sm:p-3"
                  >
                    <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedSystem.images.length - 1}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-black/50 rounded-full p-2 sm:p-3"
                  >
                    <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </button>
                </>
              )}
            </div>

            {/* Image Counter */}
            <div className="text-center mt-3 sm:mt-4 text-white text-sm sm:text-base">
              {currentImageIndex + 1} of {selectedSystem.images.length}
            </div>

            {/* Thumbnail Navigation */}
            {selectedSystem.images.length > 1 && (
              <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                {selectedSystem.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-orange-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
