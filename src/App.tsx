import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import DestinationDetail from './pages/DestinationDetail';
import Scholarships from './pages/Scholarships';
import SuccessStories from './pages/SuccessStories';
import AboutAndServices from './pages/AboutAndServices';
import Contact from './pages/Contact';

const RouteLoader = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh] py-12" id="route-skeleton-loader">
    <div className="w-12 h-12 border-4 border-slate-100 border-t-[#3157E6] rounded-full animate-spin mb-4" />
    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 animate-pulse font-mono">
      loading portal...
    </span>
  </div>
);

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [destinationSlug, setDestinationSlug] = useState('');

  // Handle hash change events to support back/forward browser actions and direct entry points
  useEffect(() => {
    const parseHashRoute = () => {
      const hash = window.location.hash || '#/';
      
      if (hash.startsWith('#/destinations/')) {
        const slug = hash.replace('#/destinations/', '');
        setCurrentRoute(`destination_${slug}`);
        setDestinationSlug(slug);
      } else {
        const route = hash.replace('#/', '') || 'home';
        setCurrentRoute(route);
      }
    };

    window.addEventListener('hashchange', parseHashRoute);
    // Run parser on initialization
    parseHashRoute();

    return () => {
      window.removeEventListener('hashchange', parseHashRoute);
    };
  }, []);

  // Programmatic state modifier mapping back to location hashes
  const handleNavigation = (route: string) => {
    if (route.startsWith('destination_')) {
      const slug = route.replace('destination_', '');
      window.location.hash = `#/destinations/${slug}`;
    } else if (route === 'home') {
      window.location.hash = '#/';
    } else {
      window.location.hash = `#/${route}`;
    }
  };

  const renderActiveRoute = () => {
    if (currentRoute.startsWith('destination_')) {
      return (
        <DestinationDetail 
          countrySlug={destinationSlug} 
          onNavigate={handleNavigation} 
        />
      );
    }

    switch (currentRoute) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <AboutAndServices />;
      case 'scholarships':
        return <Scholarships />;
      case 'success-stories':
        return <SuccessStories />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-650 antialiased font-sans transition-all duration-300">
      {/* Sticky layout header */}
      <Header currentRoute={currentRoute} onNavigate={handleNavigation} />

      {/* Main page dynamic canvas container */}
      <main className="flex-1">
        {renderActiveRoute()}
      </main>

      {/* Corporate footer showing links and mobile-dock utility */}
      <Footer onNavigate={handleNavigation} currentRoute={currentRoute} />
    </div>
  );
}
