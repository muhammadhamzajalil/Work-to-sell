import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Link2, 
  Check, 
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../blogData';
import { getBlogFallbackImage } from '../utils';
import OptimizedImage from '../components/OptimizedImage';
import LeadForm from '../components/LeadForm';

interface BlogDetailProps {
  blogSlug: string;
  onNavigate: (route: string) => void;
}

export default function BlogDetail({ blogSlug, onNavigate }: BlogDetailProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Find matching post based on slug
    const match = BLOG_POSTS.find(b => b.slug === blogSlug);
    if (match) {
      setPost(match);
      // Scroll to top on load
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    }
  }, [blogSlug]);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-black text-slate-800 uppercase mb-3">Article Not Found</h2>
        <p className="text-slate-500 mb-6 font-semibold">The requested educational publication could not be parsed.</p>
        <button 
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#3157E6] hover:bg-[#2848c2] text-white font-extrabold text-xs uppercase tracking-widest rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Back to Home</span>
        </button>
      </div>
    );
  }

  // Related articles
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id)
    .filter(p => p.category === post.category || p.id % 2 === post.id % 2)
    .slice(0, 3);

  const articleUrl = `${window.location.origin}/#/blog/${post.slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`Check out this guide: ${post.title}\n${articleUrl}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`Read this study abroad guide: ${post.title}`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(articleUrl)}`, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16 md:pb-24">
      {/* Decorative Hero Header */}
      <div className="relative w-full h-[300px] md:h-[380px] bg-slate-900 overflow-hidden border-b border-slate-200">
        <OptimizedImage 
          url={post.imgUrl}
          width={1200}
          category={post.category}
          alt={post.title}
          className="w-full h-full object-cover object-center opacity-40 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        
        {/* Navigation Breadcrumb & Back action */}
        <div className="absolute inset-x-0 bottom-0 py-8">
          <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-3">
            <div className="flex items-center gap-2 text-white/70 font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
              <button onClick={() => onNavigate('home')} className="hover:text-[#3157E6] transition-colors">Home</button>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-[#3157E6]">{post.category}</span>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-white/50 truncate max-w-xs">{post.title}</span>
            </div>
            
            <span className="inline-block bg-[#3157E6] text-white font-mono font-black text-[9.5px] tracking-wider uppercase py-1 px-3.5 rounded-lg mb-2 shadow-sm">
              {post.category}
            </span>
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-black leading-tight drop-shadow-sm max-w-4xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Article column */}
          <article className="lg:col-span-8 bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
            
            {/* Author details & Social interactions row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-150">
              <div className="flex items-center gap-4 text-slate-500 font-medium text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <User className="w-4 h-4 text-slate-400" />
                  {post.author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {post.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Social interactions */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 font-mono mr-1">Share:</span>
                <button 
                  onClick={shareOnWhatsApp} 
                  className="p-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Share on WhatsApp"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={shareOnFacebook} 
                  className="p-2 rounded-lg bg-[#1877F2] hover:bg-[#166FE5] text-white transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Share on Facebook"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={shareOnLinkedIn} 
                  className="p-2 rounded-lg bg-[#0077B5] hover:bg-[#006297] text-white transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={shareOnTwitter} 
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-950 text-white transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer"
                  title="Share on X"
                >
                  <Twitter className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={copyToClipboard} 
                  className={`p-2 rounded-lg text-white transition-all scale-100 hover:scale-105 active:scale-95 cursor-pointer ${copied ? 'bg-emerald-600' : 'bg-[#3157E6] hover:bg-[#2848c2]'}`}
                  title={copied ? "Copied!" : "Copy Link"}
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Structured typography sections */}
            <div className="prose max-w-none text-slate-650 text-sm sm:text-base leading-relaxed font-semibold">
              {post.sections.map((section, idx) => {
                switch (section.type) {
                  case 'paragraph':
                    return (
                      <p key={idx} className="mb-4 text-slate-600 font-semibold leading-relaxed">
                        {section.text}
                      </p>
                    );
                  case 'heading2':
                    return (
                      <h2 key={idx} className="text-xl sm:text-2xl font-black text-slate-900 mt-8 mb-4 tracking-tight uppercase border-l-4 border-[#3157E6] pl-4">
                        {section.title}
                      </h2>
                    );
                  case 'heading3':
                    return (
                      <h3 key={idx} className="text-base sm:text-lg font-extrabold text-slate-800 mt-6 mb-3 tracking-tight">
                        {section.title}
                      </h3>
                    );
                  case 'bullet_list':
                    return (
                      <ul key={idx} className="list-disc pl-5 mb-5 space-y-2.5 text-slate-650">
                        {section.items?.map((item, itemIdx) => (
                          <li key={itemIdx} className="font-semibold">{item}</li>
                        ))}
                      </ul>
                    );
                  case 'numbered_list':
                    return (
                      <ol key={idx} className="list-decimal pl-5 mb-5 space-y-2.5 text-slate-650">
                        {section.items?.map((item, itemIdx) => (
                          <li key={itemIdx} className="font-semibold">{item}</li>
                        ))}
                      </ol>
                    );
                  case 'highlight_box':
                    return (
                      <div key={idx} className="my-6 p-5 sm:p-6 bg-[#3157E6]/5 border border-[#3157E6]/15 rounded-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#3157E6]" />
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#3157E6] mb-1.5 font-mono">
                          {section.title || 'Important Notice'}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    );
                  case 'quote':
                    return (
                      <blockquote key={idx} className="my-6 pl-5 border-l-4 border-slate-300 italic text-slate-500 font-mono text-sm font-semibold">
                        {section.text}
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })}
            </div>

            {/* Back to Home Button */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-2 text-xs text-[#3157E6] hover:text-[#2848c2] font-black uppercase tracking-widest transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 animate-pulse" />
                <span>Return Back to Home</span>
              </button>
            </div>

          </article>

          {/* Sidebar Area: Call To Action (Custom regulatory compliance setup) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            
            {/* Quick Profile Assesment Widget */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-black text-slate-900 tracking-widest uppercase mb-4 font-mono border-b border-slate-100 pb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3157E6]" />
                Profile Evaluation
              </h3>
              <p className="text-xs text-slate-500 font-semibold mb-4 leading-relaxed">
                Aiming to study {post.category === 'Careers' ? 'abroad' : `with focus on ${post.category}`}? Submit your credentials for direct vetting by our Lahore Registrar desk.
              </p>
              <LeadForm initialDestination={post.category === 'Visas' ? 'United Kingdom' : 'Germany'} />
            </div>

            {/* Office location disclaimer */}
            <div className="bg-[#3157E6] text-white rounded-[28px] p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
              <h4 className="text-xs font-black uppercase tracking-widest font-mono mb-2 text-[#AEC0FF]">Lahore Central Desk</h4>
              <p className="text-sm font-extrabold leading-snug mb-4">
                "Direct supervisory oversight is given on admissions files to ensure a 100% approval layout."
              </p>
              <div className="pt-4 border-t border-white/20 text-[10px] font-mono text-white/80">
                Rahbar Consultants, Model Town, Lahore.
              </div>
            </div>

          </div>

        </div>

        {/* You May Also Like Bottom bar */}
        <div className="pt-16">
          <h3 className="text-sm font-bold text-slate-900 tracking-widest uppercase mb-8 font-mono border-b border-slate-200 pb-3 flex items-center gap-2 select-none">
            <span className="w-2.5 h-2.5 rounded-full bg-[#3157E6]" />
            YOU MAY ALSO LIKE
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div 
                key={relatedPost.id}
                onClick={() => onNavigate(`blog_${relatedPost.slug}`)}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#3157E6]/40 hover:shadow-md rounded-3xl p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full"
              >
                <div className="space-y-3">
                  <div className="h-36 w-full rounded-2xl overflow-hidden bg-slate-200">
                    <OptimizedImage 
                      url={relatedPost.imgUrl}
                      width={400}
                      category={relatedPost.category}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="inline-block bg-[#3157E6]/10 text-[#3157E6] font-mono font-black text-[9px] tracking-wider uppercase py-0.5 px-2 rounded">
                    {relatedPost.category}
                  </span>
                  <h4 className="text-sm font-extrabold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#3157E6] transition-colors font-sans">
                    {relatedPost.title}
                  </h4>
                </div>
                <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px] text-slate-400 font-bold select-none">
                  <span>{relatedPost.date}</span>
                  <span className="flex items-center gap-0.5 text-[#3157E6]">
                    Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
