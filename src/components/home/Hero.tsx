'use client';
import { FC } from 'react';
import SVGIcon from '../common/SVGIcon';

const Hero: FC = () => {
  return (
    <div className="flex flex-row justify-center w-full">
      {/* Left Honeycomb SVG */}
      <div className="flex-1 flex justify-center">
        <SVGIcon
          iconName="leftHero"
          className="h-[150px] w-[150px] md:h-[537px] md:w-[577px]"
        />
      </div>

      {/* Center GOT Logo and Text */}
      <div className="text-center relative flex-shrink-0 px-4">
        <SVGIcon
          iconName="gotLogo"
          className="h-[100px] w-[90px] md:h-[400px] md:w-[300px]"
        />
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
          <h1 className="text-sm md:text-2xl tracking-wider mt-72 md:mt-56 font-got text-white">
            Game of Thrones
          </h1>
          <p className="text-sm md:text-2xl font-instrumentSans text-white mb-4">
            Inter College State Level Sports Fest
          </p>
          <button
            className="py-2 px-3 md:py-4 md:px-4 font-sargento text-sm md:text-xl text-white rounded-lg shadow-md"
            style={{
              background:
                'radial-gradient(130.78% 1677.05% at 50% 50%, #9158FF 0%, #FFFFFF 100%)',
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      {/* Right Honeycomb SVG */}
      <div className="flex-1 flex justify-center">
        <SVGIcon
          iconName="rightHero"
          className="h-[150px] w-[150px] md:h-[537px] md:w-[577px]"
        />
      </div>
    </div>
  );
};

export default Hero;
