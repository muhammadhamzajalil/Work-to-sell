import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Award, 
  Users, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight,
  BookmarkCheck,
  TrendingUp,
  Stamp,
  Globe,
  Star,
  CheckCircle,
  Clock,
  Search,
  Calculator,
  HelpCircle,
  Building2,
  Play,
  X,
  ChevronDown,
  ChevronUp,
  Calendar,
  Plus,
  Minus,
  BookOpen
} from 'lucide-react';
import { DESTINATIONS, PROCESS_STEPS, SERVICE_PILLARS, SUCCESS_STORIES } from '../data';
import LeadForm from '../components/LeadForm';
import UniversityLogoMarquee from '../components/UniversityLogoMarquee';
// @ts-ignore
import regeneratedImage from '../assets/images/regenerated_image_1781047747375.jpg';
// @ts-ignore
import regeneratedImage1 from '../assets/images/regenerated_image_1781048371471.jpg';
// @ts-ignore
import regeneratedImage2 from '../assets/images/regenerated_image_1781048372939.jpg';
// @ts-ignore
import regeneratedImage5 from '../assets/images/regenerated_image_1781048374424.jpg';
// @ts-ignore
import regeneratedImage6 from '../assets/images/regenerated_image_1781049819636.jpg';

// Dynamic Insights & Articles feed
const INSIGHTS_POSTS = [
  {
    id: 1,
    title: 'Lahore to London: Complete CAS Vetting & Compliance Audit Checklist',
    excerpt: 'Detailed review of latest UK Visas and Immigration (UKVI) guidelines, active bank statement constraints, and university pre-CAS credibility interviews.',
    category: 'Visas',
    readTime: '6 mins read',
    date: 'June 3, 2026',
    author: 'Registrar Team',
    imgUrl: regeneratedImage1,
    slug: 'lahore-to-london-cas-vetting'
  },
  {
    id: 2,
    title: 'Demystifying the Australian Genuine Student (GS) Requirement',
    excerpt: 'A comprehensive checklist of what GTE-replacement parameters level-1 Australian universities are searching for in your study plan layout.',
    category: 'Admissions',
    readTime: '5 mins read',
    date: 'May 28, 2026',
    author: 'Mohamed Rahbar',
    imgUrl: regeneratedImage2,
    slug: 'australian-genuine-student-gs'
  },
  {
    id: 3,
    title: 'How to Win the Fully-Funded Stipendium Hungaricum Spot in Hungary',
    excerpt: 'A blueprint for preparing a high-impact motivational statement and securing absolute state sponsorship in Budapest and Debrecen.',
    category: 'Scholarships',
    readTime: '7 mins read',
    date: 'May 15, 2026',
    author: 'Scholarship Desk',
    imgUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=400',
    slug: 'stipendium-hungaricum-success'
  },
  {
    id: 4,
    title: 'Part-Time Work Guidelines & Hourly Rates in Schengen Europe',
    excerpt: 'Navigate of the latest legal frameworks allowing 20 to 30 weekly hours of off-campus employment for non-EU international candidates.',
    category: 'Student Life',
    readTime: '4 mins read',
    date: 'April 20, 2026',
    author: 'Student Care Desk',
    imgUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=400',
    slug: 'part-time-work-schengen'
  },
  {
    id: 5,
    title: 'Graduate Work routes in Ireland: Stamp 1G post-study visa path analyzed',
    excerpt: 'How tech graduates are bridging into multinational offices of Google, Meta, and Stripe directly via Dublin-based institutions.',
    category: 'Admissions',
    readTime: '5 mins read',
    date: 'April 11, 2026',
    author: 'Admissions Desk',
    imgUrl: regeneratedImage5,
    slug: 'ireland-stamp-1g-path'
  },
  {
    id: 6,
    title: 'Secure Savings: Framing High-Velocity Personal Funds for Visas',
    excerpt: 'Correct structures of bank statements, source of fund proofs, and sponsor layouts required to pass biometric checks without errors.',
    category: 'Visas',
    readTime: '8 mins read',
    date: 'March 24, 2026',
    author: 'Finance Audit Lead',
    imgUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400',
    slug: 'securing-bank-funds-visa'
  }
];

// Rich counseling FAQ base grouped by topics
const FAQ_ITEMS = [
  {
    category: 'General',
    question: 'Who supervises the Lahore guidance desks?',
    answer: 'Our Model Town HQ guidance and document vetting processes are directly overseen by PEER Certified Registrars and founder Mohamed Rahbar to guarantee 100% compliance with international standards.'
  },
  {
    category: 'General',
    question: 'Do you offer remote advisory sessions for out-of-city students?',
    answer: 'Yes! We run complete profile evaluation, document assessments, and mock credibility interviews via scheduled video consultations on Zoom or Microsoft Teams for students across Pakistan.'
  },
  {
    category: 'General',
    question: 'Are there any hidden counseling or application fees?',
    answer: 'None whatsoever. In alignment with our bedrocks of professional integrity and full transparency, all university application fees, diagnostic fees, and processing fees are structured and detailed upfront.'
  },
  {
    category: 'Admissions',
    question: 'Can I get a UK study permit admission without IELTS?',
    answer: 'Yes, selected partner UK universities accept HSSC Intermediate English grades of 70%+ as a complete validation waiver, provided your intermediate degree was awarded by recognized regional boards.'
  },
  {
    category: 'Admissions',
    question: 'How are intermediate and master level gaps evaluated?',
    answer: 'Academic gaps of 2-5 years can be rectified and defended with verified work experience certificates, professional internship files, or specialized technical training and cert outcomes.'
  },
  {
    category: 'Admissions',
    question: 'Does Rahbar secure direct placements?',
    answer: 'Yes, we are official direct representatives for over 100+ highly accredited premium university partners globally. Our close structural ties let us fast-track admissions and secure automatic merit waivers.'
  },
  {
    category: 'Visas',
    question: 'What is your actual student visa success rate?',
    answer: 'We maintain an exceptional, verified 98% visa success rate. This high performance is driven by absolute precision in profiling, bank fund vetting, and rigorous credibility preparation.'
  },
  {
    category: 'Visas',
    question: 'What does the credibility visa prep support cover?',
    answer: 'Our advisors conduct rigorous simulated embassy prep mimicking UK Credibility checkers and Australian GS inspectors. We analyze and address potential weak points in your personal narratives.'
  },
  {
    category: 'Visas',
    question: 'How long does biometric study visa outcome processing take?',
    answer: 'Once biometrics are taken, UK standard outcomes are delivered in 15 business days, Australia in 2-4 weeks, and Europe/Schengen nodes generally take between 4 to 8 weeks depending on the embassy cycle.'
  },
  {
    category: 'Scholarships',
    question: 'What type of scholarships can I secure?',
    answer: 'Our students secure standard corporate entrance fellowships of 15% to 50% tuition reductions, as well as highly prestigious fully-funded state programs like the Hungarian Stipendium Hungaricum.'
  },
  {
    category: 'Scholarships',
    question: 'What is the required academic mark for fully-funded spaces?',
    answer: 'Fully-funded government programs typically demand excellent academic records (75%+ in FSC/Intermediate, or CGPA of 3.2+ in BS), combined with an exceptionally strong statement of purpose.'
  },
  {
    category: 'Scholarships',
    question: 'Do scholarships apply to postgraduate level courses?',
    answer: 'Yes! Advanced executive master programs and MBA streams support high-caliber candidates with local regional discounts, research subsidies, or custom entrance fellowships.'
  }
];

interface HomeProps {
  onNavigate: (route: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [activeDestinationHover, setActiveDestinationHover] = useState<string | null>(null);

  // University bento active filters
  const [univSearch, setUnivSearch] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');

  // Scholarship evaluator state
  const [evalCountry, setEvalCountry] = useState('United Kingdom');
  const [evalScoreType, setEvalScoreType] = useState<'cgpa' | 'percentage'>('cgpa');
  const [evalScoreVal, setEvalScoreVal] = useState('3.7');
  const [evalEnglishTest, setEvalEnglishTest] = useState('IELTS (Academic)');
  const [evalEnglishScore, setEvalEnglishScore] = useState('7.0');
  const [evalLevel, setEvalLevel] = useState("Postgraduate (Master's/MBA)");
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalDone, setEvalDone] = useState(false);

  // Alumni Success Video states with high-fidelity simulations
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeVideoStory, setActiveVideoStory] = useState<{
    studentName: string;
    targetCountry: string;
    universityAdmitted: string;
    program: string;
    testimony: string;
    videoTitle?: string;
  } | null>(null);
  const [isMockPlaying, setIsMockPlaying] = useState(false);
  const [mockProgress, setMockProgress] = useState(25);

  React.useEffect(() => {
    let intervalId: any;
    if (isMockPlaying) {
      intervalId = setInterval(() => {
        setMockProgress((p) => {
          if (p >= 100) {
            setIsMockPlaying(false);
            return 100;
          }
          return p + 1;
        });
      }, 400);
    }
    return () => clearInterval(intervalId);
  }, [isMockPlaying]);

  // Student Insights & Featured News Portal State
  const [insightsCategory, setInsightsCategory] = useState('All');

  // FAQ Accordions Categories and State
  const [faqCategory, setFaqCategory] = useState('General');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Partner universities list (Unsplash/SVG placeholders for elite representation)
  const PARTNER_UNIVERSITIES = [
    { name: 'Coventry University', logotext: 'Coventry' },
    { name: 'University of Hertfordshire', logotext: 'Hertfordshire' },
    { name: 'Asia Pacific University', logotext: 'APU Malaysia' },
    { name: 'Trinity College Dublin', logotext: 'TCD Ireland' },
    { name: 'Victoria University', logotext: 'VU Australia' },
    { name: 'BPP University', logotext: 'BPP' },
    { name: 'Griffith College Dublin', logotext: 'Griffith' },
    { name: 'University of Debrecen', logotext: 'Debrecen' }
  ];

  // 23 top premium partner universities across our 11 target countries
  const SHOWCASE_UNIVERSITIES = [
    {
      name: 'University of Hertfordshire',
      country: 'United Kingdom',
      flag: '🇬🇧',
      qsRank: '#801-1000 Global',
      programs: ['M.Sc Data Science', 'B.Sc Computer Science', 'MBA Business'],
      isVerified: true,
      logoText: 'UH'
    },
    {
      name: 'Coventry University',
      country: 'United Kingdom',
      flag: '🇬🇧',
      qsRank: '#551-600 Global',
      programs: ['M.Sc Cyber Security', 'MBA Global Finance', 'B.Eng Engineering'],
      isVerified: true,
      logoText: 'CU'
    },
    {
      name: 'BPP University',
      country: 'United Kingdom',
      flag: '🇬🇧',
      qsRank: 'Tier-1 Professional',
      programs: ['M.Sc Management', 'LLM Commercial Law', 'B.Sc Accounting'],
      isVerified: true,
      logoText: 'BPP'
    },
    {
      name: 'Swinburne University of Technology',
      country: 'Australia',
      flag: '🇦🇺',
      qsRank: '#285 Global',
      programs: ['Master of IT', 'Bachelor of Design', 'M.Sc Construction'],
      isVerified: true,
      logoText: 'SUT'
    },
    {
      name: 'Victoria University',
      country: 'Australia',
      flag: '🇦🇺',
      qsRank: '#701-750 Global',
      programs: ['Master of Enterprise Systems', 'B.Sc Nursing Science', 'MBA'],
      isVerified: true,
      logoText: 'VU'
    },
    {
      name: 'Seneca Polytechnic',
      country: 'Canada',
      flag: '🇨🇦',
      qsRank: 'Top Public Applied',
      programs: ['Advanced Diploma Software Dev', 'Graduate Certificate Business'],
      isVerified: true,
      logoText: 'SP'
    },
    {
      name: 'Asia Pacific University (APU)',
      country: 'Malaysia',
      flag: '🇲🇾',
      qsRank: 'QS 5-Star rated',
      programs: ['B.Sc Artificial Intelligence', 'M.Sc Data Analytics', 'MBA Tech'],
      isVerified: true,
      logoText: 'APU'
    },
    {
      name: 'Heriot-Watt University Dubai',
      country: 'United Arab Emirates',
      flag: '🇦🇪',
      qsRank: '#235 Global Parent',
      programs: ['M.Sc Energy Economics', 'M.Sc FinTech', 'BBA Finance'],
      isVerified: true,
      logoText: 'HWU'
    },
    {
      name: 'Charles University',
      country: 'Europe',
      flag: '🇪🇺',
      qsRank: '#248 Global',
      programs: ['MD General Medicine', 'M.Sc Computer Science & Robotics'],
      isVerified: true,
      logoText: 'CU'
    },
    {
      name: 'University of Pécs',
      country: 'Hungary',
      flag: '🇭🇺',
      qsRank: '#651-700 Global',
      programs: ['Doctor of Dental Surgery (DDS)', 'B.Sc Psychology', 'BBA'],
      isVerified: true,
      logoText: 'UP'
    },
    {
      name: 'Budapest Metropolitan University',
      country: 'Hungary',
      flag: '🇭🇺',
      qsRank: 'Top Business School',
      programs: ['BA Communication & Media', 'B.Sc Tourism & Commerce'],
      isVerified: true,
      logoText: 'METU'
    },
    {
      name: 'Politehnica University Bucharest',
      country: 'Romania',
      flag: '🇷🇴',
      qsRank: '#1200 Global',
      programs: ['B.Sc Software Engineering', 'M.Sc Telecommunication Networks'],
      isVerified: true,
      logoText: 'UPB'
    },
    {
      name: 'Griffith College Dublin',
      country: 'Ireland',
      flag: '🇮🇪',
      qsRank: 'Top Quality honors',
      programs: ['BA Journalism', 'M.Sc Interactive Digital Media', 'MBA'],
      isVerified: true,
      logoText: 'GCD'
    },
    {
      name: 'National College of Ireland (NCI)',
      country: 'Ireland',
      flag: '🇮🇪',
      qsRank: 'Top Graduate Outcomes',
      programs: ['M.Sc Cloud Computing', 'M.Sc Data Analytics', 'BA Finance'],
      isVerified: true,
      logoText: 'NCI'
    },
    {
      name: 'Seoul National University',
      country: 'South Korea',
      flag: '🇰🇷',
      qsRank: '#41 Global',
      programs: ['B.Sc Computer Science', 'MBA Global Business', 'M.Sc Biotechnology'],
      isVerified: true,
      logoText: 'SNU'
    },
    {
      name: 'KAIST',
      country: 'South Korea',
      flag: '🇰🇷',
      qsRank: '#53 Global',
      programs: ['B.Sc Robotics', 'M.Sc Artificial Intelligence', 'M.Eng Engineering'],
      isVerified: true,
      logoText: 'KAIST'
    },
    {
      name: 'Yonsei University',
      country: 'South Korea',
      flag: '🇰🇷',
      qsRank: '#56 Global',
      programs: ['Bachelor of Business', 'Undergraduate Global Studies', 'M.Sc Computer Tech'],
      isVerified: true,
      logoText: 'Yonsei'
    },
    {
      name: 'Korea University',
      country: 'South Korea',
      flag: '🇰🇷',
      qsRank: '#67 Global',
      programs: ['BA Business Management', 'M.Sc Cybersecurity', 'LLM Law'],
      isVerified: true,
      logoText: 'KU'
    },
    {
      name: 'The University of Tokyo',
      country: 'Japan',
      flag: '🇯🇵',
      qsRank: '#28 Global',
      programs: ['B.Sc Physics', 'Master of Engineering', 'MBA Tech Management'],
      isVerified: true,
      logoText: 'UTokyo'
    },
    {
      name: 'Kyoto University',
      country: 'Japan',
      flag: '🇯🇵',
      qsRank: '#46 Global',
      programs: ['B.Sc Chemistry', 'M.Sc Environmental Sciences', 'PhD Physics'],
      isVerified: true,
      logoText: 'KyotoU'
    },
    {
      name: 'Osaka University',
      country: 'Japan',
      flag: '🇯🇵',
      qsRank: '#80 Global',
      programs: ['B.Sc Biotechnology', 'M.Sc Software Systems', 'MBA Strategic Fin'],
      isVerified: true,
      logoText: 'OsakaU'
    },
    {
      name: 'Waseda University',
      country: 'Japan',
      flag: '🇯🇵',
      qsRank: '#181 Global',
      programs: ['BA International Commerce', 'B.Sc Computer Networks', 'M.A Asia Pacific Studies'],
      isVerified: true,
      logoText: 'Waseda'
    }
  ];

  // Scholarship evaluator logic based on grades and english marks
  const runEvaluationDiagnostic = () => {
    setIsEvaluating(true);
    setEvalDone(false);
    setTimeout(() => {
      setIsEvaluating(false);
      setEvalDone(true);
    }, 850);
  };

  const getEvaluationResult = () => {
    const numScore = parseFloat(evalScoreVal) || 0;
    
    let isHighAchiever = false;
    let isModerateAchiever = false;
    
    if (evalScoreType === 'cgpa') {
      if (numScore >= 3.4) isHighAchiever = true;
      else if (numScore >= 2.8) isModerateAchiever = true;
    } else {
      if (numScore >= 80) isHighAchiever = true;
      else if (numScore >= 65) isModerateAchiever = true;
    }

    // Scholarship schema matching
    let eligibility = '15% – 25% Entrance Fellowship';
    let range = '£1,000 – £3,000 / Entry Bursary';
    let details = 'Eligible for automatic entrance awards. We recommend submitting early with a solid statement of purpose to protect your grant.';
    let suitability = 'Normal Merit Track';

    if (isHighAchiever) {
      if (evalCountry === 'Hungary') {
        eligibility = '100% Fully-Funded Stipendium';
        range = 'Full Tuition + Accommodation + Monthly Living Stipend';
        details = 'Incredible profile! You are highly eligible for the fully-funded Stipendium Hungaricum state program. Applications open annually.';
        suitability = 'Fully Funded State Track';
      } else if (evalCountry === 'United Kingdom') {
        eligibility = '£2,000 to £5,000 Vice-Chancellor Merit Scholarship';
        range = '£2,000 – £5,000 off tuition fee invoice';
        details = 'Your academic standards entitle you to top-bracket university merit awards which are deducted automatically upon admission confirmation.';
        suitability = 'Elite Merit Track';
      } else if (evalCountry === 'Australia') {
        eligibility = '25% to 30% Institutional Excellence Award';
        range = 'Up to A$10,000 reduction annually';
        details = 'Highly matching level-1 Australian universities offering instant excellence offsets based on consistent high marks.';
        suitability = 'Presidential Merit Track';
      } else if (evalCountry === 'Malaysia') {
        eligibility = '35% to 50% High-Scorer Scholarship';
        range = 'Up to 50% off full cycle tuition';
        details = 'APU and Taylor’s University provide direct talent grants for computing, cybersecurity, and engineering high-tier achievers.';
        suitability = 'APU Excellence Grant';
      } else if (evalCountry === 'South Korea') {
        eligibility = '100% Fully-Funded Global Korea Scholarship (GKS)';
        range = 'Full Tuition + Monthly Allowance (₩1,000,000) + Airfare';
        details = 'Outstanding profile! You are an ideal candidate for the prestigious GKS government-sponsored scholarship. Direct pathways to elite Korean universities are available.';
        suitability = 'National GKS Scholar';
      } else if (evalCountry === 'Japan') {
        eligibility = '100% Fully-Funded MEXT Government Scholarship';
        range = 'Zero Tuition Fees + Monthly Stipend (¥143,000) + Internals';
        details = 'Excellent academic standing. You are highly eligible to compete for the Japanese Government Embassy MEXT Scholarship pathway. Unlocks elite public universities.';
        suitability = 'Elite MEXT Scholar';
      } else {
        eligibility = '30% to 50% Excellence Waiver';
        range = 'Significant fee reductions + local housing subsidy options';
        details = 'Matches premium regional scholarships. Recommended action is to coordinate immediate paperwork filing with our desks.';
        suitability = 'Global Excellence Scholar';
      }
    } else if (isModerateAchiever) {
      eligibility = '15% to 25% Standard Merit Scholarship';
      range = 'Moderate tuition credit offsets';
      details = 'Good solid profile. Selected partner branches grant automatic standard tuition offsets to secure your study seat.';
      suitability = 'Standard Academic Waiver';
    }

    // Recommendation lists based on country
    const targetUnis = SHOWCASE_UNIVERSITIES.filter(
      u => u.country.toLowerCase() === evalCountry.toLowerCase() || 
           (evalCountry === 'Europe' && (u.country === 'Europe' || u.country === 'Hungary' || u.country === 'Romania'))
    );

    return {
      eligibility,
      range,
      details,
      suitability,
      targetUnis: targetUnis.length > 0 ? targetUnis : SHOWCASE_UNIVERSITIES.slice(0, 3)
    };
  };

  // Pre-fills target destination and notes inside LeadForm automatically and scrolls to focus
  const handleInquireUniversity = (countryName: string, notes?: string) => {
    // 1. Update the actual selection dropdown index
    const destinationSelect = document.getElementById('destination') as HTMLSelectElement;
    if (destinationSelect) {
      destinationSelect.value = countryName;
      const event = new Event('change', { bubbles: true });
      destinationSelect.dispatchEvent(event);
    }
    
    // 2. Prefill custom comments or notes details
    const messageArea = document.getElementById('message') as HTMLTextAreaElement;
    if (messageArea && notes) {
      messageArea.value = `Inquiry regarding: ${notes}`;
      const event = new Event('change', { bubbles: true });
      messageArea.dispatchEvent(event);
    }

    // 3. Perform a smooth structural viewport scroll down to the lead capture container
    document.getElementById('consultation-form-wrapper')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="text-slate-605 bg-white min-h-screen">
      
      {/* SECTION A: PREMIUM HERO FOLD */}
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-28 overflow-hidden">
        {/* Soft Ambient Guideline Halos */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#3157E6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-[400px] h-[400px] bg-[#4E72FA]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content Frame (45%) */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            
            {/* Micro-label pill */}
            <div className="inline-flex self-start items-center gap-2 bg-slate-50 border border-slate-200 rounded-full py-1.5 px-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#3157E6]" />
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-slate-600 uppercase">
                International Education Consultants
              </span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-black tracking-tight leading-tight md:leading-none text-slate-900">
              Your Gateway To <br />
              <span className="relative inline-block mt-1.5 pb-1">
                <span className="relative z-10 bg-gradient-to-r from-[#3157E6] via-[#4E72FA] to-[#3157E6] bg-clip-text text-transparent">
                  [Global Education Success]
                </span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#3157E6]/10 rounded pointer-events-none" />
              </span>
            </h1>

            {/* Subheadline explanatory copy */}
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[600px] font-medium">
              Assisting high-caliber candidates in Lahore to secure top-tier university admits, premium scholarships, and simplified study visa approvals. Connect with our certified advisors today.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a 
                href="#consultation-form-wrapper"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('consultation-form-wrapper')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto text-center min-h-[48px] bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white text-xs font-black tracking-widest uppercase px-8 py-4 rounded-xl hover:shadow-[0_4px_15px_rgba(49,87,230,0.3)] hover:-translate-y-0.5 transition-all outline-none"
                id="hero-primary-cta"
              >
                Get Free Assessment
              </a>
              <button 
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto text-center min-h-[48px] bg-white border border-slate-250 hover:border-slate-350 text-slate-700 text-xs font-black tracking-widest uppercase px-8 py-4 rounded-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all outline-none cursor-pointer"
                id="hero-secondary-cta"
              >
                Book Consultation
              </button>
            </div>

            {/* Horizontal Statistics Row */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] mt-4">
              <div className="border-r border-slate-100 pr-2">
                <span className="block text-2xl lg:text-3xl font-black text-slate-900">5,000+</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1 block">Students Guided</span>
              </div>
              <div className="md:border-r md:border-slate-100 pr-2">
                <span className="block text-2xl lg:text-3xl font-black text-[#3157E6]">98%</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1 block">Visa Success</span>
              </div>
              <div className="border-r border-slate-100 pr-2">
                <span className="block text-2xl lg:text-3xl font-black text-slate-900">100+</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1 block">University Partners</span>
              </div>
              <div className="pr-2">
                <span className="block text-2xl lg:text-3xl font-black text-amber-500">10+ Yrs</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mt-1 block">Experience</span>
              </div>
            </div>

          </div>

          {/* Right Column Aesthetic Focus (55%) */}
          <div className="lg:col-span-6 flex justify-center items-center relative lg:h-[600px] mt-8 lg:mt-0">
            {/* Soft backdrop radial pulse glow */}
            <div className="absolute inset-0 bg-[#3157E6]/5 rounded-full blur-[100px] animate-pulse" />
            
            {/* Primary Portrait Shape with curves */}
            <div className="relative w-full max-w-[480px] h-[400px] md:h-[480px] rounded-[40px] border border-slate-200 overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] z-10 bg-slate-100">
              <img 
                src={regeneratedImage6}
                alt="Confident International Students on University Campus laughing together"
                className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>

            {/* Asynchronous Floating Glass Cards */}
            {/* Card 1: Australia (Top Right) */}
            <div 
              className="absolute -top-4 right-2 md:right-4 z-20 bg-white/95 border border-slate-150 py-3 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform flex items-center gap-3 select-none"
              id="hero-float-card-1"
            >
              <span className="text-2xl">🇦🇺</span>
              <div className="text-left">
                <span className="block text-xs font-black text-slate-800">Study in Australia</span>
                <span className="block text-[10px] text-emerald-600 font-bold">Scholarships Open</span>
              </div>
            </div>

            {/* Card 2: Visa success badge (Middle Right) */}
            <div 
              className="absolute top-1/2 right-2 lg:-right-10 z-20 bg-white/95 border border-slate-150 py-3 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform flex items-center gap-3 select-none"
              id="hero-float-card-2"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-black text-slate-800">Visa Approved</span>
                <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">98% Success Ratio</span>
              </div>
            </div>

            {/* Card 3: UK (Bottom Left) */}
            <div 
              className="absolute bottom-4 left-2 md:left-4 z-20 bg-white/95 border border-slate-150 py-3 px-4 rounded-2xl shadow-md hover:scale-105 transition-transform flex items-center gap-3 select-none"
              id="hero-float-card-3"
            >
              <span className="text-2xl">🇬🇧</span>
              <div className="text-left">
                <span className="block text-xs font-black text-slate-800">Study in UK</span>
                <span className="block text-[10px] text-[#3157E6] font-bold">1-Year Masters</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION B: IMMEDIATE TRUST BANNER */}
      <section className="py-10 bg-slate-50 border-y border-slate-150 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#3157E6] mb-6 px-4">
            Connecting Pakistani Students with Elite Global Institutions
          </p>
          
          {/* Infinite marquee ticker container */}
          <UniversityLogoMarquee partners={PARTNER_UNIVERSITIES} />
        </div>
      </section>

      {/* SECTION C: 11 STUDY DESTINATIONS GRID */}
      <section className="py-10 md:py-24 relative" id="destinations-grid-section">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20">
              Explore Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              A Global Matrix of 11 Elite Academic Vectors
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-medium">
              Select your target nation to inspect custom tuition schedules, cost of living indexes, post-study work authorization visa parameters, and active scholarship slots.
            </p>
          </div>

          {/* Destinations Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS.map((dest) => (
              <div
                key={dest.id}
                onMouseEnter={() => setActiveDestinationHover(dest.id)}
                onMouseLeave={() => setActiveDestinationHover(null)}
                onClick={() => onNavigate(`destination_${dest.slug}`)}
                className="group relative bg-[#FFFFFF] border border-slate-200 rounded-3xl p-6 shadow-md hover:border-slate-350 hover:shadow-[0_12px_40px_rgba(49,87,230,0.06)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[360px]"
                id={`dest-card-home-${dest.id}`}
              >
                {/* Micro background illustration theme */}
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none bg-cover bg-center" 
                  style={{ backgroundImage: `url(${dest.imageTheme})` }}
                />

                <div>
                  {/* Flag and meta attributes header */}
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <span className="text-4xl p-2 bg-slate-50 rounded-2xl border border-slate-100 select-none">{dest.flag}</span>
                    <span className="text-[10px] bg-blue-50 text-[#3157E6] border border-blue-100 font-bold tracking-widest uppercase py-1 px-2.5 rounded-full">
                      Entry Active
                    </span>
                  </div>

                  {/* Body textuals */}
                  <div className="space-y-3 relative z-10">
                    <h3 className="text-xl font-bold group-hover:text-[#3157E6] transition-colors flex items-center gap-1.5 text-slate-900">
                      {dest.name}
                      <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Micro parameters detail segment */}
                <div className="mt-6 pt-4 border-t border-slate-150 space-y-2 relative z-10 text-xs font-semibold">
                  <div className="flex justify-between items-center text-slate-500">
                    <span>Average Tuition:</span>
                    <span className="font-extrabold text-slate-800 font-mono">{dest.tuitionRange.split(' / ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>Scholarships:</span>
                    <span className="font-bold text-amber-600">{dest.scholarshipsAvailable.split(' & ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] bg-slate-50 border border-slate-150 py-1.5 px-2.5 rounded-lg mt-2 text-slate-650 font-bold">
                    <span>PSW rights:</span>
                    <span className="font-black text-[#3157E6]">{dest.workStudyTerms.split(' + ')[1] || 'Granted'}</span>
                  </div>
                </div>

                {/* 3D border-glow stroke animation highlight on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3157E6] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* NEW SECTION 1: WHY CHOOSE RAHBAR CONSULTANTS */}
      <section className="py-10 md:py-24 bg-white relative overflow-hidden border-t border-slate-100" id="why-choose-rahbar-consultants">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#3157E6]/3 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image wrapper with stat tag */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[480px] h-[400px] md:h-[460px] rounded-[42px] border border-slate-200 overflow-hidden shadow-[0_12px_45px_rgba(0,0,0,0.06)] bg-slate-100">
                <img 
                  src={regeneratedImage}
                  alt="Confident student looking to a bright international academic future"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Stat card overlay */}
              <div 
                className="absolute bottom-2 right-2 md:-bottom-6 md:right-8 z-20 bg-white/95 border border-slate-200 p-5 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center text-center select-none w-44 font-display"
                id="stat-overlay-premium"
              >
                <span className="block text-4xl font-extrabold text-[#3157E6] tracking-tight">98%</span>
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1 block leading-tight">Approved Student Visas</span>
              </div>
            </div>

            {/* Right Column: Narrative content */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 bg-[#3157E6]/8 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/15 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Rahbar Pillar
                </span>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight text-slate-900">
                  ENGINEERING GLOBAL CAREERS THROUGH INTEGRITY
                </h2>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                  At Rahbar Consultants, we believe that international education is not just about changing universities – it's about engineering lifelong careers of global impact. Our certified student advisors combine deep professional integrity with unmatched system foresight to build transparent pathways for every ambitious student.
                </p>
              </div>

              {/* Three detailed bullet points */}
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-[#3157E6]/3 border border-[#3157E6]/8 shadow-sm hover:border-[#3157E6]/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3157E6] flex items-center justify-center shrink-0 border border-blue-100">
                    <Award className="w-5 h-5 text-[#3157E6]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">PIER Certified Registrars</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Our guidance desks are supervised by qualified, internationally recognized advisors ensuring zero documentation flaws.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-350 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-150">
                    <Users className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">Mohamed Rahbar's Vision</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Founded with the bedrock principle of absolute transparency, guiding your future with professional accountability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-350 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-150">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">98% Confirmed Visa Approvals</h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      Robust statement audits, clear asset evaluations, and high-fidelity mock interview builds secure your entry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* NEW SECTION 2: WORLD-CLASS CAMPUSES AT YOUR REACH */}
      <section className="py-10 md:py-24 bg-slate-50 border-y border-slate-150 relative" id="featured-campuses">
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-[#3157E6]/3 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20">
              Elite Academic Catalog
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              WORLD-CLASS CAMPUSES AT YOUR REACH
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Explore and filter verified tier-1 global universities offering active admission cycles. Click any institution to prefill your consultation routes instantly.
            </p>
          </div>

          {/* Interactive Filtering and Searching bar */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm mb-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              
              {/* Search input field */}
              <div className="col-span-1 md:col-span-5 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input 
                  type="text"
                  placeholder="Query university name, course, or city..."
                  value={univSearch}
                  onChange={(e) => setUnivSearch(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-11 pr-4 py-3.5 text-xs font-medium text-slate-805 focus:outline-none focus:border-[#3157E6] focus:bg-white transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Country selector filters pills */}
              <div className="col-span-1 md:col-span-7 flex flex-wrap items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {['All', 'United Kingdom', 'Australia', 'Canada', 'Malaysia', 'United Arab Emirates', 'Europe', 'Romania', 'Hungary', 'Ireland', 'South Korea', 'Japan'].map((country) => (
                  <button
                    key={country}
                    onClick={() => setSelectedCountry(country)}
                    className={`px-4 py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                      (selectedCountry === country)
                        ? 'bg-[#3157E6] text-white border-[#3157E6] shadow-sm'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border-slate-200/80 hover:border-slate-350'
                    }`}
                  >
                    {country}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* Catalog grid outputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE_UNIVERSITIES.filter(univ => {
              const matchesSearch = univ.name.toLowerCase().includes(univSearch.toLowerCase()) ||
                univ.programs.some(p => p.toLowerCase().includes(univSearch.toLowerCase())) ||
                univ.country.toLowerCase().includes(univSearch.toLowerCase());
              
              const matchesCountry = selectedCountry === 'All' || univ.country.toLowerCase() === selectedCountry.toLowerCase() ||
                (selectedCountry === 'Europe' && (univ.country === 'Europe' || univ.country === 'Hungary' || univ.country === 'Romania'));

              return matchesSearch && matchesCountry;
            }).map((univ, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-[0_12px_35px_rgba(49,87,230,0.06)] hover:border-slate-350 -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  {/* Top Line Meta features */}
                  <div className="flex justify-between items-center mb-4">
                    <span 
                      className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 py-1.5 px-3 rounded-xl text-[10.5px] font-bold text-slate-600 cursor-default select-none"
                      title={`This campus is located in ${univ.country}`}
                    >
                      <span className="text-sm">{univ.flag}</span>
                      <span>{univ.country}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 border border-emerald-150 py-1 px-2.5 rounded-full text-[9px] font-bold tracking-widest uppercase">
                      ✓ Verified Partner
                    </span>
                  </div>

                  {/* University Name */}
                  <h3 className="text-lg font-black text-slate-900 leading-snug tracking-tight mb-2 hover:text-[#3157E6] transition-colors">
                    {univ.name}
                  </h3>

                  {/* QS Global rating indicator */}
                  <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold mb-6">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>QS Ranking: <strong className="text-slate-700 font-mono font-bold">{univ.qsRank}</strong></span>
                  </div>

                  {/* Recommended Programs matrix */}
                  <div className="space-y-2 mb-6">
                    <span className="block text-[10px] uppercase font-black tracking-widest text-[#3157E6]">Recommended Programs:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {univ.programs.map((prog, pidx) => (
                        <span key={pidx} className="bg-slate-50 border border-slate-150 text-[10px] text-slate-600 px-2.5 py-1 rounded-lg font-medium">
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main quick Action to Prefill values */}
                <button
                  onClick={() => handleInquireUniversity(univ.country, `Admissions support at ${univ.name}`)}
                  className="w-full text-center py-3 bg-slate-50 border border-slate-200/80 hover:bg-[#3157E6] hover:text-white hover:border-[#3157E6] text-slate-700 text-[11px] font-black tracking-widest uppercase rounded-xl transition-all cursor-pointer"
                >
                  Inquire About Admission
                </button>
              </div>
            ))}

            {SHOWCASE_UNIVERSITIES.filter(univ => {
              const matchesSearch = univ.name.toLowerCase().includes(univSearch.toLowerCase()) ||
                univ.programs.some(p => p.toLowerCase().includes(univSearch.toLowerCase())) ||
                univ.country.toLowerCase().includes(univSearch.toLowerCase());
              
              const matchesCountry = selectedCountry === 'All' || univ.country.toLowerCase() === selectedCountry.toLowerCase() ||
                (selectedCountry === 'Europe' && (univ.country === 'Europe' || univ.country === 'Hungary' || univ.country === 'Romania'));

              return matchesSearch && matchesCountry;
            }).length === 0 && (
              <div className="col-span-full py-12 text-center bg-white border border-slate-200 rounded-3xl">
                <p className="text-slate-400 text-sm font-medium">No partner campuses match your filter. Try adjusting your query keywords.</p>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* NEW SECTION 3: SCHOLARSHIP ELIGIBILITY SECTION & EVALUATOR TOOL */}
      <section className="py-10 md:py-24 bg-white relative overflow-hidden" id="scholarships-evaluator">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#3157E6]/4 rounded-full blur-[110px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 z-10 relative animate-fade-in">
          
          {/* Header Layout identical to Screenshot structure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20 inline-block">
                Fund Your Dream
              </span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 uppercase">
                UNLOCK VALUABLE INTERNATIONAL SCHOLARSHIPS
              </h2>
              <p className="text-sm md:text-base text-slate-550 max-w-2xl font-medium text-slate-500 leading-relaxed">
                We believe exceptional talent shouldn't be blocked by financial limits. Use our customized automated diagnostics below to evaluate potential tuition waivers and regional state grant awards matching your profile instantly.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-end">
              <a 
                href="#evaluation-form-card"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('evaluation-form-card')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-[#3157E6] to-[#4E72FA] text-white text-xs font-black tracking-widest uppercase px-8 py-4 rounded-xl hover:shadow-[0_4px_15px_rgba(49,87,230,0.3)] hover:-translate-y-0.5 transition-all block text-center w-full lg:w-auto"
                id="check-scholarship-btn-anchor"
              >
                CHECK SCHOLARSHIP ELIGIBILITY
              </a>
            </div>
          </div>

          {/* Interactive Scholarship Evaluation Tool Panel */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-slate-50 border border-slate-200 rounded-[36px] p-6 md:p-10" 
            id="evaluation-form-card"
          >
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-5 bg-white border border-slate-200/80 p-6 rounded-3xl space-y-5 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <Calculator className="w-5 h-5 text-[#3157E6]" />
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Parameters Audit</h3>
              </div>

              {/* Destination selector */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Preferred Destination</label>
                <select
                  value={evalCountry}
                  onChange={(e) => setEvalCountry(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3157E6] cursor-pointer"
                >
                  <option value="United Kingdom">🇬🇧 United Kingdom (UK)</option>
                  <option value="Australia">🇦🇺 Australia</option>
                  <option value="Canada">🇨🇦 Canada</option>
                  <option value="Malaysia">🇲🇾 Malaysia</option>
                  <option value="United Arab Emirates">🇦🇪 United Arab Emirates</option>
                  <option value="Europe">🇪🇺 Europe (Schengen)</option>
                  <option value="Romania">🇷🇴 Romania</option>
                  <option value="Hungary">🇭🇺 Hungary</option>
                  <option value="Ireland">🇮🇪 Ireland</option>
                  <option value="South Korea">🇰🇷 South Korea</option>
                  <option value="Japan">🇯🇵 Japan</option>
                </select>
              </div>

              {/* Grade type toggle & input */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Academic Grade</label>
                  <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => { setEvalScoreType('cgpa'); setEvalScoreVal('3.7'); }}
                      className={`px-2 py-1 text-[9px] font-black rounded ${evalScoreType === 'cgpa' ? 'bg-white text-[#3157E6] shadow-sm' : 'text-slate-500'}`}
                    >
                      CGPA
                    </button>
                    <button
                      type="button"
                      onClick={() => { setEvalScoreType('percentage'); setEvalScoreVal('85'); }}
                      className={`px-2 py-1 text-[9px] font-black rounded ${evalScoreType === 'percentage' ? 'bg-white text-[#3157E6] shadow-sm' : 'text-slate-500'}`}
                    >
                      Marks %
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="number"
                    step={evalScoreType === 'cgpa' ? '0.1' : '1'}
                    min={evalScoreType === 'cgpa' ? '1.5' : '45'}
                    max={evalScoreType === 'cgpa' ? '4.0' : '100'}
                    value={evalScoreVal}
                    onChange={(e) => setEvalScoreVal(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-[#3157E6]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">
                    {evalScoreType === 'cgpa' ? '/ 4.0' : '% Out of 100'}
                  </span>
                </div>
              </div>

              {/* English test selectors */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">English Test</label>
                  <select
                    value={evalEnglishTest}
                    onChange={(e) => setEvalEnglishTest(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-[10.5px] font-black text-slate-800 focus:outline-none focus:border-[#3157E6] cursor-pointer"
                  >
                    <option value="IELTS (Academic)">IELTS</option>
                    <option value="PTE Academic">PTE</option>
                    <option value="TOEFL iBT">TOEFL</option>
                    <option value="Duolingo">Duolingo</option>
                    <option value="No Test Yet">No Test Yet</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Score / Band</label>
                  <input 
                    type="text"
                    disabled={evalEnglishTest === 'No Test Yet'}
                    placeholder={evalEnglishTest === 'No Test Yet' ? 'N/A' : 'e.g. 6.5'}
                    value={evalEnglishTest === 'No Test Yet' ? '' : evalEnglishScore}
                    onChange={(e) => setEvalEnglishScore(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-mono font-bold text-slate-800 focus:outline-none focus:border-[#3157E6] disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Academic Level */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">Academic Level</label>
                <select
                  value={evalLevel}
                  onChange={(e) => setEvalLevel(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#3157E6] cursor-pointer"
                >
                  <option value="Undergraduate (Bachelor's/Diploma)">Undergraduate (Bachelor / Diploma)</option>
                  <option value="Postgraduate (Master's/MBA)">Postgraduate (Master / MBA)</option>
                  <option value="Doctorate (PhD/Research)">Doctorate (PhD / Research)</option>
                </select>
              </div>

              {/* Calculate trigger */}
              <button
                type="button"
                onClick={runEvaluationDiagnostic}
                disabled={isEvaluating}
                className="w-full bg-slate-900 text-white hover:bg-[#3157E6] transition-all py-3.5 rounded-xl text-xs font-black tracking-widest uppercase cursor-pointer"
              >
                {isEvaluating ? 'AUDITING COMPLIANCE...' : 'RUN SCHOLARSHIP DIAGNOSTIC'}
              </button>
            </div>

            {/* Right Column: Diagnostic Output Results */}
            <div className="lg:col-span-7 h-full flex flex-col justify-between">
              
              {!evalDone && !isEvaluating && (
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[380px] space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3157E6]">
                    <Calculator className="w-8 h-8" />
                  </div>
                  <h4 className="text-base font-black text-slate-800 uppercase tracking-wider">Diagnostic Area Ready</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold max-w-sm">
                    Toggle your exact academic GPA, target country preferences, and English scores on the left to compute live tuition waivers.
                  </p>
                </div>
              )}

              {isEvaluating && (
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 text-center flex flex-col items-center justify-center min-h-[380px] space-y-6">
                  <div className="w-12 h-12 rounded-full border-4 border-[#3157E6]/20 border-t-[#3157E6] animate-spin" />
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">Processing Profiles...</h4>
                    <p className="text-[11px] text-[#3157E6] font-bold uppercase tracking-widest animate-pulse">Running GTE / CS Compliance Audit</p>
                  </div>
                </div>
              )}

              {evalDone && !isEvaluating && (
                <div className="space-y-6 flex flex-col justify-between h-full bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm min-h-[380px] animate-fade-in">
                  
                  {/* Results segments */}
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-[9px] text-[#3157E6] font-black uppercase tracking-widest">Diagnostic Verdict</span>
                        <h4 className="text-xl font-extrabold text-slate-900">
                          {getEvaluationResult().suitability}
                        </h4>
                      </div>
                      <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/60 font-mono font-bold text-xs py-1.5 px-4 rounded-full">
                        Score Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div className="space-y-1 bg-slate-50/75 border border-slate-150 p-4 rounded-2xl">
                        <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider">Estimated Scholarship</span>
                        <span className="block text-sm font-black text-[#3157E6]">
                          {getEvaluationResult().eligibility}
                        </span>
                      </div>
                      
                      <div className="space-y-1 bg-slate-50/75 border border-slate-150 p-4 rounded-2xl">
                        <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider">Scholarship Range</span>
                        <span className="block text-sm font-bold text-slate-850 font-mono">
                          {getEvaluationResult().range}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1 text-left">
                      <span className="block text-[10px] text-slate-400 uppercase font-black tracking-wider">Details & Recommendations</span>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {getEvaluationResult().details}
                      </p>
                    </div>

                    {/* Target Universities matching the evaluation */}
                    <div className="space-y-2 text-left">
                      <span className="block text-[10px] text-[#3157E6] uppercase font-black tracking-widest">Recommended Institutions:</span>
                      <div className="flex flex-wrap gap-2">
                        {getEvaluationResult().targetUnis.map((uni, index) => (
                          <div 
                            key={index}
                            onClick={() => handleInquireUniversity(uni.country, `Admissions at ${uni.name} with scholarship`)}
                            className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 cursor-pointer hover:border-slate-350 transition-all"
                          >
                            <span>{uni.flag}</span>
                            <span>{uni.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions to proceed */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PRE-CLASSIFICATION ID: RC-{Math.floor(1000 + Math.random() * 9000)}</p>
                    <button
                      onClick={() => handleInquireUniversity(evalCountry, `Scholarship Inquiry (${getEvaluationResult().eligibility}) Grade: ${evalScoreVal} ${evalScoreType.toUpperCase()}`)}
                      className="w-full sm:w-auto bg-[#3157E6] hover:bg-[#3157E6] text-white text-[11px] font-black tracking-widest uppercase px-6 py-3 rounded-xl transition-all cursor-pointer shadow-sm shadow-[#3157E6]/10"
                    >
                      Apply For This Scholarship
                    </button>
                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </section>


      {/* SECTION D: WHY CHOOSE RAHBAR SYSTEM */}
      <section className="py-10 md:py-24 bg-slate-50 border-y border-slate-200 relative" id="why-choose-us-section">
        {/* Glow decorative spot */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3157E6]/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="bg-amber-400/10 text-amber-700 text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-amber-400/20">
              Why Rahbar Consultants
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              We Standardize Academic Success
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-semibold">
              With deep structural foresight and certified advisors, our processing desks manage your entire application cycle seamlessly.
            </p>
          </div>

          {/* 6-Grid Counseling Service matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_PILLARS.map((srv) => (
              <div 
                key={srv.id}
                className="bg-white border border-slate-200 p-6 rounded-3xl transition-all group shadow-sm hover:border-slate-300 hover:shadow-md"
                id={`service-pillar-${srv.id}`}
              >
                {/* Custom circular wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#3157E6] border border-blue-100 flex items-center justify-center mb-6 group-hover:bg-[#3157E6] group-hover:text-white group-hover:scale-105 transition-all">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-black text-slate-900 mb-2 leading-tight">
                  {srv.title}
                </h3>
                
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION E: PROCESS TIMELINE MATRIX */}
      <section className="py-10 md:py-24 relative" id="process-timeline-section">
        <div className="max-w-7xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20">
              Methodology Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Chronological 6-Step Study Abroad Journey
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              From your initial profile assessment to pre-departure briefs, our Lahore team supervises every crucial milestone.
            </p>
          </div>

          {/* Horizontal animated timeline process cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            
            {/* Horizontal connection line for desktop */}
            <div className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 z-0 pointer-events-none" />

            {PROCESS_STEPS.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 p-5 rounded-2xl relative z-10 flex flex-col justify-between transition-all hover:scale-[1.02] hover:border-slate-300 shadow-sm hover:shadow-md"
                id={`timeline-step-${step.step}`}
              >
                <div>
                  {/* Step counter badge */}
                  <span className="inline-flex w-10 h-10 rounded-full bg-slate-50 border-2 border-[#3157E6] text-slate-800 text-xs font-black items-center justify-center mb-4 shadow-sm">
                    {step.step}
                  </span>
                  
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    {step.title}
                  </h4>
                  
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION E_SUB_1: SUCCESS STORIES / ALUMNI TRUST DECK */}
      <section className="py-10 md:py-24 bg-slate-50 border-t border-slate-200 relative" id="success-stories-section">
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-[#3157E6]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20 inline-block">
              Cadet Vouching Index
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Pristine Success Stories by Qualified Cadets
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-semibold">
              Real admissions outcomes from Lahore's top global counseling desks. Watch student diaries and view verified permit times.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Column: High-Res Interactive Video Testimonial Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="group relative w-full h-[320px] md:h-[420px] rounded-[36px] border border-slate-200 overflow-hidden shadow-lg bg-slate-950 flex flex-col justify-end">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
                  alt="Zainab Fatima sharing her success diary on campus"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-85 group-hover:scale-[1.03] transition-transform duration-700 font-medium"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent pointer-events-none" />
                
                {/* Floating "Visa Approved" badge */}
                <div className="absolute top-5 left-5 z-20 bg-emerald-500/90 text-white font-mono font-bold text-[10px] tracking-widest uppercase py-2 px-4 rounded-full flex items-center gap-2 border border-emerald-400 backdrop-blur-sm shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white block animate-ping" />
                  <span>✓ VISA APPROVED</span>
                </div>

                {/* Video Duration / Metadata badge */}
                <div className="absolute top-5 right-5 z-20 bg-slate-900/80 text-slate-300 font-mono text-[9px] py-1.5 px-3 rounded-lg border border-slate-700/60 font-semibold select-none">
                  RC DISPATCH • 2:30 MINS
                </div>

                {/* Pulsing Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => {
                      setActiveVideoStory({
                        studentName: 'Zainab Fatima',
                        targetCountry: 'United Kingdom (UK)',
                        universityAdmitted: 'University of Hertfordshire',
                        program: 'M.Sc. in Data Science',
                        testimony: 'Rahbar Consultants managed my complete application seamlessly. My academic gap of 4 years was audited, personal statements optimized, and scholarship discounts secured without a single documentation delay. Their credibility interview prep was 100% essential to passing!',
                        videoTitle: 'Hertfordshire Admissions Diary'
                      });
                      setIsPlayingVideo(true);
                      setIsMockPlaying(true);
                      setMockProgress(20);
                    }}
                    className="w-20 h-20 rounded-full bg-white/95 hover:bg-white text-[#3157E6] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer group/btn"
                    title="Play cadet success video"
                    id="play-cadet-button"
                  >
                    <Play className="w-8 h-8 fill-[#3157E6] text-[#3157E6] translate-x-0.5" />
                  </button>
                </div>

                {/* Info Overlay at Bottom */}
                <div className="p-6 relative z-10 text-white space-y-1">
                  <span className="block text-[10px] uppercase font-black tracking-widest text-[#3157E6]">Featured Admissions Dispatch</span>
                  <p className="text-xl font-black leading-tight">Zainab Fatima (Lahore to United Kingdom)</p>
                  <p className="text-xs text-slate-350 font-semibold">Undergraduate Lead at Hertfordshire • M.Sc Data Science</p>
                </div>
              </div>
            </div>

            {/* Right Column: High contrast Cadet Testimonials Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {SUCCESS_STORIES.map((story) => (
                <div 
                  key={story.id} 
                  className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
                  id={`cadet-card-id-${story.id}`}
                >
                  <div className="space-y-4">
                    
                    {/* Header: Student avatar and metadata tags */}
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <img 
                          src={story.avatarUrl} 
                          alt={story.studentName} 
                          className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="text-xs font-black text-slate-900 leading-tight">{story.studentName}</h4>
                          <span className="text-[9.5px] text-slate-400 font-mono font-bold block">{story.fromCity} ➔ {story.targetCountry}</span>
                        </div>
                      </div>
                      <span className="bg-emerald-50 text-emerald-800 border border-emerald-200/60 py-0.5 px-2 rounded-full text-[8px] font-black tracking-wider uppercase select-none shrink-0">
                        {story.visaStatus === 'Approved' ? '✓ APPROVED' : story.visaStatus}
                      </span>
                    </div>

                    {/* Testimony text blockquote */}
                    <p className="text-xs text-slate-550 leading-relaxed font-semibold italic">
                      "{story.testimony}"
                    </p>
                  </div>

                  {/* Program stats info rows */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2">
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 font-semibold">Admitted at:</span>
                      <span className="font-extrabold text-slate-800 line-clamp-1 truncate max-w-[125px]">{story.universityAdmitted}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px]">
                      <span className="text-slate-400 font-semibold">Test Score / GPA:</span>
                      <span className="font-mono font-bold text-slate-700">{story.testScoreMetric}</span>
                    </div>
                    
                    {/* Trigger to load Video modal transcript */}
                    <button
                      onClick={() => {
                        setActiveVideoStory({
                          studentName: story.studentName,
                          targetCountry: story.targetCountry,
                          universityAdmitted: story.universityAdmitted,
                          program: story.program,
                          testimony: story.testimony,
                          videoTitle: `${story.studentName}'s Admissions Transcript`
                        });
                        setIsPlayingVideo(true);
                        setIsMockPlaying(true);
                        setMockProgress(30);
                      }}
                      className="text-left text-[9.5px] text-[#3157E6] hover:text-[#3157E6] font-black uppercase tracking-widest pt-2 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      Open Verified Path Log
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION E_SUB_2: STUDENT INSIGHTS & VISA COMPLIANCE PORTAL */}
      <section className="py-10 md:py-24 bg-white border-t border-slate-200 relative" id="insights-compliance-portal">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20 inline-block">
              Intel Registry & Maps
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase animate-fade-in">
              Student Insights & Visa Compliance Portal
            </h2>
            <p className="text-sm md:text-base text-slate-500 font-semibold">
              Get peerless administrative updates curated directly by our regulatory scanning desks in Model Town, Lahore.
            </p>
          </div>

          {/* Filters Category Tabs Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {['All', 'Admissions', 'Visas', 'Scholarships', 'Student Life'].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setInsightsCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all cursor-pointer border ${
                  insightsCategory === category
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-650 border-slate-200 hover:border-slate-350'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout of Featured Compliance Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INSIGHTS_POSTS.filter((post) => insightsCategory === 'All' || post.category === insightsCategory).map((post) => (
              <article 
                key={post.id}
                className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-sm hover:shadow-lg hover:border-slate-300 group flex flex-col justify-between -translate-y-0 hover:-translate-y-1.5 transition-all duration-300 min-h-[460px]"
                id={`article-card-${post.id}`}
              >
                <div>
                  {/* Aspect Ratio Cover Photo */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden border-b border-slate-150">
                    <img 
                      src={post.imgUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 font-medium"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Category Label Overlay */}
                    <span className="absolute bottom-4 left-4 bg-white text-slate-900 font-mono font-black text-[9px] tracking-wider uppercase py-1 px-3 rounded-lg shadow-sm border border-slate-100 select-none">
                      {post.category}
                    </span>
                  </div>

                  {/* Metadata Indicators bar */}
                  <div className="px-6 pt-6 pb-2 flex items-center gap-3 text-slate-400 font-mono text-[9.5px] uppercase font-bold select-none">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="px-6 py-2 space-y-2">
                    <h3 className="text-sm md:text-base font-extrabold text-slate-900 leading-snug group-hover:text-[#3157E6] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-505 leading-relaxed font-semibold line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Action footer and callback */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-[9.5px] text-slate-400 font-black uppercase tracking-wider font-mono">
                    EDIT: {post.author}
                  </span>
                  <button
                    onClick={() => handleInquireUniversity('United Kingdom', `Insight callback from portal: ${post.title}`)}
                    className="inline-flex items-center gap-1 text-xs text-[#3157E6] hover:text-[#3157E6] font-black uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </article>
            ))}

            {INSIGHTS_POSTS.filter((post) => insightsCategory === 'All' || post.category === insightsCategory).length === 0 && (
              <div className="col-span-full py-16 text-center bg-slate-50 border border-slate-200 rounded-3xl">
                <p className="text-slate-400 text-sm font-semibold">No publications matching this section right now.</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* SECTION E_SUB_3: FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="py-10 md:py-24 bg-slate-50 border-t border-slate-200 relative" id="faq-accordions-portal">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#3157E6]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 z-10 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="bg-[#3157E6]/10 text-[#3157E6] text-xs font-black tracking-widest uppercase py-1.5 px-4 rounded-full border border-[#3157E6]/20 inline-block">
              Lahore Desk counseling base
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Instant strategic clarifications for parents and ambitious university applicants. Choose a topic segment.
            </p>
          </div>

          {/* FAQ Segment Filter Row */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 select-none">
            {['General', 'Admissions', 'Visas', 'Scholarships'].map((segment) => (
              <button
                key={segment}
                type="button"
                onClick={() => { setFaqCategory(segment); setOpenFaqIndex(null); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border ${
                  faqCategory === segment
                    ? 'bg-[#3157E6] text-white border-[#3157E6] shadow-sm'
                    : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-350'
                }`}
              >
                {segment} FAQS
              </button>
            ))}
          </div>

          {/* Accordion List with expand support */}
          <div className="space-y-4">
            {FAQ_ITEMS.filter((item) => item.category === faqCategory).map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-3xl overflow-hidden transition-all shadow-sm hover:border-slate-300"
                  id={`faq-bar-${idx}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 focus:outline-none transition-all cursor-pointer hover:bg-slate-50/40"
                  >
                    <span className="font-extrabold text-[#111827] text-sm md:text-base leading-snug">
                      {item.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-slate-150 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#3157E6]/10 border-[#3157E6]/20 text-[#3157E6]' : ''}`}>
                      {isOpen ? <Minus className="w-4 h-4 text-[#3157E6]" /> : <Plus className="w-4 h-4 text-slate-500" />}
                    </span>
                  </button>

                  {/* Expandable Panel using motion layout */}
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-xs md:text-sm text-slate-501 leading-relaxed font-semibold border-t border-slate-100 pt-4 bg-slate-50/20">
                      {item.answer}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* HIGH FIDELITY DISPATCH TRANSMISSION COMPLIANT VIDEO SIMULATOR */}
      {isPlayingVideo && activeVideoStory && (
        <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-[99999] flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl flex flex-col relative animate-fade-in">
            
            {/* Header Area */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-[10px] font-mono uppercase font-black tracking-widest text-[#3157E6] select-none">
                  SECURE OUTCOME VIDEO FEED
                </span>
              </div>
              <button 
                onClick={() => {
                  setIsPlayingVideo(false);
                  setIsMockPlaying(false);
                  setActiveVideoStory(null);
                }}
                className="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors cursor-pointer font-bold text-center"
                title="Exit video playback stream"
                id="close-playback-modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Container frame */}
            <div className="relative aspect-video w-full bg-slate-950 flex flex-col justify-end">
              
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover absolute inset-0 opacity-20 pointer-events-none" 
                  alt="High-fidelity background campus footage"
                  referrerPolicy="no-referrer"
                />
                
                <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                  {isMockPlaying ? (
                    <div className="w-16 h-16 rounded-full bg-[#3157E6] flex items-center justify-center text-white scale-110 shadow-2xl animate-pulse">
                      <Clock className="w-8 h-8 text-white animate-spin" />
                    </div>
                  ) : (
                    <button 
                      onClick={() => setIsMockPlaying(true)}
                      className="w-16 h-16 rounded-full bg-white text-[#3157E6] flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                      title="Continue playback"
                    >
                      <Play className="w-8 h-8 fill-[#3157E6] text-[#3157E6] translate-x-0.5" />
                    </button>
                  )}
                  <span className="text-[11px] text-slate-100 font-mono font-bold px-4 py-1.5 bg-slate-900/80 rounded-full border border-slate-700/60 shadow-md backdrop-blur-sm select-none">
                    {isMockPlaying ? `DECODING CADET ENVIORNS: ${mockProgress}%` : "DISPATCH PAUSED • CLICK PLAY"}
                  </span>
                </div>
              </div>

              {/* Progress Tracker Slider bottom line */}
              <div className="relative z-20 px-4 pb-2">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                  <div 
                    className="h-full bg-[#3157E6] transition-all" 
                    style={{ width: `${mockProgress}%` }}
                  />
                </div>
              </div>

              {/* Controls bar */}
              <div className="relative z-20 px-6 py-4 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-center justify-between text-white border-t border-slate-900">
                <div className="flex items-center gap-4 text-xs font-semibold">
                  <button 
                    onClick={() => setIsMockPlaying(!isMockPlaying)}
                    className="hover:text-[#4E72FA] transition-colors cursor-pointer font-bold text-xs"
                  >
                    {isMockPlaying ? "Pause Track" : "Resume Track"}
                  </button>
                  <span className="text-xs text-slate-450 font-mono font-black">
                    0:{Math.floor(mockProgress * 1.5).toString().padStart(2, '0')} / 2:30
                  </span>
                </div>
                <div className="text-[10px] text-slate-400 font-mono tracking-widest select-none uppercase font-bold">
                  ✓ MOUNTED DIRECT RECRUITS
                </div>
              </div>

            </div>

            {/* Transcript detail area */}
            <div className="p-6 space-y-4 bg-white text-left">
              <div>
                <span className="text-[10px] text-[#3157E6] uppercase font-black tracking-widest font-mono block">Vetted Case Transcripts</span>
                <h4 className="text-lg font-black text-slate-900 mt-1 leading-tight">
                  {activeVideoStory.studentName} — Study Permit Success Diary
                </h4>
                <p className="text-xs text-slate-450 font-bold">{activeVideoStory.program} • {activeVideoStory.universityAdmitted}</p>
              </div>
              
              <p className="text-xs text-slate-550 leading-relaxed font-semibold italic border-l-2 border-[#3157E6]/30 pl-4 py-1.5">
                "{activeVideoStory.testimony}"
              </p>

              <div className="pt-4 flex items-center justify-between gap-4 border-t border-slate-100">
                <p className="text-[10px] text-slate-400 font-bold tracking-wider font-mono uppercase select-none">DISPATCH: RC-CADET-{activeVideoStory.studentName.toUpperCase()}</p>
                <button
                  onClick={() => {
                    handleInquireUniversity(activeVideoStory.targetCountry, `Wants to verify admit process of ${activeVideoStory.studentName}`);
                    setIsPlayingVideo(false);
                    setIsMockPlaying(false);
                    setActiveVideoStory(null);
                  }}
                  className="bg-[#3157E6] hover:bg-[#3157E6] text-white text-[10.5px] font-black tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Verify Admission Course
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* SECTION F: CONVERSIVE BANNER & LEAD GENERATOR */}
      <section className="py-20 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#3157E6] px-2.5 py-1 rounded-full text-xs font-bold border border-blue-100 shadow-sm">
                <Award className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                <span>Merit Scholarships Available</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Empower your future with a prestigious Global Qualification.
              </h2>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                Our consultancy services are 100% focused on reducing academic cost overheads via direct merit waivers. High score applicants can claim up to 50% tuition reductions at selected partner branches.
              </p>

              {/* Informative credentials */}
              <div className="space-y-4 pt-2">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-800">Accredited Counselors:</strong> Evaluated parameters match university rules.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-800">Secure Bank Audits:</strong> We supervise financial statement framing guidelines.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-xs text-slate-600 font-medium">
                    <strong className="text-slate-800">Intensive Interview Prep:</strong> Direct mock sessions prevent credibility check faults.
                  </p>
                </div>
              </div>

              {/* Specific Location callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 flex items-center justify-between shadow-sm">
                <span className="font-medium">📍 Model Town, Lahore HQ Office</span>
                <span className="font-bold text-[#3157E6]">Open Mon – Sat (10am - 6pm)</span>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <LeadForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
