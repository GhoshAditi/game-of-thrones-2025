import React from 'react';
import SVGIcon from '../common/SVGIcon';
import Link from 'next/link';
const Hero = () => {
  return (
    <div className="flex flex-row py-12 sm:py-20 max-md:h-full h-[100vh] text-white justify-between relative w-full overflow-hidden mt-10 sm:mt-0">
      <SVGIcon
        iconName="leftHero"
        className="max-lg:absolute max-lg:top-0 max-lg:left-0 w-[40vw] h-fit sm:w-[40vw] lg:w-[33vw] lg:h-full"
      />
      <SVGIcon
        iconName="backgroundHero"
        className="absolute w-[100%] h-full lg:h-[120vh] top-0 "
      />
      <div className="flex flex-col z-10 justify-center text-center mx-auto w-fit md:w-1/2 lg:w-full items-center relative">
        <SVGIcon
          iconName="gotLogo"
          className="w-[40vw] h-[40vw] sm:w-[20vw] sm:h-[20vw] lg:h-[25vw] lg:w-[25vw]"
        />
        <h1 className="text-xs mt-4 sm:text-xl lg:text-2xl xl:text-4xl tracking-wider font-got text-white">
          Game of Thrones
        </h1>
        <p className="text-xs text-center md:text-xl lg:text-2xl mt-2 font-instrumentSans text-white mb-4">
          Inter College State Level Sports Fest
        </p>
        <Link href="/events">
          <button
            className="px-3 py-2 md:py-4 md:px-4 font-sargento text-xs md:text-sm lg:text-xl text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            style={{
              background:
                'radial-gradient(130.78% 1677.05% at 50% 50%, #9158FF 0%, #FFFFFF 100%)',
            }}
          >
            REGISTER NOW
          </button>
        </Link>
      </div>
      <SVGIcon
        iconName="rightHero"
        className="max-lg:absolute max-lg:bottom-0 max-lg:right-0 w-[40vw] h-fit sm:w-[40vw] lg:w-[33vw] lg:h-full"
      />
    </div>
  );
};

export default Hero;
