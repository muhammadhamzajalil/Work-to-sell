import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  GraduationCap, 
  ArrowRight,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { DESTINATIONS } from '../data';

interface FooterProps {
  onNavigate: (route: string) => void;
  currentRoute: string;
}

export default function Footer({ onNavigate, currentRoute }: FooterProps) {
  const handleLinkClick = (route: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-50 text-slate-600 pt-20 pb-28 lg:pb-12 border-t border-slate-200 overflow-hidden">
      {/* Decorative subtle gradient glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3157E6]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4E72FA]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Information Frame */}
        <div className="space-y-6">
          <div className="flex items-center gap-1.5 select-none">
            <div className="flex flex-col items-start leading-none">
              <span className="text-[26px] font-black tracking-[-0.03em] text-[#3157E6] leading-[0.8] lowercase font-display">
                rahbar
              </span>
              <span className="text-[11px] font-bold tracking-[0.05em] text-[#3157E6]/95 leading-none lowercase pl-5 mt-1 font-display">
                consultants
              </span>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 leading-relaxed">
            Empowering Pakistani students to attain world-class tertiary credentials. Leading structural guidelines, certified advisors, and high visa approval parameters.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href="https://wa.me/923254008823" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-[#25D366]/10 hover:text-[#25D366] flex items-center justify-center border border-slate-200 transition-all text-slate-600"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Destination Mapping array */}
        <div>
          <h4 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6 pb-2 border-b border-slate-200">
            Study Destinations
          </h4>
          <ul className="space-y-3.5 text-sm">
            {DESTINATIONS.slice(0, 5).map((dest) => (
              <li key={dest.id}>
                <a 
                  href={`#/destinations/${dest.slug}`}
                  onClick={(e) => handleLinkClick(`destination_${dest.slug}`, e)}
                  className="transition-colors flex items-center gap-2 group text-slate-500 hover:text-[#3157E6]"
                  id={`footer-dest-${dest.id}`}
                >
                  <span className="text-base">{dest.flag}</span>
                  <span className="font-medium">Study in {dest.name.split(' (')[0]}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#3157E6]" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Hub Navigation */}
        <div>
          <h4 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-6 pb-2 border-b border-slate-200">
            Quick Hub Support
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#/" onClick={(e) => handleLinkClick('home', e)} className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                Home Dashboard
              </a>
            </li>
            <li>
              <a href="#/about" onClick={(e) => handleLinkClick('about', e)} className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                Corporate Profile
              </a>
            </li>
            <li>
              <a href="#/scholarships" onClick={(e) => handleLinkClick('scholarships', e)} className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                Scholarships Directory
              </a>
            </li>
            <li>
              <a href="#/success-stories" onClick={(e) => handleLinkClick('success-stories', e)} className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                Success Registry
              </a>
            </li>
            <li>
              <a href="#/contact" onClick={(e) => handleLinkClick('contact', e)} className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                Reach Counselor
              </a>
            </li>
          </ul>
        </div>

        {/* Contact credentials */}
        <div className="space-y-4">
          <h4 className="text-slate-900 text-sm font-extrabold uppercase tracking-widest mb-2 pb-2 border-b border-slate-200">
            Official Headquarters
          </h4>
          
          <div className="space-y-3.5 text-sm">
            <div className="flex gap-2.5 items-start">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="leading-relaxed text-slate-500 font-medium text-xs">
                Flat No 110-111, First Floor, Asad Tower, International Market, Model Town, M Block, Lahore, Pakistan 54000.
              </p>
            </div>

            <div className="flex gap-2.5 items-center">
              <Phone className="w-5 h-5 text-[#3157E6] shrink-0" />
              <a href="tel:+923254008823" className="text-[#3157E6] hover:underline font-bold">
                +92 325 400 88 23
              </a>
            </div>

            <div className="flex gap-2.5 items-center">
              <Mail className="w-5 h-5 text-[#3157E6] shrink-0" />
              <a href="mailto:info@rahbarconsultants.com" className="text-slate-500 hover:text-[#3157E6] transition-colors font-medium">
                info@rahbarconsultants.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Legal bar */}
      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
        <p>© {currentYear} Rahbar Consultants. All rights reserved. Registered processing office in Lahore.</p>
        <div className="flex gap-6 font-medium">
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Terms of Use</span>
          <span className="hover:text-slate-600 transition-colors cursor-pointer">Partner Accreditation</span>
        </div>
      </div>

      {/* Sticky Mobile Micro-dock system (White Theme Glass base with brand accents) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 py-3.5 flex items-center justify-between gap-3 lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.06)]">
        {/* Call Trigger */}
        <a 
          href="tel:+923254008823"
          className="flex-1 min-h-[48px] rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-800 flex items-center justify-center gap-2 font-bold text-sm tracking-wide transition-colors active:scale-95"
          id="sticky-mobile-call-trigger"
        >
          <Phone className="w-4 h-4 text-[#3157E6]" />
          Call Now
        </a>

        {/* WhatsApp direct trigger */}
        <a 
          href="https://wa.me/923254008823?text=Hello%20Rahbar%20Consultants,%20I%20am%20interested%20in%20study%20abroad%20consultancy.%20Please%20guide%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[48px] rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white flex items-center justify-center gap-2 font-black text-sm tracking-wide transition-all shadow-[0_4px_12px_rgba(16,185,129,0.25)] active:scale-95"
          id="sticky-mobile-whatsapp-trigger"
        >
          <MessageSquare className="w-4 h-4 text-white" />
          WhatsApp Support
        </a>
      </div>
    </footer>
  );
}
