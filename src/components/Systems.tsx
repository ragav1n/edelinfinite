import { ArrowRight } from 'lucide-react';

export default function Systems() {
  const systems = [
    {
      title: 'Edel Fusion Curtainwall',
      description: 'Installed entirely from the inside, the Edel Fusion Curtain Wall System eliminates scaffolding, reduces installation hassle, and prioritizes human safety — delivering efficiency without compromise.',
      image: '/TIDCO_FINTECH_TOWER.png'
    },
    {
      title: 'Edel Vertis',
      description: 'High-precision vertical mullions with integrated fins & slim silicone joints for Shopfronts, Lobby Facades and Canopies.',
      image: '/TIDEL IT PARK.png'
    },
    {
      title: 'Edel ETFE Systems',
      description: 'ETFE (ethylene tetrafluoroethylene) is a fluoropolymer film increasingly used for lightweight façades and roofs thanks to its strength, transparency, and durability. It combines high corrosion and UV resistance with very low weight, enabling single-skin membranes and air-inflated cushion systems in contemporary architecture.',
      image: '/Sattva Endeavor.png'
    },
    {
      title: 'Edel Timber Holz',
      description: 'Timber facades are a standout design feature, infusing any building with the warmth and character of natural wood. Its rich colors, distinctive grain and tactile texture create a timeless, welcoming aesthetic. By bringing nature into the built environment, timber lends every facade a calm, inviting presence and enduring appeal.',
      image: '/SNN Raj.png'
    },
    {
      title: 'Edel Gridshell & Tensegrity',
      description: 'Both grid shell and tensegrity structures are innovative architectural and engineering designs that emphasize efficiency, aesthetics, and structural integrity. Here\u2019s a concise overview of each:',
      image: '/sattva knowldge point.png'
    },
    {
      title: 'Edel Perforated Metal Cladding',
      description: 'Perforated metal cladding panels provide aesthetic value, sustainability and design alternatives of horizontal or vertical placement. They are used by architects for privacy, weather protection and perforation functionality while remaining strong and stable.',
      image: '/One place Mittal.png'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systems.map((system, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {system.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {system.description}
                </p>
                <button className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
