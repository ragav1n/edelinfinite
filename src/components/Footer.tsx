import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="w-full px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/image.png"
                alt="Edelinfinite Systems"
                className="h-16 w-auto object-contain mb-4"
              />
              <div className="border-l-2 border-orange-500 pl-4 py-2">
                <p className="text-sm font-medium text-gray-400 italic">Precision in every panel</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting innovative, high-performance facades with precision and passion. Transforming
              architectural visions into striking realities.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Systems', id: 'systems' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Pre-Construction Services</li>
              <li>Design & Engineering</li>
              <li>Fabrication</li>
              <li>Installation</li>
              <li>AMC</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  #1, Hennur Road, Geddalahalli<br />
                  Bangalore 560077, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="tel:08046990561" className="text-gray-400 hover:text-orange-500 transition-colors">
                  080-46990561
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@edel-infinite.de" className="text-gray-400 hover:text-orange-500 transition-colors">
                  info@edel-infinite.de
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {currentYear} Edelinfinite Systems Private Limited. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
