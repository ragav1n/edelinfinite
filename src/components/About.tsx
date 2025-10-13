import { Target, Eye, Lightbulb, Globe, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation at Core',
      description: 'Continuously develop proprietary glazing, ETFE, and hybrid timber systems that challenge conventional limits and set new industry benchmarks.'
    },
    {
      icon: Target,
      title: 'Sustainability First',
      description: 'Prioritize low-embodied-carbon materials, recyclable solutions, and design-for-assembly principles that minimize environmental impact.'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Collaborate closely with architects, consultants, and contractors to deliver tailored, buildable, and cost-efficient systems within accelerated timelines.'
    },
    {
      icon: Award,
      title: 'Engineering Excellence',
      description: 'Blend advanced design tools, parametric modelling, and global sourcing expertise to ensure quality, safety, and durability in every project.'
    },
    {
      icon: Globe,
      title: 'Global yet Local',
      description: 'Operate as a design-led studio with a presence in India and Germany, delivering international standards while adapting to local needs.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            About Us
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-orange-500 mx-auto mb-4 sm:mb-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="About Edelinfinite Systems"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black mb-6">
              Crafting Innovative, High-Performance Facades
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Leveraging advanced technologies and tailored solutions to transform architectural visions
              into striking, durable realities — delivered efficiently with unmatched quality and reliability.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Edel, we see possibility where others see limits. Our engineering mindset is so adaptive
              that even a crushed piece of paper can spark a structure — precise, functional, and enduring.
              For us, excellence isn't an option; it's our foundation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-black text-white p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-orange-500" />
              <h3 className="text-3xl font-bold">Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              To reimagine the future of building facades and lightweight structures by delivering
              innovative, sustainable, and high-performance glazing systems that combine speed, precision,
              and aesthetics—empowering architects, developers, and communities to create iconic, resilient,
              and environmentally responsible spaces.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-white" />
              <h3 className="text-3xl font-bold">Mission</h3>
            </div>
            <p className="text-white/95 leading-relaxed text-lg">
              Continuously develop proprietary systems, prioritize sustainability, partner with customers,
              ensure engineering excellence, and operate globally while adapting locally to deliver
              innovative facade solutions that set new industry benchmarks.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-black mb-12 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 3).map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {values.slice(3).map((value, index) => (
              <div
                key={index + 3}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
