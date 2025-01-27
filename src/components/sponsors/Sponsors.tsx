import React from 'react';
import SVGIcon from '../common/SVGIcon';
import Image from 'next/image';
import { AnimatedButton } from './Button';

function Sponsors() {
  return (
    <div className="relative flex bg-black w-full h-screen">
      {/* Football Image */}
      <Image
        src="/assets/football.png"
        alt="Football"
        width={240}
        height={240}
        className="absolute left-1/2 transform -translate-x-1/2 top-10 sm:block md:hidden z-10"
      />

      {/* Football SVG */}
      <SVGIcon
        iconName="football"
        className="absolute w-250 h-260 left-20 top-5 hidden md:block z-10"
      />

      {/* Content Container */}
      <div className="absolute text-white text-left top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 mt-0 sm:mt-0 md:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left">
          Interested in sponsoring this <span className="block">event?</span>
        </h2>
        <div className="flex flex-row space-x-2 sm:space-x-4 items-center sm:items-start">
          <AnimatedButton text="Brochure" primary={true} />
          <AnimatedButton text="Contact" primary={false} />
        </div>
      </div>

      {/* Abstract Lines SVG - Moved behind content */}
      <SVGIcon
        iconName="sponsorsLines"
        className="absolute right-1 top-0 w-[850px] h-[750px] z-0"
      />
    </div>
  );
}

export default Sponsors;