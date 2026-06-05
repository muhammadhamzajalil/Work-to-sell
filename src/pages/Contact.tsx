import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Clock, 
  Building, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import LeadForm from '../components/LeadForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-slate-700 pt-28 pb-20">
      
      {/* Structural Title Intro Section */}
      <section className="relative py-12 md:py-16 overflow-hidden border-b border-slate-150">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F4096]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 z-10 relative text-center space-y-4">
          <span className="bg-[#1F4096]/10 text-[#1F4096] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#1F4096]/20">
            Reach Out Today
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 animate-pulse-slow">
            Contact & Operations Hub
          </h1>
          <p className="text-sm md:text-base text-slate-500 font-medium max-w-3xl mx-auto">
            Get in touch with an expert counselor physically at our Model Town Lahore office or connect instantly through official WhatsApp or telephone channels.
          </p>
        </div>
      </section>

      {/* Main Two-Column Operations Layout */}
      <section className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Hand: Connection & Directions */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 leading-tight">
              Model Town Lahore Head Office
            </h2>
            <p className="text-sm text-slate-505 text-slate-500 font-semibold leading-relaxed">
              Assalam-o-Alaikum! We welcome students and parents for one-on-one profiles evaluations. Walk-in visits are supported, though pre-booked appointments prevent waiting queues.
            </p>
          </div>

          {/* Interactive Direct Anchor connections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Click-to-call */}
            <a 
              href="tel:+923254008823"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-205 hover:border-[#1F4096] hover:bg-white hover:shadow-md transition-all text-left flex items-start gap-4 shadow-sm"
              id="contact-call-now-box"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1F4096] border border-blue-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="font-semibold">
                <span className="block text-[10px] text-slate-450 uppercase font-black">Call Direct</span>
                <span className="font-extrabold text-slate-900 text-sm block mt-0.5">+92 325 400 88 23</span>
                <span className="text-[10px] text-emerald-600 block mt-1">✓ Live Active line</span>
              </div>
            </a>

            {/* Click-to-whatsapp */}
            <a 
              href="https://wa.me/923254008823?text=Hello%20Rahbar%20Consultants,%20I%20would%20like%20to%20register%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-205 hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all text-left flex items-start gap-4 shadow-sm"
              id="contact-whatsapp-box"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="font-semibold">
                <span className="block text-[10px] text-slate-450 uppercase font-black">Chat WhatsApp</span>
                <span className="font-extrabold text-emerald-600 text-sm block mt-0.5">Instant Message</span>
                <span className="text-[10px] text-slate-500 block mt-1">Response within 15 mins</span>
              </div>
            </a>
          </div>

          {/* Logistics Address List */}
          <div className="bg-slate-50 border border-slate-205 rounded-2xl p-6 space-y-4 text-xs text-slate-600 shadow-sm font-semibold">
            <div className="flex gap-3 items-start border-b border-slate-150 pb-4">
              <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-black block text-slate-900 mb-1 uppercase text-[10px] tracking-wider text-slate-450">Physical Address</span>
                <p className="leading-relaxed text-slate-505 text-slate-500">
                  Flat No 110-111, First Floor, Asad Tower, International Market, Model Town, M Block, Lahore, Pakistan 54000.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center border-b border-slate-150 pb-4">
              <Mail className="w-5 h-5 text-[#1F4096] shrink-0" />
              <div>
                <span className="font-black block text-slate-900 mb-1 uppercase text-[10px] tracking-wider text-slate-450">Corporate Email</span>
                <a href="mailto:info@rahbarconsultants.com" className="text-[#1F4096] font-bold hover:underline">
                  info@rahbarconsultants.com
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Clock className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <span className="font-black block text-slate-900 mb-1 uppercase text-[10px] tracking-wider text-slate-450">Office Timings</span>
                <p className="text-slate-500">Monday – Saturday: <span className="text-slate-900 font-extrabold">10:00 AM – 06:00 PM</span>. Sunday Closed.</p>
              </div>
            </div>
          </div>

          {/* Map Section: Premium white themed coordinates locator */}
          <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-150 font-bold">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-[#1F4096]" />
                <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Office Location Coordinates</span>
              </div>
              <span className="text-[10px] bg-blue-50 text-[#1F4096] px-2 py-0.5 rounded-full border border-blue-100 uppercase">
                Asad Tower
              </span>
            </div>

            {/* Custom Aesthetic Light CSS Map Rendering */}
            <div className="w-full h-[240px] bg-slate-50 border border-slate-200 rounded-2xl relative flex items-center justify-center overflow-hidden shadow-inner">
              {/* Decorative grid maps backing */}
              <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Styled Road paths */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-white border-y border-slate-200" title="Model Town Link Road" />
              <div className="absolute left-1/3 top-0 bottom-0 w-4 bg-white border-x border-slate-200" title="M Block Avenue" />
              
              {/* Landmark Roundabout */}
              <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white border border-slate-205 flex items-center justify-center shadow-sm">
                <span className="text-[7px] text-slate-400 uppercase font-black tracking-widest text-center">Model Town <br /> Roundabout</span>
              </div>

              {/* Pin pointing marker */}
              <div className="absolute top-[38%] left-[58%] -translate-y-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                {/* Visual ripple pulse effects */}
                <span className="absolute inline-flex h-8 w-8 rounded-full bg-red-400/20 animate-ping" />
                <MapPin className="w-8 h-8 text-red-500 relative z-10 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]" />
                
                {/* Address Popover bubble */}
                <div className="bg-white border border-[#1F4096] py-1.5 px-3 rounded-lg text-[9px] text-slate-900 font-extrabold select-none mt-1 whitespace-nowrap shadow-md">
                  📍 Rahbar Consultants HQ
                </div>
              </div>

              {/* Surrounding Landmark anchors */}
              <div className="absolute bottom-6 right-8 text-[9px] font-black text-slate-400 uppercase tracking-widest pointer-events-none select-none">
                International Market Model Town
              </div>
              <div className="absolute top-6 left-8 text-[9px] font-black text-slate-400 uppercase tracking-widest pointer-events-none select-none">
                M Block Park
              </div>
            </div>

            <p className="text-[10px] text-slate-450 text-slate-500 text-center italic font-semibold">
              Located on the First Floor of Asad Tower, directly facing the International Market Central Gate in Model Town, Lahore.
            </p>
          </div>

        </div>

        {/* Right Hand: Lead Gen form component (45%) */}
        <div className="lg:col-span-6">
          <div className="sticky top-28">
            <LeadForm />
          </div>
        </div>

      </section>

    </div>
  );
}
