'use client';
import { FC } from 'react';
import SVGIcon from '../common/SVGIcon'; // Adjust the import path if necessary

const Hero: FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black">
      <div className="flex items-center w-full justify-between px-10">
        {/* Left Honeycomb SVG */}
        <SVGIcon iconName="leftHero" className="h-[300px] w-[300px]" />

        {/* Center GOT Logo and Text */}
        <div className="text-center">
          <SVGIcon iconName="leftHero" className="h-[300px] w-[300px]" />
          <h1 className="text-4xl font-got text-white">Game of Thrones</h1>
          <p className="text-lg font-instrumentSans text-white mb-6">
            Inter College State Level Sports Fest
          </p>
          <button
            className="py-4 px-4 font-sargento text-xl text-white rounded-lg shadow-md"
            style={{
              background:
                'radial-gradient(130.78% 1677.05% at 50% 50%, #9158FF 0%, #FFFFFF 100%)',
            }}
          >
            Register Now
          </button>
        </div>

        {/* Right Honeycomb SVG */}
        <SVGIcon iconName="rightHero" className="h-[300px] w-[300px]" />
      </div>
    </section>
  );
};

export default Hero;
