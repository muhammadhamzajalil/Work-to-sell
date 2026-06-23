import React from 'react';
// @ts-ignore
import regeneratedImage from '../assets/images/regenerated_image_1781048778098.jpg';
import OptimizedImage from '../components/OptimizedImage';
import { 
  Award, 
  MapPin, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  TrendingUp,
  FileText,
  Mail,
  HeartHandshake
} from 'lucide-react';
import { SERVICE_PILLARS } from '../data';

export default function AboutAndServices() {
  return (
    <div className="min-h-screen bg-white text-slate-700 pt-6 pb-20">
      
      {/* Editorial Branding banner */}
      <section className="relative py-12 md:py-16 overflow-hidden border-b border-slate-150">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3157E6]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 z-10 relative text-center space-y-4">
          <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20">
            About Rahbar Consultants
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 animate-pulse-slow">
            Our Mission & Educational Vision
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-3xl mx-auto">
            Providing high-velocity document engineering and admissions advice to empower talented Pakistani students to study internationally.
          </p>
        </div>
      </section>

      {/* Corporate Overview Body */}
      <section className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Descriptive details */}
        <div className="lg:col-span-11 lg:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
            Ethical, Accredited, and High-Yield Academic Support
          </h2>
          
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Founded with a commitment to integrity and student success, Rahbar Consultants has grown into a leading international education consultancy based in Lahore. We act as official, accredited processing pathways to respected higher learning systems in the United Kingdom, Australia, Canada, Ireland, Malaysia, UAE, Europe, South Korea, and Japan.
          </p>

          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Our core focus goes far beyond standard university filing; we design custom academic pathways that align with our clients’ financial strengths and future professional goals.
          </p>

          {/* Strategic value bullet metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 shadow-sm font-medium">
              <span className="text-[#3157E6] font-black text-base flex items-center gap-1">✓ 100% Transparency</span>
              <p className="text-slate-450 text-slate-500">Zero hidden fees or forced admissions to low-grade universities.</p>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 shadow-sm font-medium">
              <span className="text-amber-600 font-black text-base flex items-center gap-1">✓ Certified Counselors</span>
              <p className="text-slate-450 text-slate-500 font-medium">Each desk holds specific expertise on regional visa schemas.</p>
            </div>
          </div>
        </div>

        {/* Visual asset frame */}
        <div className="lg:col-span-5 relative">
          <div className="absolute inset-0 bg-[#3157E6]/5 rounded-full blur-[80px]" />
          
          <div className="relative rounded-[30px] border border-slate-200 overflow-hidden shadow-xl bg-slate-100 aspect-video lg:aspect-square">
            <OptimizedImage 
              url={regeneratedImage} 
              alt="Experienced processing advisors hosting a physical university seminar training" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </section>

      {/* Services deep overview section */}
      <section className="max-w-7xl mx-auto px-4 mt-24">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#3157E6]/20">
            Counseling Features
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Comprehensive Operational Services Portfolio
          </h2>
          <p className="text-sm text-slate-550 text-slate-500 font-medium">
            How we ensure hassle-free processing on your study visa file from Lahore headquarters.
          </p>
        </div>

        {/* 6-Grid services details block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICE_PILLARS.map((srv) => (
            <div 
              key={srv.id}
              className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md transition-all space-y-4"
              id={`about-service-detail-${srv.id}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3157E6] border border-blue-100 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black text-slate-900">{srv.title}</h3>
              </div>

              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-semibold">
                {srv.description}
              </p>

              {/* Extra operational checklist details */}
              <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-slate-400 font-extrabold select-none">
                <span className="text-slate-450">• Verified Document Checks</span>
                <span className="text-slate-450">• Timely Status Updates</span>
                <span className="text-slate-450">• Qualified Advisory Desk</span>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
