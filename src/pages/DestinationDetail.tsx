import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  Award, 
  Clock, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  BookOpen,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';
import { DESTINATIONS } from '../data';
import { Destination } from '../types';
import LeadForm from '../components/LeadForm';

interface DestinationDetailProps {
  countrySlug: string;
  onNavigate: (route: string) => void;
}

export default function DestinationDetail({ countrySlug, onNavigate }: DestinationDetailProps) {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    // Find destination based on slug
    const match = DESTINATIONS.find(d => d.slug === countrySlug);
    if (match) {
      setDestination(match);
    } else {
      // Fallback
      setDestination(DESTINATIONS[0]);
    }
    // Scroll to top upon change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [countrySlug]);

  if (!destination) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center">
        <div className="text-center font-semibold">
          <p className="text-slate-400">Loading Destination Profile...</p>
        </div>
      </div>
    );
  }

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 pt-32 pb-24">
      {/* Dynamic Cover Banner with ambient shading in White/Grey Theme */}
      <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden border-b border-slate-200 bg-slate-50">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 scale-105"
          style={{ backgroundImage: `url(${destination.imageTheme})` }}
        />
        {/* Overlay gradient - transitioning smoothly to pure white page base */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
        
        {/* Inner Content overlay layout */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 pb-12">
            
            {/* Back action */}
            <button 
              onClick={() => onNavigate('home')}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-[#1F4096] mb-6 transition-colors cursor-pointer"
              id="dest-detail-back-to-home"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Destinations Dashboard
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-5xl select-none">{destination.flag}</span>
                  <span className="text-[10px] uppercase bg-blue-50 text-[#1F4096] px-2.5 py-1 rounded-full font-bold border border-blue-150 shadow-sm animate-pulse-slow">
                    Visa Route Processing Active
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                  Study in {destination.name}
                </h1>
                <p className="text-sm md:text-base text-slate-600 font-bold max-w-3xl leading-relaxed">
                  {destination.tagline}
                </p>
              </div>

              {/* Instant Callout Stats */}
              <div className="bg-white/95 backdrop-blur-md border border-slate-200 p-4 rounded-2xl md:self-end flex gap-8 shadow-sm">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-black">Fee Threshold</span>
                  <span className="text-sm font-extrabold text-[#1F4096]">{destination.tuitionRange.split(' / ')[0]}</span>
                </div>
                <div className="w-px bg-slate-200" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-black">Success Rate</span>
                  <span className="text-sm font-extrabold text-emerald-600">98.5% Visa Ratio</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Structural Detail Areas */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column Structural Content (65%) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. Country overview block */}
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-slate-900 border-l-4 border-[#1F4096] pl-4 leading-tight">
                Country Overview & Career Horizon
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {destination.countryOverview}
              </p>
            </div>

            {/* 2. Key advantages matrix */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider text-xs bg-slate-50 border border-slate-200 py-2.5 px-4 rounded-xl inline-block font-extrabold text-[#1F4096]">
                Core Benefits of Study Pathways
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.coreAdvantages.map((adv, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex gap-3 shadow-inner">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#1F4096] border border-blue-150 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                      {adv}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Tuition Fee Matrix Table */}
            <div className="space-y-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Average Annual Structural Fee Schedules
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Tuition rates vary significantly by university discipline and ranking. Our counselors audit your budget parameters to match with cost-effective options.
              </p>
              
              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs font-semibold">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold">
                      <th className="pb-3 pr-4">Study Faculty Program</th>
                      <th className="pb-3 pl-4 text-right">Typical Tuition Costs / Year</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-600">
                    {destination.averageTuitionTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 pr-4 font-bold text-slate-800">{row.program}</td>
                        <td className="py-3 pl-4 text-right font-mono font-extrabold text-[#1F4096]">{row.cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. Cost-of-Living Indicies */}
            <div className="space-y-4 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Typical Average Baseline Cost-of-Living Expense Estimates
              </h3>
              <p className="text-xs text-slate-500 font-medium">
                Approximate budget required by standard boarding guidelines for safe, modern student co-living.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 font-semibold">
                {destination.livingCostIndex.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 rounded-xl border border-slate-150 bg-slate-50 text-xs text-slate-700">
                    <span className="text-slate-500">{row.item}</span>
                    <span className="font-extrabold text-slate-900 font-mono">{row.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Post study work visa pathways */}
            <div className="space-y-4 p-6 rounded-2xl bg-blue-50/40 border border-blue-150">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#1F4096]" />
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wider">
                  Post-Study Work Visa (PSW) Limits
                </h3>
              </div>
              <p className="text-xs text-slate-505 text-slate-500 leading-relaxed font-semibold">
                {destination.postStudyParameters}
              </p>
            </div>

            {/* 6. Top enlisted partner academic units */}
            <div className="space-y-4 bg-slate-50 border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-black text-slate-900">
                Prominent Academic Institutions & Partners
              </h3>
              <p className="text-xs text-slate-500 font-semibold">
                These prestigious partner entities receive direct fast-track application packaging via our Lahore headquarters.
              </p>
              
              <div className="flex flex-wrap gap-2.5 pt-2">
                {destination.topAcademicUnits.map((unit, idx) => (
                  <span 
                    key={idx}
                    className="bg-white border border-slate-205 hover:bg-slate-50 hover:border-slate-300 text-slate-800 font-bold text-xs py-2 px-3.5 rounded-xl flex items-center gap-1.5 cursor-default transition-all shadow-sm"
                  >
                    🏛 {unit}
                  </span>
                ))}
              </div>
            </div>

            {/* 7. FAQs section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-black text-slate-900">
                Frequently Asked Route FAQs
              </h3>
              
              <div className="space-y-3">
                {destination.faqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200 bg-white rounded-xl overflow-hidden transition-all shadow-sm hover:border-slate-300"
                  >
                    <button 
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex justify-between items-center p-4 text-left font-black text-xs text-slate-800 focus:outline-none focus:bg-slate-50 cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {activeFaq === idx ? (
                        <Minus className="w-4 h-4 text-[#1F4096] shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-450 shrink-0" />
                      )}
                    </button>
                    
                    {activeFaq === idx && (
                      <div className="p-4 border-t border-slate-100 bg-slate-50/50 text-xs text-slate-500 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column Lead Capture Frame (35%) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Sticky Lead Capture Wrapper */}
            <div className="sticky top-28 space-y-6">
              
              {/* Dynamic responsive form with pre-loaded target country */}
              <LeadForm initialDestination={destination.name} />

              {/* Informational credit check */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-xs text-slate-500 space-y-4 font-semibold">
                <h4 className="text-[#1F4096] font-black uppercase text-[10px] tracking-wider">
                  Assurance Frameworks
                </h4>
                
                <div className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-605 text-emerald-600 shrink-0 mt-0.5" />
                  <p>100% compliant file compilation according to latest embassy benchmarks.</p>
                </div>

                <div className="flex gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-605 text-emerald-600 shrink-0 mt-0.5" />
                  <p>Verified bank verification guide maps to prevent document invalidations.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
