'use client';
import React, { useState, useEffect } from 'react';
import MobileHero from './MobileHero';
import DesktopHero from './DesktopHero';
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return isMobile;
};

const HeroSection = () => {
  const isMobile = useMobileDetect();

  return (
    <div className="min-h-screen w-full">
      <div className="relative w-full">
        {isMobile ? <MobileHero /> : <DesktopHero />}
      </div>
    </div>
  );
};

export default HeroSection;
