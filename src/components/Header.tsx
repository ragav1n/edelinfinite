import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'systems', label: 'Systems' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 sm:gap-4 group"
          >
            <img
              src="/image.webp"
              alt="Edelinfinite Systems"
              className="h-12 sm:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.src = '/image.png';
              }}
            />
            <div className="hidden lg:block border-l-2 border-orange-500 pl-3 sm:pl-4">
              <span className="text-xs sm:text-sm font-medium text-gray-700 italic">Precision in every panel</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-xs sm:text-sm font-semibold transition-colors relative group ${
                  activeSection === item.id
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
