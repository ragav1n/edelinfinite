import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface System {
  title: string;
  description: string;
}

export default function Systems() {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(null);
  const [hoveredSystem, setHoveredSystem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    // Close if clicking the same item, otherwise open the clicked one
    setExpandedSystem(expandedSystem === index ? null : index);
    
    // Force a reflow to ensure smooth animation
    if (expandedSystem !== index) {
      const element = document.getElementById(`system-${index}`);
      if (element) {
        element.getBoundingClientRect();
      }
    }
  };

  const systems = [
    {
      title: 'Edel Fusion Curtainwall',
      description: 'A next-generation unit wise Edel Fusion Curtain Wall system engineered for complete installation from the building side, ensuring a seamless and uninterrupted external façade. Designed to be loaded from within the structure, it offers unmatched speed, safety, and precision—eliminating the need for access equipment and perfectly suited for high-rise or restricted-access projects.'
    },
    {
      title: 'Edel Virtis',
      description: 'The Edel Virtis System redefines modern façade design with its single continuous membrane capable of spanning remarkable vertical heights without horizontal interruptions. This innovation delivers a seamless glass surface that enhances transparency and architectural elegance while maintaining superior structural integrity.\n\nDesigned for projects demanding both performance and purity of form, the system eliminates transoms to create a clean vertical flow, optimizing natural light and visual continuity. With its precision engineering and minimal detailing, Edel Virtis stands as the perfect fusion of aesthetic simplicity and technical excellence.'
    },
    {
      title: 'Edel ETFE Systems',
      description: 'Revolutionary lightweight ETFE skylights and membranes offering exceptional light transmission, durability, and thermal performance. Our systems create stunning architectural features while providing weather protection and energy efficiency for modern buildings.'
    },
    {
      title: 'Edel Timber Holz',
      description: 'Timber facades are a standout design feature, infusing any building with the warmth and character of natural wood. Its rich colors, distinctive grain and tactile texture create a timeless, welcoming aesthetic. By bringing nature into the built environment, timber lends every facade a calm, inviting presence and enduring appeal.'
    },
    {
      title: 'Edel Gridshell & Tensegrity',
      description: 'Both grid shell and tensegrity structures are innovative architectural and engineering designs that emphasize efficiency, aesthetics, and structural integrity. Here\u2019s a concise overview of each:'
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4" style={{ gridAutoFlow: 'dense' }}>
          {systems.map((system, index) => {
            const isExpanded = expandedSystem === index;
            const isHovered = hoveredSystem === index;
            
            return (
              <div
                id={`system-${index}`}
                key={index}
                className="relative group rounded-2xl overflow-hidden transition-all duration-300 ease-out"
                onMouseEnter={() => setHoveredSystem(index)}
                onMouseLeave={() => setHoveredSystem(null)}
                style={{
                  transitionProperty: 'all',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-90'
                  }`}
                />
                
                <div className="relative z-10 p-8">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="w-full text-left focus:outline-none group"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className={`text-2xl font-bold text-white mb-4 transition-all duration-300 ${
                        isExpanded ? 'text-3xl mb-6' : 'group-hover:text-orange-400'
                      }`}>
                        {system.title}
                        <div className={`w-16 h-0.5 bg-orange-500 mt-3 transition-all duration-500 ${
                          isExpanded ? 'w-24 bg-amber-400' : 'group-hover:w-20 group-hover:bg-amber-400'
                        }`} />
                      </h3>
                      <span className={`p-2 rounded-full transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-amber-400/10 text-amber-400 -rotate-180' 
                          : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700 group-hover:text-orange-400'
                      }`}>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    style={{
                      transitionProperty: 'max-height, opacity',
                      transitionDuration: '300ms',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <div className="pt-2 pb-6">
                      <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6" />
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {system.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
