import { ArrowRight, MapPin, Calendar, X } from 'lucide-react';
import { useState } from 'react';

interface ProjectsProps {
  onNavigate: (section: string) => void;
}

export default function Projects({ onNavigate }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredProjects = [
    {
      title: 'Case Study Project ETFE',
      location: 'New',
      status: 'Completed',
      system: 'EDEL ETFE System',
      area: '',
      image: '/Case_study _project_ETFE.png',
      tagline: 'Innovative ETFE application showcasing architectural possibilities',
      description: 'This case study project demonstrates the versatility and potential of the EDEL ETFE System in modern architecture. The lightweight, durable ETFE membrane creates a striking visual impact while providing excellent thermal performance and natural light diffusion. The system allows for large, column-free spans, offering architects unprecedented design freedom. The self-cleaning properties of ETFE ensure long-term performance with minimal maintenance, making it an ideal choice for sustainable building solutions.'
    },
    {
      title: 'Perforated Metal Sheet – Sri Nagar',
      location: 'Sri Nagar',
      status: 'New',
      system: 'EDEL Perforated Metal System',
      area: '',
      image: '/perf_metal.png',
      tagline: 'Modern perforated metal façade blending form and function',
      description: 'The Sri Nagar project features our advanced EDEL Perforated Metal System, combining aesthetic appeal with functional performance. The custom-designed perforation pattern creates dynamic light and shadow effects throughout the day while providing solar shading and privacy. The high-strength aluminum panels are durable, weather-resistant, and require minimal maintenance. The system is engineered for easy installation and long-term performance, making it an excellent choice for both new constructions and retrofits.'
    },
    {
      title: 'Helix Tuvilu',
      location: 'Chennai',
      status: 'Completed',
      system: 'EDEL Virtis Vertical Glazing System',
      area: '',
      image: '/helix.png',
      tagline: 'EDEL Virtis — Vertical Precision, Defined by Light.',
      description: 'A refined expression of transparency and precision, the Helix Tuvilu features Edelinfinite\'s Edel Virtis system—engineered to span uninterrupted heights with seamless vertical rhythm. Designed for clarity and strength, the façade integrates slender aluminum profiles and high-performance glazing to create a luminous, modern envelope that redefines workplace architecture.'
    },
    {
      title: 'TIDCO Fintech Tower',
      location: 'Chennai',
      status: 'Ongoing',
      system: 'EDEL Fusion Curtain Wall System',
      area: '12,000 sqm',
      images: [
        '/TIDCO_FINTECH_TOWER.png',
        '/fintech2.png',
        '/fintech3.png',
        '/fintech4.png',
        '/fintech5.png',
        '/fintech_ongoing_2.png'
      ],
      tagline: 'Precision, speed, and clarity — the EDEL Fusion Curtain Wall defines the future of high-rise façades.',
      description: 'Edel infinite Systems is executing one of Chennai\'s most advanced façade installations at the TIDCO Fintech Tower, deploying the next-generation EDEL Fusion Curtain Wall System across approximately 12,000 square meters of façade area.\n\nThis system has been engineered for full installation from within the building, eliminating the need for external access equipment and ensuring unmatched speed, precision, and safety. The project showcases our commitment to innovation and efficiency, setting new benchmarks for installation pace in high-rise façade construction.\n\nWith its clean vertical rhythm, high-performance glazing, and seamless integration with the building\'s architectural geometry, the EDEL Fusion system delivers a sleek, energy-efficient, and structurally robust façade — a testament to our technical excellence and execution capability on large-scale urban developments.'
    },
    {
      title: 'Sattva Endeavor',
      location: 'Bengaluru',
      status: 'Completed',
      system: 'EDEL ETFE System',
      area: '',
      image: '/Sattva Endeavor.png',
      tagline: 'Fluid form meets futuristic function — the EDEL ETFE System in its most organic expression.',
      description: 'Edelinfinite Systems proudly executed the Sattva Endeavor canopy structure using its state-of-the-art EDEL ETFE System, marking another milestone in lightweight architectural innovation.\n\nThe organically shaped cushion canopy, composed of advanced ETFE (Ethylene Tetrafluoroethylene) membranes, delivers exceptional light transmission, durability, and thermal performance while maintaining a visually fluid architectural form.\n\nDesigned and engineered for long-span coverage with minimal structural weight, the EDEL ETFE System ensures high performance, zero corrosion, and minimal maintenance — redefining modern roofing for premium commercial environments.\n\nThis project demonstrates Edelinfinite\'s capability to merge form, function, and engineering precision, creating spaces that are both aesthetically striking and technically superior.'
    },
    {
      title: 'Sattva Knowledge Point',
      location: 'Bengaluru',
      status: 'Completed',
      system: 'EDEL ETFE System',
      area: '',
      images: [
        '/sattva knowldge point.png',
        '/sattva_knowledge_point_2.png',
        '/sattva_knowledge_point_3.png'
      ],
      tagline: 'Lightness, transparency, and strength — redefining architectural roofing with the EDEL ETFE System.',
      description: 'Edelinfinite Systems successfully executed the ETFE roof canopy at Sattva Knowledge Point, Bengaluru, showcasing the cutting-edge engineering and design flexibility of the EDEL ETFE System.\n\nThe large-span, lightweight structure utilizes multi-layer ETFE cushions supported on a precision-engineered steel framework, offering outstanding daylight transmission, thermal efficiency, and durability while maintaining an elegant architectural expression.\n\nEngineered for zero corrosion, minimal maintenance, and long-term performance, this installation redefines modern canopy design—combining aesthetic purity with structural innovation.\n\nThe Sattva Knowledge Point project stands as a testament to Edelinfinite\'s expertise in advanced membrane architecture, delivering high-performance solutions that merge transparency, technology, and sustainability.'
    },
    {
      title: 'TIDEL IT Park',
      location: 'Chennai',
      status: 'Completed',
      system: 'EDEL Vertis Glazing System',
      area: '',
      image: '/TIDEL IT PARK.png',
      tagline: 'A landmark of glass and geometry — where the EDEL Vertis System brings architecture to life.',
      description: 'A striking symbol of modern Chennai, TIDEL Park stands out with its bold geometry and seamless glass façade — brought to life through the EDEL Vertis Glazing System by Edelinfinite Systems.\n\nCrafted with precision-engineered vertical mullions and high-performance glazing, the façade reflects clarity, strength, and sophistication in every line. The Vertis system delivers exceptional thermal efficiency, sleek aesthetics, and structural finesse, giving the tower its commanding visual identity on the skyline.\n\nDefined by innovation and executed with perfection, the TIDEL façade exemplifies Edelinfinite\'s mastery in contemporary façade engineering — where design vision meets technical brilliance.'
    },
    {
      title: 'TIDEL IT Park',
      location: 'Villupuram',
      status: 'Completed',
      system: 'EDEL Vertis Glazing System',
      area: '',
      image: '/TIDEL Villupuram.png',
      tagline: 'Bold lines, perfect rhythm — the EDEL Vertis façade turns form into an architectural statement.',
      description: 'Edelinfinite Systems delivered the complete façade for TIDEL V.V. Puram, a modern technology and innovation hub that reflects architectural clarity and geometric precision.\n\nThe building features the EDEL Vertis Glazing System, combining sleek vertical glass modules with bold framing geometry, creating a façade that is both expressive and functional. Each element is designed for performance, precision, and visual rhythm, enhancing natural light while maintaining structural elegance.\n\nWith its clean symmetry and refined proportions, TIDEL V.V. Puram stands as a benchmark of Edelinfinite\'s advanced façade craftsmanship — where design intelligence and technical excellence converge seamlessly.'
    },
    {
      title: 'SNN Raj',
      location: 'Bengaluru',
      status: 'Completed',
      system: 'EDEL Fusion Glazing System',
      area: '',
      images: ['/SNN Raj.png', '/SNN_Raj.png'],
      tagline: 'Where structure meets rhythm — the EDEL Fusion System shaping modern architecture at SNN Raj.',
      description: 'The SNN Raj commercial façade in Bengaluru features the advanced EDEL Fusion Glazing System, combining clean geometry with precise detailing to create a dynamic architectural rhythm.\n\nEngineered for performance, speed, and seamless integration, the system merges vertical and horizontal continuity with vibrant colour contrasts — delivering both aesthetic distinction and long-term reliability.\n\nWith its refined proportions and modern composition, the project stands as a reflection of Edelinfinite\'s design intelligence and engineering clarity — transforming functional façades into architectural expressions.'
    },
    {
      title: 'Saravana Store',
      location: 'Chennai',
      status: 'Completed',
      system: 'EDEL Vertis Single-Member System',
      area: '',
      image: '/Sarvana Store.jpeg',
      tagline: 'A single stroke of glass and steel — the EDEL Vertis System redefining height, clarity, and strength.',
      description: 'The grand entrance of Saravana Store in Chennai showcases the full potential of the EDEL Vertis Single-Member Glazing System, engineered to span the building\'s entire height with seamless precision.\n\nThis structural glazing system uses full-height vertical members without intermediate breaks, achieving uninterrupted transparency and unmatched visual impact. The result — a soaring glass façade that blurs the boundary between architecture and environment, reflecting both strength and refinement.\n\nA perfect balance of minimalism, performance, and architectural drama, the project embodies Edelinfinite\'s hallmark — engineering beauty through structural simplicity.'
    },
    {
      title: 'One Place Mittal',
      location: 'Pune',
      status: 'Ongoing',
      system: 'EDEL Fusion Curtain Wall System',
      area: '',
      image: '/One place Mittal.png',
      tagline: 'Fusion of form and precision — the EDEL Fusion Curtain Wall defining the architectural language of One Place.',
      description: 'The One Place project represents a new chapter in contemporary façade engineering — executed using the EDEL Fusion Curtain Wall System by Edelinfinite Systems.\n\nThis high-performance façade integrates horizontal and vertical rhythm with deep architectural fins and modular precision, creating a refined interplay of glass and structure. Designed for durability, clarity, and efficiency, the EDEL Fusion system achieves a crisp architectural balance between transparency and form.\n\nCurrently in progress, One Place embodies Edelinfinite\'s pursuit of façade innovation, merging performance-driven design with timeless visual sophistication.'
    },
    {
      title: 'Lafairs',
      location: 'Chennai',
      status: 'Completed',
      system: 'EDEL Virtis System',
      area: '',
      images: ['/Lafairs.png', '/Lafairs2.png'],
      tagline: 'Refined engineering meets modern aesthetics — the EDEL Virtis System at Lafairs, Chennai.',
      description: 'At Lafairs, Chennai, the Edel Virtis System stands as a symbol of refined engineering and modern architectural aesthetics. This advanced façade system was meticulously executed to deliver both elegance and performance — blending sleek design with structural precision. The installation showcases exceptional craftsmanship, achieving seamless alignment, clean sightlines, and superior material integration.\n\nEngineered to meet the highest standards of durability and visual appeal, the Edel Virtis System enhances the building\'s contemporary character while ensuring long-term reliability. Its minimalistic yet striking appearance complements the architectural intent of Lafairs, creating a distinctive façade that reflects sophistication and technical excellence.'
    },
    {
      title: 'Tamil Nadu Housing Board',
      location: 'Chennai',
      status: 'Ongoing',
      system: 'EDEL Vertis Façade System',
      area: '10,500 sqm',
      image: '/TN_housing_board.png',
      tagline: 'Modern glass box design with elegant vertical fins — redefining urban architecture in Chennai.',
      description: 'The Tamil Nadu Housing Board building in Chennai features a sleek Edel Vertis glass façade designed as a modern glass box with elegant vertical fins. Spanning over 10,500 sqm, the system delivers a seamless aesthetic with excellent structural performance and solar control. This project highlights Edel Infinite\'s precision engineering and commitment to creating contemporary, high-performance façades.'
    },
    {
      title: 'Coimbatore Library',
      location: 'Coimbatore',
      status: 'Upcoming',
      system: 'EDEL Vertis Façade Concept',
      area: '',
      image: '/Coimbatore_Library.png',
      tagline: 'Twisted vertical fins creating dynamic light play — redefining library architecture in Coimbatore.',
      description: 'The Coimbatore Library showcases a distinctive façade executed with the Edel Vertis concept, featuring twisted vertical fins that create a dynamic play of light and shadow throughout the day. The innovative design blends functionality with visual movement, enhancing both energy efficiency and architectural expression. This project exemplifies Edel Infinite\'s creative approach to façade engineering, where precision detailing meets bold contemporary design.'
    },
    {
      title: 'GRT ETFE Dome',
      location: 'Radisson Blu, Chennai',
      status: 'Completed',
      system: 'ETFE Membrane System',
      area: '',
      images: [
        '/radisson_blu.png',
        '/radisson_blu2.png',
        '/radisson_blu3.png',
        '/radisson_blu4.png'
      ],
      tagline: 'A striking example of architectural innovation with ETFE membrane technology',
      description: 'The ETFE Dome installed at Radisson Blu, Chennai, is a striking example of architectural innovation and precision engineering. Designed and executed for GRT Hotels, the dome features a lightweight ETFE (Ethylene Tetrafluoroethylene) membrane system that offers exceptional transparency, durability, and aesthetic appeal.\n\nThis state-of-the-art structure allows abundant natural light to illuminate the interiors while providing superior thermal performance and weather resistance. The installation reflects meticulous planning and flawless execution, harmoniously integrating modern materials with elegant design.\n\nStanding as a visual centrepiece of the property, the ETFE Dome at Radisson Blu exemplifies a perfect balance of form, function, and finesse — redefining contemporary architectural expression.'
    }
  ];

  const markets = [
    { name: 'IT/ITES', count: '25+' },
    { name: 'Hospitality', count: '18+' },
    { name: 'Airports', count: '8+' },
    { name: 'Commercial', count: '30+' },
    { name: 'Healthcare', count: '12+' },
    { name: 'Residential', count: '20+' }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming architectural visions into striking realities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedProject(index);
                setCurrentImageIndex(0);
              }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={'images' in project ? project.images[0] : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback in case image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-project.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {project.status}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.system}
                </p>
                <div className="flex items-center gap-4 text-gray-400 text-xs mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                  {project.area && (
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.area}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
            <div className="relative bg-white rounded-xl sm:rounded-2xl w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative overflow-hidden rounded-t-xl bg-gray-900">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {('images' in featuredProjects[selectedProject] ? featuredProjects[selectedProject].images : [featuredProjects[selectedProject].image]).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`${featuredProjects[selectedProject].title} - Image ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                  
                  {/* Navigation Arrows */}
                  {('images' in featuredProjects[selectedProject] && featuredProjects[selectedProject].images.length > 1) && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => (prev === 0 ? featuredProjects[selectedProject].images.length - 1 : prev - 1));
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M15 18l-6-6 6-6"/>
                        </svg>
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(prev => (prev === featuredProjects[selectedProject].images.length - 1 ? 0 : prev + 1));
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Next image"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    </>
                  )}
                  
                  {/* Dots Navigation */}
                  {('images' in featuredProjects[selectedProject] && featuredProjects[selectedProject].images.length > 1) && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {featuredProjects[selectedProject].images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-white/50'}`}
                          aria-label={`View image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white">
                  <div className="inline-block bg-orange-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-3 sm:mb-4">
                    {featuredProjects[selectedProject].status}
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2">
                    {featuredProjects[selectedProject].title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-base sm:text-lg">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>{featuredProjects[selectedProject].location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                    {featuredProjects[selectedProject].system}
                    {featuredProjects[selectedProject].area && ` | ${featuredProjects[selectedProject].area}`}
                  </h3>
                  <p className="text-lg sm:text-xl italic text-gray-600 border-l-4 border-orange-500 pl-3 sm:pl-4 py-2">
                    {featuredProjects[selectedProject].tagline}
                  </p>
                </div>

                <div className="prose prose-sm sm:prose-lg max-w-none">
                  {featuredProjects[selectedProject].description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-2xl border border-gray-200">
          <h3 className="text-3xl font-bold text-black mb-8 text-center">Markets We Serve</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {markets.map((market, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform">
                  {market.count}
                </div>
                <div className="text-sm font-semibold text-gray-700">
                  {market.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('contact')}
            className="group inline-flex items-center gap-2 bg-black hover:bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            See How We Can Deliver Fast
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
