import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Users, 
  ShieldCheck 
} from 'lucide-react';
import { DESTINATIONS } from '../data';
import { InquiryFormData } from '../types';

interface LeadFormProps {
  initialDestination?: string;
  onSuccess?: () => void;
}

export default function LeadForm({ initialDestination = '', onSuccess }: LeadFormProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    qualification: '',
    destination: initialDestination || '',
    message: ''
  });

  // Sync destination form field when changing destination detail pages
  React.useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({
        ...prev,
        destination: initialDestination
      }));
    }
  }, [initialDestination]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const qualificationsList = [
    'Matric / O-Levels',
    'F.Sc / ICS / I.Com / A-Levels',
    'Bachelor of Arts / Science / Business (BA/B.Sc/BBA)',
    'Master / M.Phil Candidate',
    'Other Specialized Qualification'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Strict Input Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your active telephone number.');
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg('Please enter your active email address.');
      return;
    }
    if (!formData.qualification) {
      setErrorMsg('Please choose your current qualification level.');
      return;
    }
    if (!formData.destination) {
      setErrorMsg('Please select your preferred study destination.');
      return;
    }

    setIsSubmitting(true);
    
    fetch("https://formspree.io/f/mnjyzavy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Full Name": formData.fullName,
        "Telephone Number": formData.phone,
        "Email Address": formData.email,
        "Qualification Level": formData.qualification,
        "Preferred Destination": formData.destination,
        "Additional Message": formData.message || "No comments"
      })
    })
    .then((response) => {
      if (response.ok) {
        setIsSuccess(true);
        if (onSuccess) onSuccess();
      } else {
        response.json().then(data => {
          if (data && data.errors) {
            setErrorMsg(data.errors.map((error: { message: string }) => error.message).join(", "));
          } else {
            setErrorMsg("Something went wrong submiting to the portal. Please try again.");
          }
        }).catch(() => {
          setErrorMsg("Failed to process server response.");
        });
      }
    })
    .catch(() => {
      setErrorMsg("A network connection error occurred. Please check your internet connection.");
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-white border border-emerald-100 p-8 rounded-3xl text-center shadow-[0_12px_40px_rgba(0,0,0,0.05)] transform animate-fade-in relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        
        <h3 className="text-2xl font-black text-slate-900 mb-3">Consultation Registered!</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto mb-6 font-medium">
          Assalam-o-Alaikum, <span className="font-bold text-slate-800">{formData.fullName}</span>! We have received your profile details for <span className="text-[#3157E6] font-bold">{formData.destination}</span>. 
        </p>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6 text-xs text-slate-500 text-left space-y-2 font-medium">
          <div className="flex justify-between"><span className="text-slate-400">Contact Telephone:</span> <span className="text-slate-850 font-semibold font-mono">{formData.phone}</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Qualification:</span> <span className="text-slate-850 font-semibold">{formData.qualification}</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Assigned Route:</span> <span className="text-[#3157E6] font-bold">Standard Fast-Track</span></div>
        </div>

        <p className="text-xs text-emerald-700 font-bold bg-emerald-50 py-2 px-4 rounded-full inline-block border border-emerald-200">
          ✓ An expert counselor will contact you on WhatsApp/Call within 2 hours
        </p>

        <button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              qualification: '',
              destination: '',
              message: ''
            });
          }}
          className="mt-6 text-xs text-slate-450 underline hover:text-[#3157E6] transition-colors block mx-auto cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-150 p-6 md:p-8 rounded-3xl shadow-[0_12px_45px_rgba(0,0,0,0.05)] relative" id="consultation-form-wrapper">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3157E6] animate-pulse" />
        <span className="text-xs font-bold text-[#3157E6] uppercase tracking-widest">Instant Booking portal</span>
      </div>
      
      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 leading-tight">
        Request Free Profile Assessment
      </h3>
      <p className="text-xs text-slate-500 mb-6 font-medium">
        Submit details about your background and desired country. Our processing desks will evaluate entry eligibility and potential scholarship rates.
      </p>

      {errorMsg && (
        <div className="mb-4 text-xs text-red-600 bg-red-50 border border-red-200 py-2.5 px-3 rounded-xl font-bold">
          ⚠ {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5 animate-pulse-slow" htmlFor="fullName">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            placeholder="e.g. Zain Ahmed"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all placeholder:text-slate-400"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5" htmlFor="phone">
              Phone / WhatsApp <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="e.g. +92 300 1234567"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5" htmlFor="email">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="e.g. zain@gmail.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5" htmlFor="qualification">
              Highest Qualification <span className="text-red-500">*</span>
            </label>
            <select
              id="qualification"
              name="qualification"
              value={formData.qualification}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-slate-400">Select qualification...</option>
              {qualificationsList.map((q, idx) => (
                <option key={idx} value={q} className="bg-white text-slate-800">{q}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5" htmlFor="destination">
              Target Study Vector <span className="text-red-500">*</span>
            </label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all appearance-none cursor-pointer"
            >
              <option value="" disabled className="text-slate-400">Select preferred country...</option>
              {DESTINATIONS.map((dest) => (
                <option key={dest.id} value={dest.name} className="bg-white text-slate-800">
                  {dest.flag} {dest.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-black text-slate-705 uppercase tracking-wider mb-1.5" htmlFor="message">
            Additional Comments (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your grades, IELTS scores, budget limits, or course targets..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all placeholder:text-slate-400 resize-none animate-pulse-slow"
          />
        </div>

        {/* Brand inspired button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white text-xs font-black tracking-widest uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_4px_15px_rgba(49,87,230,0.3)] hover:-translate-y-0.5 transition-all outline-none cursor-pointer disabled:opacity-50"
          id="lead-form-submit-btn"
        >
          {isSubmitting ? 'Registering details...' : 'Submit Profile for Assessment'}
          <Send className="w-3.5 h-3.5" />
        </button>

        <div className="flex justify-center items-center gap-3 pt-2 text-[10px] text-slate-400 font-bold">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" /> Secure Data
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span>No Spam Guarantee</span>
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span>Lahore Head Office</span>
        </div>
      </form>
    </div>
  );
}
