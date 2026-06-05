import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  GraduationCap, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { DESTINATIONS } from '../data';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export default function Header({ currentRoute, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (route: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', route: 'home' },
    { label: 'About Us', route: 'about' },
    { label: 'Scholarships', route: 'scholarships' },
    { label: 'Success Stories', route: 'success-stories' },
    { label: 'Contact', route: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-slate-50 border-b border-slate-100 py-2 px-4 text-xs select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-slate-600">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-5">
            <a 
              href="tel:+923254008823" 
              className="flex items-center gap-1.5 hover:text-[#3157E6] transition-colors"
              id="top-phone-link"
            >
              <Phone className="w-3.5 h-3.5 text-[#3157E6]" />
              <span className="font-semibold text-slate-700">+92 325 400 88 23</span>
            </a>
            <a 
              href="mailto:info@rahbarconsultants.com" 
              className="flex items-center gap-1.5 hover:text-[#3157E6] transition-colors"
              id="top-email-link"
            >
              <Mail className="w-3.5 h-3.5 text-[#3157E6]" />
              <span>info@rahbarconsultants.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-5">
            <span className="hidden lg:flex items-center gap-1.5 text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Model Town, Lahore, Pakistan</span>
            </span>
            <div className="flex items-center gap-1.5 bg-[#3157E6]/10 text-[#3157E6] px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[#3157E6]/25">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Official University Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]' 
            : 'bg-white/90 backdrop-blur-md py-5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Brand Logo */}
          <a 
            href="#/" 
            onClick={(e) => handleLinkClick('home', e)}
            className="flex items-center gap-1.5 group select-none"
            id="brand-logo-anchor"
          >
            <div className="flex flex-col items-start leading-none group-hover:scale-[1.03] transition-all duration-200">
              <span className="text-[28px] font-black tracking-[-0.03em] text-[#3157E6] leading-[0.8] lowercase font-display">
                rahbar
              </span>
              <span className="text-[11px] font-bold tracking-[0.05em] text-[#3157E6]/95 leading-none lowercase pl-5 mt-1 font-display">
                consultants
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Standard Nav Links */}
            <a 
              href="#/" 
              onClick={(e) => handleLinkClick('home', e)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg border ${
                currentRoute === 'home' 
                  ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              Home
            </a>

            <a 
              href="#/about" 
              onClick={(e) => handleLinkClick('about', e)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg border ${
                currentRoute === 'about' 
                  ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              About
            </a>

            {/* Destinations Mega-Menu Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button 
                className={`px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-all duration-200 rounded-lg flex items-center gap-1.5 ${
                  currentRoute.startsWith('destination_') ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' : ''
                }`}
                id="mega-menu-trigger-button"
              >
                Study Destinations
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Dropdown */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-white border border-slate-200/80 p-6 rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.08)] transition-all duration-300 origin-top grid grid-cols-3 gap-4 ${
                  isMegaMenuOpen 
                    ? 'opacity-100 scale-100 translate-y-0 visible' 
                    : 'opacity-0 scale-95 -translate-y-2 invisible'
                }`}
              >
                <div className="col-span-3 flex justify-between items-center pb-3 border-b border-slate-100 mb-1">
                  <span className="text-xs uppercase bg-[#3157E6]/10 text-[#3157E6] px-2.5 py-1 rounded-full font-bold tracking-wider">
                    Select a Study Destination
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Award className="w-3.5 h-3.5 text-yellow-500" />
                    Global Degree Accreditations
                  </span>
                </div>
                {DESTINATIONS.map((dest) => (
                  <a
                    key={dest.id}
                    href={`#/destinations/${dest.slug}`}
                    onClick={(e) => handleLinkClick(`destination_${dest.slug}`, e)}
                    className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200"
                    id={`mega-dest-link-${dest.id}`}
                  >
                    <span className="text-2xl mt-0.5 select-none">{dest.flag}</span>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-800 group-hover:text-[#3157E6] transition-colors">
                        {dest.name}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {dest.tuitionRange.split(' / ')[0]}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a 
              href="#/scholarships" 
              onClick={(e) => handleLinkClick('scholarships', e)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg border ${
                currentRoute === 'scholarships' 
                  ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              Scholarships
            </a>

            <a 
              href="#/success-stories" 
              onClick={(e) => handleLinkClick('success-stories', e)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg border ${
                currentRoute === 'success-stories' 
                  ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              Success Stories
            </a>

            <a 
              href="#/contact" 
              onClick={(e) => handleLinkClick('contact', e)}
              className={`px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg border ${
                currentRoute === 'contact' 
                  ? 'text-[#3157E6] bg-[#3157E6]/5 border-[#3157E6]/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-transparent'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Master CTA Button (with logo-inspired brand colors) */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#/contact"
              onClick={(e) => handleLinkClick('contact', e)}
              className="bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:shadow-[0_4px_15px_rgba(49,87,230,0.35)] transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
              id="header-cta-book-consultation"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            id="mobile-hamburger-toggle"
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Overlay system on White theme base) */}
      <div 
        className={`fixed inset-0 top-[108px] md:top-[80px] z-40 bg-white/98 backdrop-blur-xl transition-all duration-300 border-t border-slate-100 lg:hidden flex flex-col justify-between overflow-y-auto ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.route}
                href={`#/${item.route}`}
                onClick={(e) => handleLinkClick(item.route, e)}
                className={`py-2 text-lg font-bold border-b border-slate-100 pb-2 transition-colors ${
                  currentRoute === item.route ? 'text-[#3157E6]' : 'text-slate-800 hover:text-slate-900'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Destinations sub-list in mobile view */}
            <div className="pt-2">
              <span className="text-xs uppercase bg-[#3157E6]/10 text-[#3157E6] px-2.5 py-1 rounded-full font-bold tracking-wider">
                Study Destinations
              </span>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {DESTINATIONS.map((dest) => (
                  <a
                    key={dest.id}
                    href={`#/destinations/${dest.slug}`}
                    onClick={(e) => handleLinkClick(`destination_${dest.slug}`, e)}
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-100 transition-colors text-sm text-slate-700"
                    id={`mobile-dest-link-${dest.id}`}
                  >
                    <span>{dest.flag}</span>
                    <span className="font-semibold">{dest.name.split(' (')[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>

        {/* Bottom actions in Drawer */}
        <div className="p-6 border-t border-slate-150 bg-slate-50 flex flex-col gap-3">
          <a
            href="tel:+923254008823"
            className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-850 font-bold text-sm text-slate-705 shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#3157E6]" />
            Call: +92 325 400 88 23
          </a>
          <a
            href="#/contact"
            onClick={(e) => handleLinkClick('contact', e)}
            className="bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white font-bold text-sm py-3.5 rounded-xl text-center shadow-[0_4px_15px_rgba(49,87,230,0.25)]"
          >
            Book Free Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
