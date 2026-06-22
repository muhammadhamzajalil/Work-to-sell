import React, { useState } from 'react';
import { 
  Award, 
  MapPin, 
  Calculator, 
  BookOpen, 
  CheckCircle2, 
  Search, 
  Filter, 
  Star,
  DollarSign
} from 'lucide-react';
import { SCHOLARSHIPS, DESTINATIONS } from '../data';
import { Scholarship } from '../types';

export default function Scholarships() {
  const [filterCountry, setFilterCountry] = useState('All');
  const [filterType, setFilterType] = useState('All');

  // Interactive eligibility assessment state
  const [grades, setGrades] = useState('');
  const [ielts, setIelts] = useState('');
  const [targetCountry, setTargetCountry] = useState('');
  const [evaluationResult, setEvaluationResult] = useState<any | null>(null);
  const [evalError, setEvalError] = useState('');

  // Sift matching countries
  const countryList = ['All', ...new Set(SCHOLARSHIPS.map(s => s.country))];

  const filteredScholarships = SCHOLARSHIPS.filter(s => {
    const matchCountry = filterCountry === 'All' || s.country === filterCountry;
    const matchType = filterType === 'All' || s.type === filterType;
    return matchCountry && matchType;
  });

  const handleAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    setEvalError('');
    setEvaluationResult(null);

    const gradeVal = parseFloat(grades);
    const ieltsVal = parseFloat(ielts);

    if (isNaN(gradeVal) || gradeVal < 50 || gradeVal > 100) {
      setEvalError('Please enter a valid academic score percentage between 50% and 100%.');
      return;
    }
    if (isNaN(ieltsVal) || ieltsVal < 4.0 || ieltsVal > 9.0) {
      setEvalError('Please enter a valid IELTS band score between 4.0 and 9.0.');
      return;
    }
    if (!targetCountry) {
      setEvalError('Please select your preferred study destination.');
      return;
    }

    // Interactive Assessment matching criteria values:
    let waiverEstimate = '0%';
    let tier = 'Standard admission';
    let recommendations: string[] = [];

    if (gradeVal >= 90 && ieltsVal >= 6.5) {
      waiverEstimate = 'Up to 100% (Full Funding Potential)';
      tier = 'Elite Scholarship Tier';
      recommendations = [
        'Eligible to claim Stipendium Hungaricum in Hungary (Full funding covers tuition, board & stipends).',
        'Strong candidate for university Research Grants or UK Chevening Fellowships.',
        'Immediate 30% automatic merit waive at Australian Group of Eight entities.'
      ];
    } else if (gradeVal >= 75 && ieltsVal >= 6.0) {
      waiverEstimate = '25% to 50% Tuition Waivers';
      tier = 'High Merit Tier';
      recommendations = [
        'Qualifies for Automatic Academic Excellence discount in UAE and Malaysia (RM 10,000 to RM 20,000 cuts).',
        'Strong standing for state bursaries in Romania (free student hostel accommodation).',
        'Eligible for €2,000 to €4,000 entry waivers in Ireland regional universities.'
      ];
    } else if (gradeVal >= 60 && ieltsVal >= 5.5) {
      waiverEstimate = '10% to 20% Bursaries';
      tier = 'Standard Merit Tier';
      recommendations = [
        'Qualifies for regional alignment grants in Malaysia (APU Sports or leadership quotas).',
        'Eligible for UK university regional grants (usually £1,000 to £3,000 direct deductions).'
      ];
    } else {
      waiverEstimate = 'Conditional / Foundation Bursaries';
      tier = 'Standard Pathway Tier';
      recommendations = [
        'Recommend standard admission path with English pre-sessional supports.',
        'Qualifies for affordable public universities in Schengen Europe or Romania (low regular semesters).'
      ];
    }

    // Find custom country scholarships from datastore
    const matchingNatives = SCHOLARSHIPS.filter(s => s.country === targetCountry);

    setEvaluationResult({
      waiverEstimate,
      tier,
      recommendations,
      matchingNatives,
      gradeVal,
      ieltsVal,
      targetCountry
    });

    // Send assessment analytical telemetry safely to Formspree
    fetch("https://formspree.io/f/mnjyzavy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Submission Type": "Live Eligibility Assessment",
        "Academic Marks %": gradeVal,
        "IELTS Score": ieltsVal,
        "Preferred Destination": targetCountry,
        "Calculated Tier": tier,
        "Waiver Estimate": waiverEstimate
      })
    }).catch((err) => {
      console.warn("Assessment logging failed to transmit", err);
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 pt-6 pb-20">
      
      {/* Upper Brand Intro fold */}
      <section className="relative py-12 md:py-16 overflow-hidden border-b border-slate-150">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3157E6]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center space-y-4">
          <span className="bg-amber-50 text-amber-700 text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-amber-205">
            State Funding & Waivers
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Comprehensive Scholarship Registry
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-3xl mx-auto">
            Our processing desks match qualified Pakistani candidates with prestigious state scholarships, Stipendium programmes, and automatic university merit waivers to lower boarding and tuition barriers.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Hand: Category List and Filter Matrix (65%) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Filters shelf */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm animate-pulse-slow">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#3157E6]" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {countryList.map((country, idx) => (
                <button
                  key={idx}
                  onClick={() => setFilterCountry(country)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    filterCountry === country 
                      ? 'bg-[#3157E6] text-white border-[#3157E6]' 
                      : 'bg-white text-slate-650 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          {/* Active listings cards */}
          <div className="space-y-6">
            {filteredScholarships.map((sch) => (
              <div 
                key={sch.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-350 hover:shadow-md transition-all flex flex-col md:flex-row justify-between gap-6 shadow-sm"
                id={`scholarship-card-${sch.id}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-50 text-amber-705 border border-amber-200 text-[9px] font-black uppercase py-0.5 px-2 rounded-full">
                      {sch.type} quota
                    </span>
                    <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500" /> {sch.country}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 leading-snug">
                    {sch.title}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed max-w-xl">
                    {sch.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase font-black">Coverage Rate</span>
                      <span className="font-extrabold text-emerald-600">{sch.coverage}</span>
                    </div>
                    <div className="md:border-l md:border-slate-150 md:pl-4">
                      <span className="block text-[10px] text-slate-400 uppercase font-black">Prerequisite Eligibility</span>
                      <span className="font-bold text-slate-700">{sch.eligibility}</span>
                    </div>
                  </div>
                </div>

                {/* Deadlines details side panel */}
                <div className="md:text-right flex flex-col justify-between shrink-0 p-4 rounded-xl bg-slate-50 border border-slate-150 md:w-[180px]">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-black mb-1">Target Deadline</span>
                    <span className="text-xs font-bold text-slate-800 block">{sch.deadline}</span>
                  </div>
                  
                  <a
                    href="#scholarship-eligibility-calculator"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('scholarship-eligibility-calculator')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-4 md:mt-0 text-[10px] font-black uppercase bg-[#3157E6] text-white py-2.5 px-3 rounded-lg text-center hover:opacity-90 block hover:shadow-md transition-shadow active:scale-95"
                    id={`scholarship-apply-btn-${sch.id}`}
                  >
                    Assess Eligibility
                  </a>
                </div>
              </div>
            ))}

            {filteredScholarships.length === 0 && (
              <div className="text-center p-12 bg-slate-55 border border-slate-200 rounded-2xl">
                <p className="text-slate-500 text-sm font-semibold">No scholarships match the selected country filter.</p>
              </div>
            )}
          </div>

        </div>

        {/* Right Hand: Assessment calculator widget (35%) */}
        <div className="lg:col-span-4 space-y-8">
          
          <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-6 relative overflow-hidden" id="scholarship-eligibility-calculator">
            {/* Glowing orb */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3157E6]/3 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-5 h-5 text-[#3157E6]" />
              <h3 className="text-base font-extrabold text-slate-900">
                Live Eligibility Calculator
              </h3>
            </div>
            
            <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">
              Input academic parameters below. Our system instantly maps entry profiles to potential country scholarship tiers.
            </p>

            {evalError && (
              <div className="mb-4 text-xs text-red-650 bg-red-50 border border-red-200 py-2 px-3 rounded-lg font-bold">
                ⚠ {evalError}
              </div>
            )}

            <form onSubmit={handleAssessment} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5 animate-pulse-slow">
                  Academic Marks % (Intermediate / Bachelor)
                </label>
                <input
                  type="number"
                  placeholder="e.g. 82"
                  min="50"
                  max="100"
                  value={grades}
                  onChange={(e) => setGrades(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#3157E6] focus:bg-white focus:ring-2 focus:ring-[#3157E6]/10 transition-all font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5">
                  Language Proficiency Score (IELTS equivalent)
                </label>
                <input
                  type="number"
                  step="0.5"
                  placeholder="e.g. 6.5"
                  min="4"
                  max="9"
                  value={ielts}
                  onChange={(e) => setIelts(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-[#3157E6] focus:bg-white focus:ring-2 focus:ring-[#3157E6]/10 transition-all font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5">
                  Target Destination Country
                </label>
                <select
                  value={targetCountry}
                  onChange={(e) => setTargetCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-850 focus:outline-none focus:border-[#3157E6] focus:bg-white focus:ring-2 focus:ring-[#3157E6]/10 transition-all font-semibold appearance-none cursor-pointer"
                >
                  <option value="" className="text-slate-400">Choose country...</option>
                  {DESTINATIONS.map((dest) => (
                    <option key={dest.id} value={dest.name} className="text-slate-800 bg-white">{dest.flag} {dest.name}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white text-xs font-black tracking-widest uppercase py-3 rounded-xl hover:shadow-[0_4px_12px_rgba(49,87,230,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer"
                id="analyse-eligibility-submit-btn"
              >
                Analyze Eligibility Tier
              </button>
            </form>

            {/* Assessment results box mapping */}
            {evaluationResult && (
              <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 animate-fade-in text-xs text-left">
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 space-y-2 font-medium">
                  <span className="text-[9px] font-black uppercase text-[#3157E6] block tracking-widest">
                    Evaluation Result Portfolio
                  </span>
                  <div className="flex justify-between items-center bg-white px-2.5 py-1.5 rounded border border-slate-150">
                    <span className="text-slate-505 text-slate-500">Tier Standing:</span>
                    <span className="text-slate-900 font-extrabold">{evaluationResult.tier}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-510 text-slate-500">Estimated Scholarship:</span>
                    <span className="text-amber-600 font-black">{evaluationResult.waiverEstimate}</span>
                  </div>
                </div>

                <div className="space-y-2 font-medium">
                  <span className="text-slate-900 font-black block">Personalized Advice:</span>
                  <ul className="space-y-2 text-slate-500 list-disc pl-4 text-[11px] leading-relaxed">
                    {evaluationResult.recommendations.map((rec: string, idx: number) => (
                      <li key={idx}>{rec}</li>
                    ))}
                  </ul>
                </div>

                {evaluationResult.matchingNatives.length > 0 && (
                  <div className="bg-blue-50 border border-blue-150 p-3 rounded-xl text-[11px] text-[#3157E6] font-bold space-y-1">
                    <span className="font-extrabold block">Direct Match:</span>
                    <span>Found {evaluationResult.matchingNatives.length} specific native programs in {evaluationResult.targetCountry}.</span>
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

      </section>

    </div>
  );
}
