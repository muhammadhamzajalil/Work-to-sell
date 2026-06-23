import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Link2, 
  Check, 
  ExternalLink,
  MessageCircle,
  Facebook,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';
import { BlogPost, BLOG_POSTS } from '../blogData';
import { getBlogFallbackImage } from '../utils';
import OptimizedImage from './OptimizedImage';

interface BlogPopupProps {
  post: BlogPost;
  onClose: () => void;
  onNavigate: (route: string) => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogPopup({ post, onClose, onNavigate, onSelectPost }: BlogPopupProps) {
  const [copied, setCopied] = useState(false);

  // Disable main page body scrolling when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Listen to Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Find 3 related articles
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

  const handleOpenFullArticle = () => {
    onClose();
    onNavigate(`blog_${post.slug}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 select-none overflow-hidden">
        {/* Backdrop overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Sheet Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[80vh] border border-slate-150"
          id="blog-popup-modal"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close button bar */}
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={onClose}
              className="p-3 bg-white/90 hover:bg-white text-slate-800 hover:text-red-650 rounded-full shadow-lg border border-slate-100 hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center"
              title="Close Guide"
              id="close-blog-popup-btn"
            >
              <X className="w-5 h-5 pointer-events-none" />
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="flex-1 overflow-y-auto select-text scrollbar-thin scrollbar-thumb-slate-200">
            {/* Featured Hero Banner */}
            <div className="relative h-48 sm:h-64 md:h-[340px] w-full bg-slate-100 overflow-hidden">
              <OptimizedImage 
                url={post.imgUrl}
                width={1000}
                category={post.category}
                alt={post.title}
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              
              {/* Category & Open Full Action button overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block bg-[#3157E6] text-white font-mono font-black text-[10px] tracking-wider uppercase py-1 px-3.5 rounded-lg shadow-sm">
                    {post.category}
                  </span>
                  <h1 className="text-white text-lg sm:text-2xl md:text-3xl font-black leading-tight drop-shadow-sm max-w-2xl">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Author details & Share section */}
            <div className="px-6 py-5 bg-slate-50 border-b border-slate-150 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-slate-500 font-medium text-xs">
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <User className="w-4 h-4 text-slate-400" />
                  {post.author}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {post.date}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5 font-mono">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Social share widget */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 font-mono mr-1.5">Share:</span>
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

            {/* Content Body layout with pristine typographic grid */}
            <div className="px-6 sm:px-8 py-8 space-y-6">
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
                        <blockquote key={idx} className="my-6 pl-5 border-l-4 border-slate-300 italic text-slate-500 font-mono text-sm">
                          {section.text}
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* Action Button for Standalone Read page */}
              <div className="pt-4 pb-2 border-b border-slate-100 flex justify-center">
                <button
                  onClick={handleOpenFullArticle}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3157E6] hover:bg-[#2848c2] text-white font-extrabold uppercase text-xs tracking-widest rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                  id="open-full-article-modal-btn"
                >
                  <span>Open Full Article</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Related/Recommend Section */}
              <div className="pt-6">
                <h3 className="text-sm font-black text-slate-900 tracking-widest uppercase mb-6 font-mono border-b border-slate-100 pb-2 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3157E6]" />
                  You May Also Like
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <div 
                      key={relatedPost.id}
                      onClick={() => onSelectPost(relatedPost)}
                      className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#3157E6]/40 hover:shadow-md rounded-2xl p-4 transition-all duration-300 cursor-pointer flex flex-col justify-between group h-full"
                    >
                      <div className="space-y-2.5">
                        <div className="h-28 w-full rounded-xl overflow-hidden bg-slate-200">
                          <OptimizedImage 
                            url={relatedPost.imgUrl}
                            width={300}
                            category={relatedPost.category}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <span className="inline-block bg-[#3157E6]/10 text-[#3157E6] font-mono font-black text-[8px] tracking-wider uppercase py-0.5 px-2 rounded">
                          {relatedPost.category}
                        </span>
                        <h4 className="text-xs font-extrabold text-slate-800 line-clamp-2 leading-snug group-hover:text-[#3157E6] transition-colors">
                          {relatedPost.title}
                        </h4>
                      </div>
                      <div className="pt-3 border-t border-slate-100 mt-3 flex items-center justify-between text-[9px] text-slate-400 font-bold">
                        <span>{relatedPost.date}</span>
                        <span className="flex items-center gap-0.5 text-[#3157E6]">
                          Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
