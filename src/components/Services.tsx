import { Building, Pencil, Factory, Wrench, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Pencil,
      title: 'Pre-Construction Services',
      description: 'Comprehensive planning and consultation to ensure project success from the start. We analyze site conditions, assess feasibility, and provide value engineering solutions.'
    },
    {
      icon: Building,
      title: 'Design & Engineering',
      description: 'Advanced parametric modeling and engineering analysis to deliver innovative, high-performance facade solutions that meet both aesthetic and structural requirements.'
    },
    {
      icon: Factory,
      title: 'Fabrication',
      description: 'State-of-the-art manufacturing facilities with precision CNC machinery and quality control systems ensuring every component meets exact specifications.'
    },
    {
      icon: Wrench,
      title: 'Installation',
      description: 'Expert installation teams with specialized training in advanced facade systems, ensuring safe, efficient, and high-quality on-site execution.'
    },
    {
      icon: Settings,
      title: 'AMC',
      description: 'Comprehensive annual maintenance contracts providing ongoing support, inspection, and upkeep to ensure long-term performance and durability.'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Our Services
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end facade solutions from concept to completion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white p-8 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 ${
                index >= 3 ? 'max-w-md mx-auto' : ''
              }`}
            >
              <div className="w-16 h-16 bg-black group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
