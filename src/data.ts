import { Destination, Scholarship, SuccessStory } from './types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'uk',
    name: 'United Kingdom (UK)',
    slug: 'uk',
    flag: '🇬🇧',
    tuitionRange: '£12,000 – £22,000 / year',
    livingCostRange: '£9,000 – £12,000 / year',
    scholarshipsAvailable: '£1,000 – £5,000 Merit Scholarships & Chevening',
    workStudyTerms: '20 Hours/week during study + 2-Year Graduate Route (PSW)',
    tagline: 'World-Class Tradition and Accelerated Pathways to Global Recognition.',
    imageTheme: 'https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'The United Kingdom hosts a legendary cohort of historical and contemporary universities. With fast-track degree tracks (3-year Bachelor, 1-year Master), it offers unmatched financial and time efficiencies for ambitious international students.',
    coreAdvantages: [
      'Accelerated degrees reducing boarding and educational cost overheads by 12 months.',
      'Generous 2-Year Post-Study Work Visa (PSW / Graduate Route) to launch global careers.',
      'No strict IELTS requirements for selected English-medium undergraduate pathways.',
      'Unmatched research infrastructure with global recognition across all professional disciplines.'
    ],
    averageTuitionTable: [
      { program: 'Undergraduate Humanities/Arts', cost: '£12,000 – £15,000 / year' },
      { program: 'Undergraduate Science/Engineering', cost: '£14,500 – £19,000 / year' },
      { program: 'Postgraduate MBA / Business Management', cost: '£13,000 – £22,000 / year' },
      { program: 'Clinical & Laboratory Sciences', cost: '£18,000 – £25,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Off-Campus Accommodation (Monthly)', cost: '£450 – £750' },
      { item: 'Local Public Transit Card (Monthly)', cost: '£65 – £110' },
      { item: 'Supermarket Groceries & Meals (Monthly)', cost: '£200 – £300' },
      { item: 'Broadband, Mobile & Utilities (Monthly)', cost: '£80 – £130' }
    ],
    postStudyParameters: 'Upon graduation, students become eligible for the 2-year Graduate Visa (3 years for PhD holders). This route allows full-time employment anywhere in the country without requiring any sponsor thresholds.',
    topAcademicUnits: ['University of Hertfordshire', 'Coventry University', 'BPP University', 'University of Bedfordshire', 'Leeds Beckett University'],
    faqs: [
      {
        question: 'Can I study in the UK without IELTS?',
        answer: 'Yes, selected universities offer IELTS waivers if you have achieved high marks (usually 70%+) in English in your intermediate/HSSC examinations or holding an O-Level certificate.'
      },
      {
        question: 'How long does the UK academic visa process take?',
        answer: 'Once your CAS (Confirmation of Acceptance for Studies) is issued, standard priority visa processing takes 15 business days, while super-priority options are completed in 24 hours.'
      }
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    slug: 'australia',
    flag: '🇦🇺',
    tuitionRange: 'A$22,000 – A$45,000 / year',
    livingCostRange: 'A$21,041 – A$25,000 / year',
    scholarshipsAvailable: 'Destination Australia Scholar & Up to 30% Tuition Waivers',
    workStudyTerms: '48 Hours per fortnight + 2 to 4 Years Post-Study Work Visa',
    tagline: 'Superior Academic Standards Combined with Unrivaled Post-Graduate Quality of Life.',
    imageTheme: 'https://images.unsplash.com/photo-1523482596113-f90aa40cf6d4?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Australia is premier for technology, healthcare, and engineering. Sporting top Group of Eight and progressive modern universities, students navigate secure professional career tracks on the warm Pacific coast.',
    coreAdvantages: [
      'Incredibly high quality of life with strong minimum wage settings for part-time student roles.',
      'Flexible graduate visas ranging from 2 to 4 years based on campus regionality policies.',
      'Rigorous educational frameworks regulated directly by safe national oversight (TEQSA).',
      'Pristine pathways for engineering, digital computing, nursing, and business finance graduates.'
    ],
    averageTuitionTable: [
      { program: 'Bachelor of Information Technology', cost: 'A$22,500 – A$32,000 / year' },
      { program: 'Bachelor of Engineering / Nursing', cost: 'A$25,000 – A$36,000 / year' },
      { program: 'Master of Business Administration (MBA)', cost: 'A$28,000 – A$42,000 / year' },
      { program: 'Vocational Education Codes (VET Courses)', cost: 'A$8,000 – A$14,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Shared Student Boarding House (Monthly)', cost: 'A$600 – A$950' },
      { item: 'Urban Travel Pass / Train Concession (Monthly)', cost: 'A$90 – A$140' },
      { item: 'Essential Nutrition & Cooking (Monthly)', cost: 'A$300 – A$450' },
      { item: 'Phone & High-Speed Mobile Data Plan', cost: 'A$40 – A$65' }
    ],
    postStudyParameters: 'The Temporary Graduate visa (subclass 485) grants students the ability to work after graduation. Regional campus locations afford students an additional year of visa validity to support structural migration.',
    topAcademicUnits: ['Swinburne University', 'Victoria University', 'Deakin University', 'University of Southern Queensland', 'Torrens University'],
    faqs: [
      {
        question: 'What is the Genuine Student (GS) requirement for Australia?',
        answer: 'The GS requirement replaced the GTE. It evaluates your background, career relevance, financial position, and future intentions to confirm you are a high-quality applicant focused strictly on educational success.'
      },
      {
        question: 'Are there scholarship supports for high-scoring applicants?',
        answer: 'Yes! Australian state partners and universities provide extensive merit-based waivers of 15% to 30% off standard international tuition for qualifying applications.'
      }
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    slug: 'canada',
    flag: '🇨🇦',
    tuitionRange: 'C$15,000 – C$32,000 / year',
    livingCostRange: 'C$20,635 – C$24,000 / year',
    scholarshipsAvailable: 'Entrance Scholar Awards & Province Excellence Bursaries',
    workStudyTerms: 'Off-campus student work provisions + Express Entry (PGWP) tracks',
    tagline: 'World-Leading Public Institutions with Secure PR Pathways and Tech Hubs.',
    imageTheme: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Canada offers exceptional public education institutions, known for safety, dynamic multi-cultural urban centers, and PGWP (Post-Graduation Work Permit) schemas that secure careers in vibrant tech corridors.',
    coreAdvantages: [
      'Eligibility for highly secure Post-Graduation Work Permit (PGWP) supporting settlement.',
      'Highly subsidized world-class public applied science instutitions and polytechnics.',
      'Pathways specifically suited for computer engineers, health practitioners, and logistics professionals.',
      'Beautiful natural geography integrated with high-tech metropolitan regions.'
    ],
    averageTuitionTable: [
      { program: 'Provincial College Diploma', cost: 'C$14,500 – C$18,000 / year' },
      { program: 'University Bachelor degree', cost: 'C$18,000 – C$28,500 / year' },
      { program: 'Master of Science (M.Sc) / Data Analytics', cost: 'C$20,000 – C$32,000 / year' },
      { program: 'Post-Graduate Management Diploma', cost: 'C$16,000 – C$21,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Apartment Sublease (Outside Core - Monthly)', cost: 'C$750 – C$1,200' },
      { item: 'Regional Bus/Subway Transit Pass', cost: 'C$90 – C$135' },
      { item: 'Grocery & Nutrition Cart (Monthly)', cost: 'C$250 – C$380' },
      { item: 'Heating, Electricity & WiFi', cost: 'C$120 – C$190' }
    ],
    postStudyParameters: 'Graduate Permits (PGWP) are directly aligned with educational program lengths, offering 1 to 3 years of unrestricted workspace integration supporting future Provincial Nominee Program (PNP) structures.',
    topAcademicUnits: ['Innis College / U of T', 'Seneca Polytechnic', 'Conestoga College', 'Cape Breton University', 'University of Winnipeg'],
    faqs: [
      {
        question: 'What is the GIC requirement for Canadian study permits?',
        answer: 'Applicants must purchase a Guaranteed Investment Certificate (GIC) of C$20,635 from a participating Canadian financial entity to confirm adequate living support.'
      },
      {
        question: 'Can I bring my spouse to Canada?',
        answer: 'Under the latest structural changes, spouses of Master’s and Doctoral program candidates are typically eligible to apply for open work permits during their study term.'
      }
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    slug: 'malaysia',
    flag: '🇲🇾',
    tuitionRange: 'RM 12,000 – RM 28,000 / year',
    livingCostRange: 'RM 1,500 – RM 2,500 / month',
    scholarshipsAvailable: 'Global Leader Talent Grants & Up to 40% Merit Waivers',
    workStudyTerms: 'Part-time working allowed during holidays + 20-hour limits',
    tagline: 'World-Class Skyline, English-Taught UK/US Dual Degrees, Minimal Expenses.',
    imageTheme: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Malaysia marries highly innovative, futuristic metropolitan centers with world-class global campuses. Offering official branches from leading UK and Australian universities (e.g. Monash, Heriot-Watt), students obtain prestigious Western qualifications at a fraction of standard costs in beautiful Southeast Asia.',
    coreAdvantages: [
      'Dual Degree Programs: Graduate with certificates validated directly in the UK, USA, or Australia.',
      'Kuala Lumpur’s low cost of living partnered with absolute safety and multi-ethnic community settings.',
      'Direct, fast-track visa processing through the unified Education Malaysia Global Services (EMGS) portal.',
      'Superb infrastructure with direct connections to other fast-growing ASEAN tech markets.'
    ],
    averageTuitionTable: [
      { program: 'Business & Digital Marketing Degree', cost: 'RM 14,000 – RM 22,000 / year' },
      { program: 'Computer Engineering & Coding Hubs', cost: 'RM 18,000 – RM 26,000 / year' },
      { program: 'Doctorate / Postgraduate Research PhD', cost: 'RM 11,000 – RM 19,000 / year' },
      { program: 'Global UK Branch Degree (Monash/Nottingham)', cost: 'RM 32,000 – RM 45,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Luxury High-Rise Condo Room (Monthly)', cost: 'RM 600 – RM 1,200' },
      { item: 'RapidKL Rail & Bus Monthly Concession', cost: 'RM 50 – RM 100' },
      { item: 'Street Foods & Restaurant Meals (Monthly)', cost: 'RM RM 450 – RM 750' },
      { item: 'High-Speed Fiber Internet & Aircon Power', cost: 'RM 150 – RM RM 250' }
    ],
    postStudyParameters: 'Graduates can access specialized local work permits or seamlessly transition to headquarters in UK, Australia, or USA via structural university transfer schemes without additional financial stress.',
    topAcademicUnits: ['Taylor’s University', 'APU (Asia Pacific University)', 'Sunway University', 'UCSI University', 'Monash University Malaysia'],
    faqs: [
      {
        question: 'Are programs in Malaysia taught in English?',
        answer: 'Yes! All international courses at the major universities are presented entirely in English. You can study in an incredibly modern, diverse environment with full English instructions.'
      },
      {
        question: 'What is the visa approval rate through Rahbar Consultants?',
        answer: 'Through our careful evaluation and professional assembly via EMGS, we enjoy a 99% visa success rate for qualified students aiming for Malaysian campuses.'
      }
    ]
  },
  {
    id: 'uae',
    name: 'United Arab Emirates (UAE)',
    slug: 'uae',
    flag: '🇦🇪',
    tuitionRange: 'AED 35,000 – AED 75,000 / year',
    livingCostRange: 'AED 3,000 – AED 5,500 / month',
    scholarshipsAvailable: '20% to 50% Academic Excellence & Leadership Scholarships',
    workStudyTerms: 'Legalized part-time internships in Dubai Internet City / Dubai Design District',
    tagline: 'Futuristic Commercial Ecosystems and World-Renowned University Branches.',
    imageTheme: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'The UAE is a global financial power. Offering dynamic modern university formats, Dubai Knowledge Park gathers high-ranking campuses from Heriot-Watt, Wollongong, and Middlesex, launching direct corporate pathways.',
    coreAdvantages: [
      'Incredible regional safety, political stability, and high-tech urban environments.',
      'Direct structural connections to dynamic tech scaleups, banking, and real-estate enterprises.',
      'Flexible Golden Visas for high-achieving undergraduate and postgraduate students.',
      'Instant access to multi-national workplace cultures speaking globally standard business languages.'
    ],
    averageTuitionTable: [
      { program: 'Business Management & Finance (Dubai Node)', cost: 'AED 35,000 – AED 52,000 / year' },
      { program: 'AI & Data Science engineering Degrees', cost: 'AED 45,000 – AED 65,000 / year' },
      { program: 'Media, Communication & Design Focuses', cost: 'AED 38,000 – AED 55,000 / year' },
      { program: 'Postgraduate MBA Credentials', cost: 'AED 50,000 – AED 85,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Co-Living Student Apartment (Monthly)', cost: 'AED 1,500 – AED 2,500' },
      { item: 'Dubai Metro Travel Pass (Silver NL Card)', cost: 'AED 200 – AED 350' },
      { item: 'Urban Dining, Groceries & Delivery', cost: 'AED 1,000 – AED 1,500' },
      { item: 'Mobile Internet, Water, Power & Chiller', cost: 'AED 400 – AED 700' }
    ],
    postStudyParameters: 'The UAE permits graduates to remain on student visa sponsorships or shift instantly to Corporate Sponsor structures. Creative and technological hubs in Dubai offer fast-track visa conversions.',
    topAcademicUnits: ['Heriot-Watt University Dubai', 'University of Wollongong in Dubai', 'Amity University Dubai', 'Middlesex University Dubai', 'Rochester Institute of Tech (RIT)'],
    faqs: [
      {
        question: 'Do UAE branch campuses issue standard academic degrees?',
        answer: 'Absolutely. Graduates receive the identical degree certificate from the parent institution (e.g. UK or Australia) without any physical regional tags, recognized globally.'
      },
      {
        question: 'Can I work while studying in Dubai?',
        answer: 'Yes, international students are permitted to engage in official part-time jobs and corporate internships after securing a recommendation from their university.'
      }
    ]
  },
  {
    id: 'europe',
    name: 'Europe (Schengen)',
    slug: 'europe',
    flag: '🇪🇺',
    tuitionRange: '€1,500 – €4,500 / year (Schengen Public)',
    livingCostRange: '€600 – €900 / month',
    scholarshipsAvailable: 'Erasmus Mundus, Government Fully-Funded Seats',
    workStudyTerms: '20 Hours/week legal work with full Schengen border access',
    tagline: 'Borderless Travel, Historic Quality of Education, and Extremely Safe.',
    imageTheme: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Schengen Europe provides high education standards, very affordable rates, and free structural travel across 29 partner European nations. Offering extensive pathways, students master critical careers in a culturally rich atmosphere.',
    coreAdvantages: [
      'Extremely affordable tuition models, often backed by national government subsidies.',
      'Schengen Border-Free Travel: Complete access to explore and work across major European markets.',
      'Outstanding technical focus across top German, French, Italian, and Polish campuses.',
      'Generous Post-Study Job Seeker Visa extensions upon university graduation.'
    ],
    averageTuitionTable: [
      { program: 'Public University Bachelor (Schengen)', cost: '€1,000 – €3,000 / year' },
      { program: 'English-Taught Master of Engineering', cost: '€1,500 – €4,500 / year' },
      { program: 'Business, MBA & Management Tracks', cost: '€2,000 – €6,000 / year' },
      { program: 'PhD Positions (Fully Funded / Salary)', cost: '€0 / Fully Funded' }
    ],
    livingCostIndex: [
      { item: 'Shared Flat Room Rent (Monthly)', cost: '€250 – €450' },
      { item: 'Schengen Student Transit Pass (Monthly)', cost: '€30 – €60' },
      { item: 'Local Bakeries & Grocery Markets', cost: '€180 – €280' },
      { item: 'Health Insurance Plan (Compulsory)', cost: '€40 – €90' }
    ],
    postStudyParameters: 'Most Schengen student permits extend by 12 to 18 months upon graduation, permitting students to secure local corporate roles and convert to permanent residence.',
    topAcademicUnits: ['Charles University', 'Warsaw University of Tech', 'La Sapienza Rome', 'University of Pécs', 'Politecnico di Milano'],
    faqs: [
      {
        question: 'Are European degrees fully taught in English?',
        answer: 'Yes! Thousands of specialized Bachelor’s and Master’s programs across Europe are taught entirely in English, particularly in sciences, technology, and administration.'
      },
      {
        question: 'Do I need a blocked account?',
        answer: 'Selected Schengen countries require showing a local bank balance or blocked account to prove living support, but others accept simple bank statements from home.'
      }
    ]
  },
  {
    id: 'romania',
    name: 'Romania',
    slug: 'romania',
    flag: '🇷🇴',
    tuitionRange: '€2,000 – €5,000 / year',
    livingCostRange: '€400 – €600 / month',
    scholarshipsAvailable: 'Waivers for High-Achieving Non-EU Applicants',
    workStudyTerms: '4 Hours/day direct work allowance without active permit requirements',
    tagline: 'Affordable Premium European Infrastructure and High Visa Success Rates.',
    imageTheme: 'https://images.unsplash.com/photo-1549880181-56a44cf8a4a1?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Romania offers affordable access to European university standards. Celebrated for high-speed internet, engineering excellence, and medically focused courses, students receive full European Union diplomas with high visa success.',
    coreAdvantages: [
      'Very affordable premium European tertiary infrastructure and boarding accommodations.',
      'Direct, high-yield European degree certification recognized by the WHO, EUA, and COA.',
      'Extremely high student study visa approvals with simpler document verification matrices.',
      'Superb digital infrastructure with top-tier gigabit internet speeds for young programmers.'
    ],
    averageTuitionTable: [
      { program: 'General Medicine / Laboratory Science MD', cost: '€4,000 – €6,000 / year' },
      { program: 'Software Engineering & Computing B.Sc', cost: '€2,200 – €3,500 / year' },
      { program: 'Economics, Accounting & Management', cost: '€2,000 – €3,000 / year' },
      { program: 'Civil / Electrical Engineering', cost: '€2,400 – €3,800 / year' }
    ],
    livingCostIndex: [
      { item: 'University Hostels & Student Apartments', cost: '€120 – €220' },
      { item: 'Local Tram & Metro Transportation Card', cost: '€15 – €30' },
      { item: 'General Supermarket Food Basket', cost: '€120 – €180' },
      { item: 'Electricity, Water, Heating & Gig Fiber', cost: '€45 – €85' }
    ],
    postStudyParameters: 'Graduates can access corporate work opportunities in central or Western Europe instantly under unified European Qualifications Framework (EQF) validation structures.',
    topAcademicUnits: ['Politehnica University Bucharest', 'Iuliu Hațieganu UMF Cluj', 'West University of Timișoara', 'Babes-Bolyai University', 'University of Bucharest'],
    faqs: [
      {
        question: 'Are Medical degrees from Romania recognized in the UK and USA?',
        answer: 'Yes! Romanian Medical Universities are fully registered in the World Directory of Medical Schools and accredited, allowing graduates to sit for PLAB, USMLE, and other boards.'
      },
      {
        question: 'Is public transport for students free in Romania?',
        answer: 'Romania provides exceptional subsidies for students, offering up to 90% discount on suburban and regional rail services and municipal transits.'
      }
    ]
  },
  {
    id: 'hungary',
    name: 'Hungary',
    slug: 'hungary',
    flag: '🇭🇺',
    tuitionRange: '€2,500 – €6,000 / year',
    livingCostRange: '€450 – €700 / month',
    scholarshipsAvailable: 'Stipendium Hungaricum (Full Tuition, Living Allowance, Free Health)',
    workStudyTerms: '30 Hours per week legally allowed under Student residency rules',
    tagline: 'Historical Modern World-Class University Architecture and Stipendium Pathways.',
    imageTheme: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Hungary combines historic, highly academic architectures with modern research campuses. Prominent for producing Nobel Laureates, Hungary is a premier, safe study-abroad hotspot hosting the famous Stipendium Hungaricum scholarship system.',
    coreAdvantages: [
      'Incredible historic campus safety paired with elite academic research honors.',
      'Active partner in the renowned fully-funded Stipendium Hungaricum program.',
      'Low local living metrics compared to high-cost Western European metropolitan areas.',
      'Outstanding central location with fast train links to Vienna, Bratislava, and Munich.'
    ],
    averageTuitionTable: [
      { program: 'Business, Economics & International Relations', cost: '€2,500 – €3,800 / year' },
      { program: 'Computer Tech / cybersecurity Engineering', cost: '€2,800 – €4,500 / year' },
      { program: 'Dental Surgery & medical Accreditations', cost: '€6,500 – €9,000 / year' },
      { program: 'Pre-University / General Foundation Classes', cost: '€2,000 – €3,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Private Flat Share (Budapest Center - Monthly)', cost: '€200 – €350' },
      { item: 'Budapest Student Public Transit Ticket (Monthly)', cost: '€10 – €15' },
      { item: 'Gourmet Student Mensa & Groceries', cost: '€140 – €220' },
      { item: 'Compulsory Shared Utility Invoices', cost: '€50 – €90' }
    ],
    postStudyParameters: 'Hungary supports graduates with the "Study-to-Work" transit visa, giving university graduates an active 9-month timeframe to transition into corporate careers.',
    topAcademicUnits: ['University of Debrecen', 'University of Pécs', 'Budapest Metropolitan University', 'Corvinus University Budapest', 'Eötvös Loránd University (ELTE)'],
    faqs: [
      {
        question: 'What is Stipendium Hungaricum?',
        answer: 'It is Hungary’s flagship fully-funded scholarship, covering 100% of tuition, providing a monthly stipend, housing credits, and comprehensive health insurance for successful candidates.'
      },
      {
        question: 'When is the application window for Hungarian universities?',
        answer: 'The primary intake is September (applications open November to January/February). Selected programs also support a February spring intake.'
      }
    ]
  },
  {
    id: 'ireland',
    name: 'Ireland',
    slug: 'ireland',
    flag: '🇮🇪',
    tuitionRange: '€10,000 – €22,000 / year',
    livingCostRange: '€1,000 – €1,500 / month',
    scholarshipsAvailable: 'Government of Ireland Scholars & €2,000 – €5,000 University Grants',
    workStudyTerms: '20 Hours/week (40 Hours during holidays) + 2-Year Post-Study Work Visa',
    tagline: 'Modern Technological Campus, Dublin Tech Hubs, Green Vibrant Future.',
    imageTheme: 'https://images.unsplash.com/photo-1549474843-edde3bf0aba7?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Ireland is Europe’s primary English-speaking technology capital. Housing the EMEA headquarters of Google, Apple, Meta, and Stripe, its advanced state universities provide direct and premium access to high-productivity global industries.',
    coreAdvantages: [
      'The only major purely English-speaking nation left in the European Union.',
      'Vibrant technology, pharmaceutical, and financial hubs offering outstanding local salaries.',
      'Active 2-Year post-study work routes (Stamp 1G) for Bachelor’s & Master’s degree holders.',
      'High safety, legendary cultural hospitality, and modern green technological campuses.'
    ],
    averageTuitionTable: [
      { program: 'Bachelor’s in Software Development/IT', cost: '€10,000 – €14,000 / year' },
      { program: 'Master of Science (M.Sc) / Data Analytics', cost: '€12,500 – €18,500 / year' },
      { program: 'Business Administration / Digital Finance', cost: '€11,000 – €16,000 / year' },
      { program: 'Specialized Medical & Health Programs', cost: '€15,500 – €24,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Suburban Student Co-Living (Monthly)', cost: '€550 – €850' },
      { item: 'Leap Card Student Transport (Monthly)', cost: '€45 – €85' },
      { item: 'General Standard Grocery Cart (Monthly)', cost: '€220 – €320' },
      { item: 'Utility Bills, Mobile Coverage, High-Speed Web', cost: '€90 – €145' }
    ],
    postStudyParameters: 'Graduate visa pathways (Stamp 1G) let alumni work full-time for 24 months, enabling rapid skill integration and conversion into General Employment Permits.',
    topAcademicUnits: ['Griffith College Dublin', 'National College of Ireland (NCI)', 'Dublin City University (DCU)', 'South East Technological University (SETU)', 'Trinity College Dublin'],
    faqs: [
      {
        question: 'Are Irish study visas difficult to get?',
        answer: 'With Rahbar Consultants, we focus on perfect paper audits, verified bank assets, and precise statements of purpose (SOP) to ensure high-velocity approvals.'
      },
      {
        question: 'What is the Stamp 1G post-study visa path?',
        answer: 'It is the official graduate work permit giving you 24 months to work full-time after graduating with an honors degree in Ireland without any salary scale sponsorship limitations.'
      }
    ]
  },
  {
    id: 'south-korea',
    name: 'South Korea',
    slug: 'south-korea',
    flag: '🇰🇷',
    tuitionRange: '₩3,000,000 – ₩8,000,000 / semester',
    livingCostRange: '₩1,000,000 – ₩1,500,000 / month',
    scholarshipsAvailable: 'Global Korea Scholarship (GKS) & 30% – 100% University Merit Awards',
    workStudyTerms: '20 Hours/week during study + Unrestricted during vacations',
    tagline: 'Cutting-Edge Technology, Global Pop Culture Leadership, and Generous State Sponsorships.',
    imageTheme: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'South Korea is a premier global hub for electronics, digital media, automotive engineering, and biotechnology. Known for beautiful academic campuses, high-tech standard of living, and deep international support systems, students can prepare for incredible global roles at world-famous universities.',
    coreAdvantages: [
      'Access to high-profile industrial leaders like Samsung, Hyundai, and LG for post-grad careers.',
      'Up to 100% tuition coverage support from the flagship Global Korea Scholarship (GKS) program.',
      'Advanced high-tech research centers and beautiful, exceptionally safe modern urban campuses.',
      'Generous part-time work pathways and post-study D-10 job seeker opportunities.'
    ],
    averageTuitionTable: [
      { program: 'Undergraduate STEM & Tech Degrees', cost: '₩3,500,000 – ₩5,500,000 / semester' },
      { program: 'Undergraduate Business & Humanities', cost: '₩3,000,000 – ₩4,500,000 / semester' },
      { program: 'Postgraduate Master of Engineering', cost: '₩4,500,000 – ₩7,000,000 / semester' },
      { program: 'Doctorate Research & Lab Focuses', cost: '₩5,000,000 – ₩8,000,000 / semester' }
    ],
    livingCostIndex: [
      { item: 'Off-Campus Studio (One-Room Rent)', cost: '₩450,000 – ₩650,000' },
      { item: 'Metro & Bus Transportation (Monthly)', cost: '₩55,000 – ₩75,000' },
      { item: 'Campus Meal Plan / Local Dining (Monthly)', cost: '₩300,000 – ₩450,000' },
      { item: 'High-Speed Web, Mobile & Floor Heating', cost: '₩90,000 – ₩150,000' }
    ],
    postStudyParameters: 'South Korean graduates can convert their student visa (D-2) to a Job Seeker Visa (D-10) for up to 2 years, allowing full-time internships and professional job scouting.',
    topAcademicUnits: ['Seoul National University', 'Korea University', 'Yonsei University', 'KAIST', 'Hanyang University', 'Kyung Hee University'],
    faqs: [
      {
        question: 'Do I need to be fluent in Korean to study in South Korea?',
        answer: 'No! Many top universities offer fully English-medium tracks in computer engineering, business, and international relations. However, learning basic Korean is helpful for daily life and local careers.'
      },
      {
        question: 'What is the Global Korea Scholarship (GKS)?',
        answer: 'The GKS is a government-funded full scholarship that covers 100% of tuition, provides round-trip economy airfare, a monthly allowance, settlement grants, and a year of intensive Korean language study.'
      }
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    slug: 'japan',
    flag: '🇯🇵',
    tuitionRange: '¥535,800 – ¥1,200,000 / year',
    livingCostRange: '¥100,000 – ¥150,000 / month',
    scholarshipsAvailable: 'MEXT Government Scholarships, JASSO Honors & 30% – 50% Tuition Waivers',
    workStudyTerms: '28 Hours/week during study + Full-time during official vacation terms',
    tagline: 'Elite Academy standards, High-Speed Shinkansen Infrastructure, and Pristine Safety Standards.',
    imageTheme: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
    countryOverview: 'Japan houses many of the highest-rated academic and technological institutions in Asia. Highly praised for automotive technologies, precision robotics, game design, and material sciences, Japan blends ancient custom with hyper-modern living. It offers exceptional post-graduate career settlement paths and state scholarship support.',
    coreAdvantages: [
      'Exceptional global reputation of National universities offering top-tier researcher facilities.',
      'Government-sponsored MEXT scholarships covering all tuition, travel and monthly living stipends.',
      'Legalized student work permissions of up to 28 hours weekly to easily offset living costs.',
      'Tremendous demand for international skilled graduates across tech, nursing, and business finance.'
    ],
    averageTuitionTable: [
      { program: 'National Public University Degrees', cost: '¥535,800 – ¥820,000 / year' },
      { program: 'Private Engineering & Applied Science', cost: '¥1,000,000 – ¥1,400,000 / year' },
      { program: 'Graduate Master of Business Administration', cost: '¥850,000 – ¥1,300,000 / year' },
      { program: 'Private Undergraduate Humanities/Arts', cost: '¥750,005 – ¥1,050,000 / year' }
    ],
    livingCostIndex: [
      { item: 'Shared House / University Dorm Room', cost: '¥35,000 – ¥55,000' },
      { item: 'Local Commuter Train Pass (Monthly)', cost: '¥6,000 – ¥10,000' },
      { item: 'Supermarket Groceries & Meal Prep (Monthly)', cost: '¥35,000 – ¥45,000' },
      { item: 'Water, Gas, Electricity & Mobile Contract', cost: '¥12,000 – ¥18,000' }
    ],
    postStudyParameters: 'Japan allows international graduates to apply for a 1-year Job Seeker Visa (convertible for up to 3 years), which can be converted into a standard Technical/Humanities work visa upon finding employment.',
    topAcademicUnits: ['The University of Tokyo', 'Kyoto University', 'Osaka University', 'Tohoku University', 'Waseda University', 'Keio University'],
    faqs: [
      {
        question: 'What is the MEXT Scholarship for Japan?',
        answer: 'The MEXT Scholarship is a highly prestigious fully-funded government grant for international students. It covers 100% of college tuition, round-trip international flights, and provides a monthly living stipend.'
      },
      {
        question: 'Can I study in Japan in English?',
        answer: 'Yes! Under the Global 30 initiative, many of Japan’s elite universities offer complete undergraduate and postgraduate degree programs in English without requiring Japanese language prerequisites.'
      }
    ]
  }
];

export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: 'stipendium-hungary',
    title: 'Stipendium Hungaricum Scholarship Programme',
    country: 'Hungary',
    type: 'merit',
    coverage: '100% Tuition Fee, Monthly Allowance, Medical Care, and Free Housing',
    eligibility: 'Intermediate/A-Levels with 75% or higher. Strong motivation statement.',
    deadline: 'January 15, Annually',
    description: 'Hungary’s most prestigious fully-funded scheme that opens routes to world-class public infrastructure for non-EU students.'
  },
  {
    id: 'uk-chevening',
    title: 'Chevening Scholarships (FCDO)',
    country: 'United Kingdom (UK)',
    type: 'merit',
    coverage: 'Flights, Living Stipend, Full Tuition Coverage, Thesis Allowances',
    eligibility: 'Master’s applicants with 2+ years of professional work/leadership experience.',
    deadline: 'November 7, Annually',
    description: 'The UK government’s legendary global scholarship program, supporting exceptional leaders in all scientific domains.'
  },
  {
    id: 'vru-merit-wave',
    title: 'Australian Institutional Merit Scholarships',
    country: 'Australia',
    type: 'merit',
    coverage: '15% to 30% Annual Tuition Fee Cut',
    eligibility: 'Maintained CGPA of 3.0+ out of 4.0 or equivalent intermediate marks.',
    deadline: 'Rolling Admission Intake Cycles',
    description: 'Institutional automatic merit discounts credited directly to the student’s semester invoice upon receiving and accepting offers.'
  },
  {
    id: 'ireland-gov-scholar',
    title: 'Government of Ireland International Education Scholarship',
    country: 'Ireland',
    type: 'merit',
    coverage: 'Full tuition waiver + €10,000 living allowance stipend for one academic year',
    eligibility: 'Received an unconditional offer from an approved Irish Higher Education university.',
    deadline: 'March 13, Annually',
    description: 'High-prestige scholarship granted by the Department of Further and Higher Education to outstanding international candidates.'
  },
  {
    id: 'romania-state-grant',
    title: 'Romanian Ministry of Foreign Affairs (MFA) Scholarship',
    country: 'Romania',
    type: 'merit',
    coverage: 'Free Tuition, Hostel Subsidies, Monthly Living Allowance',
    eligibility: 'Excellent school records. Citizens of non-EU countries only.',
    deadline: 'March 1, Annually',
    description: 'Full sponsorship designed to support talented non-EU youth eager to experience prestigious Romanian cultural institutions.'
  },
  {
    id: 'malaysia-apu-excellence',
    title: 'APU Malaysia Sports & Academic Excellence Bursaries',
    country: 'Malaysia',
    type: 'merit',
    coverage: '15% to 45% Tuition reductions over course cycles',
    eligibility: 'HSSC / A-Levels with exceptional math, computing or business marks.',
    deadline: 'June & October Intakes',
    description: 'Bursaries dedicated to empowering digital skillsets, computer engineering, and AI development students.'
  },
  {
    id: 'gks-south-korea',
    title: 'Global Korea Scholarship (GKS) - Graduate & Undergraduate',
    country: 'South Korea',
    type: 'merit',
    coverage: '100% Tuition, Monthly Allowance (₩900k-₩1m), Round-Trip Airfare, Medical Insurance, and Language Training',
    eligibility: 'Intermediate/A-Levels or Bachelor degree with 80% or higher. Age under 25 (UG) or 40 (G).',
    deadline: 'February (Undergraduate) / October (Graduate), Annually',
    description: 'South Korea’s premier government fully-funded scholarship, designed to provide international students with deep academic immersion and cultural bridges.'
  },
  {
    id: 'snu-global-scholar',
    title: 'SNU Global Scholarship & Academic Excellence Awards',
    country: 'South Korea',
    type: 'merit',
    coverage: '100% or 50% Tuition Fee Waiver & Optional living stipend of ₩500,000 / month',
    eligibility: 'Outstanding academic record with GPA 3.6+ / 4.0 in previous studies. Recommendation required.',
    deadline: 'Rolling with Admission Intakes',
    description: 'Highly competitive merit awards offered directly by Seoul National University and participating top-tier universities for international scholars.'
  },
  {
    id: 'mext-japan',
    title: 'MEXT Government Scholarship Program (Monbukagakusho)',
    country: 'Japan',
    type: 'merit',
    coverage: '100% Tuition Fee Coverage, Monthly Stipend (¥117k-¥145k), and Round-Trip Economy Airfare',
    eligibility: 'High school graduates or university graduates under 35 with exceptional academic marks and research potential.',
    deadline: 'May to June, Annually',
    description: 'The premier fully-funded Japanese government scholarship promoting world-class engineering, humanities, and research excellence.'
  },
  {
    id: 'jasso-honors',
    title: 'JASSO International Student Honors Scholarship',
    country: 'Japan',
    type: 'merit',
    coverage: '¥48,000 Monthly Living Stipend for up to 12 Months',
    eligibility: 'Enrolled in a Japanese university, high academic performance, and demonstrated need or merit standing.',
    deadline: 'October, Annually',
    description: 'Japan Student Services Organization scholarship supporting self-supporting international candidates completing degrees in Japan.'
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'story-1',
    studentName: 'Zainab Fatima',
    fromCity: 'Lahore',
    targetCountry: 'United Kingdom (UK)',
    universityAdmitted: 'University of Hertfordshire',
    program: 'M.Sc. in Data Science',
    gradesMetric: 'CGPA 3.6 / 4.0 (BS CS)',
    testScoreMetric: 'IELTS 7.0 Overall',
    visaTimeDays: 14,
    testimony: 'Rahbar Consultants managed my complete application seamlessly. I was worried about my gap, but their visa layout strategy was brilliant. Highly recommended!',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  },
  {
    id: 'story-2',
    studentName: 'Muhammad Hamza',
    fromCity: 'Faisalabad',
    targetCountry: 'Australia',
    universityAdmitted: 'Victoria University',
    program: 'Master of Information Technology',
    gradesMetric: '78% Intermediate (Pre-Eng)',
    testScoreMetric: 'PTE 64 Academic',
    visaTimeDays: 21,
    testimony: 'The Genuine Student requirement is tough, but Rahbar Consultants vetted my profile, polished my study plan, and secured my Australian study visa smoothly.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  },
  {
    id: 'story-3',
    studentName: 'Ayesha Siddiqui',
    fromCity: 'Karachi',
    targetCountry: 'Hungary',
    universityAdmitted: 'University of Debrecen',
    program: 'Doctor of General Medicine (MD)',
    gradesMetric: '920/1100 Matric & FSC',
    testScoreMetric: 'IELTS 6.5 Overall',
    visaTimeDays: 18,
    testimony: 'Getting fully-funded Stipendium Hungaricum is dream come true. From documentation to mock interviews, Rahbar Consultants supported me perfectly.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  },
  {
    id: 'story-4',
    studentName: 'Rohan Ahmed',
    fromCity: 'Rawalpindi',
    targetCountry: 'Malaysia',
    universityAdmitted: 'Asia Pacific University (APU)',
    program: 'B.Sc. in Artificial Intelligence',
    gradesMetric: '3 As in A-Levels',
    testScoreMetric: 'IELTS 7.0 Band',
    visaTimeDays: 9,
    testimony: 'APU has beautiful high-tech systems. Study fees were affordable, and Rahbar Consultants handled my EMGS process in just two weeks.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  },
  {
    id: 'story-south-korea',
    studentName: 'Muhammad Ali',
    fromCity: 'Lahore',
    targetCountry: 'South Korea',
    universityAdmitted: 'Seoul National University',
    program: 'M.Sc. in Robotics & Control System',
    gradesMetric: 'CGPA 3.75 / 4.0 (BS Mechatronics)',
    testScoreMetric: 'IELTS 7.0 Overall',
    visaTimeDays: 15,
    testimony: 'Seoul National University academic culture is top notch. Rahbar Consultants guided my complete document authentication, Apostille process, and GKS scholarship folder preparation wonderfully!',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  },
  {
    id: 'story-japan',
    studentName: 'Fatima Sana',
    fromCity: 'Islamabad',
    targetCountry: 'Japan',
    universityAdmitted: 'The University of Tokyo',
    program: 'Master of Materials Engineering',
    gradesMetric: 'CGPA 3.82 / 4.0 (BS Materials)',
    testScoreMetric: 'IELTS 7.5 Overall',
    visaTimeDays: 18,
    testimony: 'Studying in Japan with full tuition relief has been a life-defining phase. Rahbar Consultants structured my MEXT embassy-route application flawlessly.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    visaStatus: 'Approved'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'We run a targeted career exploration mapping your aspirations and score background during our first session.'
  },
  {
    step: '02',
    title: 'Profile Evaluation',
    description: 'Our expert team audits academic records, financial capabilities, and language marks to find the ideal options.'
  },
  {
    step: '03',
    title: 'University Selection',
    description: 'We match you with official partners, selecting high-ranking courses offering maximum scholarship value.'
  },
  {
    step: '04',
    title: 'Application Submission',
    description: 'We edit personal statements, review documentation, and submit strong applications directly to admissions.'
  },
  {
    step: '05',
    title: 'Visa Processing',
    description: 'We conduct strict mock interviews, audit bank statement structures, and guide visa filing with official hubs.'
  },
  {
    step: '06',
    title: 'Study Abroad Journey',
    description: 'Our backing extends even past departure with safe pre-departure briefings, airport transfers, and housing links.'
  }
];

export const SERVICE_PILLARS = [
  {
    id: 'admission',
    title: 'Admission Processing',
    description: 'Our counselors secure offer letters from top global universities quickly. We review credentials, build strong Personal Statements, and optimize applications for automatic merit awards.',
    iconName: 'GraduationCap'
  },
  {
    id: 'visa',
    title: 'Student Visa Assistance',
    description: 'Our specialist team conducts thorough documentation audits, schedules mock embassy sessions, and secures correct financial formatting to maintain our industry-leading study visa success rate.',
    iconName: 'FileCheck'
  },
  {
    id: 'scholarship',
    title: 'Scholarship Guidance',
    description: 'We match qualified students with prestigious state scholarships, Stipendium programs, global entrance grants, and regional tuition waivers to significantly decrease their overall expenses.',
    iconName: 'Award'
  },
  {
    id: 'career',
    title: 'Career Counseling',
    description: 'We look at your long-term goals and interests to find high-growth professional fields. This ensures you choose courses that lead to excellent postgraduate career opportunities.',
    iconName: 'Compass'
  },
  {
    id: 'interview',
    title: 'Interview Preparation',
    description: 'We execute intensive mock interviews that mirror official embassy audits (such as the UK Credibility checks or Australian GS reviews) to build your confidence and communication skills.',
    iconName: 'UserCheck'
  },
  {
    id: 'accommodation',
    title: 'Accommodation Support',
    description: 'We take the stress out of moving by connecting you with safe on-campus housing, student apartments, off-campus sublets, and regional airport collection services.',
    iconName: 'Home'
  }
];
