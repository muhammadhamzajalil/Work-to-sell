import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  Award, 
  Clock, 
  FileText, 
  CheckCircle2, 
  Calendar, 
  Star,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';
import { SUCCESS_STORIES, DESTINATIONS } from '../data';
import { SuccessStory } from '../types';
import OptimizedImage from '../components/OptimizedImage';

export default function SuccessStories() {
  const [activeCountryFilter, setActiveCountryFilter] = useState('All');

  const countriesWithStories = ['All', 'United Kingdom (UK)', 'Australia', 'Hungary', 'Malaysia', 'South Korea', 'Japan'];

  const filteredStories = SUCCESS_STORIES.filter(story => {
    return activeCountryFilter === 'All' || story.targetCountry === activeCountryFilter;
  });

  return (
    <div className="min-h-screen bg-white text-slate-700 pt-6 pb-20">
      
      {/* Structural Header intro panel */}
      <section className="relative py-12 md:py-16 overflow-hidden border-b border-slate-150">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4E72FA]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 z-10 relative text-center space-y-4">
          <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20">
            Student Achievements
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            Official Visa Approval Registry
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-3xl mx-auto">
            Audit actual admissions and student study visa approvals filed through Rahbar Consultants Lahore. We present exact grade metrics and language score parameters.
          </p>
        </div>
      </section>

      {/* Main Filter system */}
      <section className="max-w-7xl mx-auto px-4 mt-16 space-y-8">
        
        {/* Country filters switcher bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-205 shadow-sm">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#3157E6]" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filter By Dest:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {countriesWithStories.map((country, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCountryFilter(country)}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                  activeCountryFilter === country 
                    ? 'bg-[#3157E6] text-white border-[#3157E6]' 
                    : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}
                id={`filter-story-${idx}`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>

        {/* Stories display grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStories.map((story) => (
            <div 
              key={story.id}
              className="bg-white border border-slate-200 rounded-3xl p-6 hover:border-slate-350 hover:shadow-md transition-all flex flex-col justify-between shadow-sm relative overflow-hidden"
              id={`success-story-${story.id}`}
            >
              
              {/* Simulated Ambient visa approval badge watermark */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-emerald-500/20 flex items-center justify-center rotate-12 select-none pointer-events-none bg-emerald-500/[0.04]">
                <span className="text-[8px] font-black uppercase text-emerald-600 tracking-wider">Visa Approved</span>
              </div>

              <div>
                {/* Profile header with student avatar */}
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-slate-150 overflow-hidden shrink-0 bg-slate-100 shadow-inner">
                    <OptimizedImage 
                      url={story.avatarUrl} 
                      width={96}
                      alt={`Portrait of matching candidate ${story.studentName}`} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                      {story.studentName}
                      <span className="text-xs text-slate-500 font-medium">from {story.fromCity}</span>
                    </h3>
                    <span className="text-[10px] text-slate-400 block uppercase font-bold tracking-wide mt-0.5">
                      Target Vector: {story.targetCountry}
                    </span>
                  </div>
                </div>

                {/* Performance before/after parameters */}
                <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-slate-100 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black block mb-1">Academic Grades</span>
                    <span className="font-bold text-slate-800 bg-slate-50 py-1.5 px-2.5 rounded-lg border border-slate-150 block w-full text-center">
                      📚 {story.gradesMetric}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-black block mb-1">Language Band Marks</span>
                    <span className="font-bold text-[#3157E6] bg-blue-50 py-1.5 px-2.5 rounded-lg border border-[#3157E6]/10 block w-full text-center">
                      ⚡ {story.testScoreMetric}
                    </span>
                  </div>
                </div>

                {/* Admitted Institutional specifications */}
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-150 text-xs mb-6 font-semibold">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Admitted Target:</span>
                    <span className="font-extrabold text-slate-800 text-right">{story.universityAdmitted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Program Course:</span>
                    <span className="font-bold text-slate-600 text-right">{story.program}</span>
                  </div>
                </div>

                {/* Testimonial comments block */}
                <p className="text-xs text-slate-500 italic leading-relaxed mb-6 font-medium">
                  "{story.testimony}"
                </p>
              </div>

              {/* Approval credentials stamp values */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-105 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-center gap-1.5 animate-pulse-slow">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-black text-emerald-600 uppercase tracking-wider text-[10px]">
                    Official Study Permit Issued
                  </span>
                </div>
                <div className="text-right font-semibold">
                  <span className="text-[9px] text-slate-400 uppercase block font-bold">Process duration</span>
                  <span className="font-bold text-slate-800 font-mono">{story.visaTimeDays} Business Days</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
