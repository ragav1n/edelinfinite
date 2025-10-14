import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/ETFE.png',
    '/fintech ongoing.png',
    '/TIDEL IT PARK.png',
    '/SNN.png',
    '/Sarvana Store.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '4+', label: 'Years Experience' },
    { value: '25+', label: 'Expert Team' },
    { value: '2', label: 'Global Offices' }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/40" />

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Crafting <span className="text-orange-500 drop-shadow-lg">Innovative</span> High-Performance Facades
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 leading-relaxed max-w-4xl drop-shadow-md">
            We engineer fast-to-install facade systems, ETFE skylights, grid shells, and tensegrity
            canopies that merge performance, speed, and elegance. Designed in modules. Delivered at pace.
            Installed with precision.
          </p>

          <p className="text-base sm:text-lg text-white mb-8 sm:mb-12 max-w-4xl leading-relaxed drop-shadow-md">
            At Edel, we see possibility where others see limits. Our engineering mindset is so adaptive
            that even a crushed piece of paper can spark a structure — precise, functional, and enduring.
            For us, excellence isn't an option; it's our foundation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 relative z-20">
            <button
              onClick={() => onNavigate('projects')}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-orange-500/30 hover:scale-105 border-2 border-orange-400 relative z-30"
            >
              View Our Projects
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-1 sm:mb-2 drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-white font-medium drop-shadow-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4">
        <div className="flex gap-2 sm:gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-orange-500 w-8 sm:w-6 sm:h-6' : 'bg-white/50 hover:bg-white/80 w-3 h-3 sm:w-2 sm:h-2'
              }`}
            />
          ))}
        </div>
        <div className="animate-bounce">
          <div className="w-6 h-10 sm:w-4 sm:h-8 border-2 border-white/50 rounded-full flex items-start justify-center p-1 sm:p-2">
            <div className="w-1.5 h-3 sm:w-1 sm:h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
