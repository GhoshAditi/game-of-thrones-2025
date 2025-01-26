import React from 'react';
import SVGIcon from '../common/SVGIcon';
import Image from 'next/image';

function Sponsors() {
  return (
    <div className="relative flex bg-black w-full h-screen z-[-2]">
      <Image
        src="/assets/football.png"
        alt="Football"
        width={240}
        height={240}
        className="absolute left-1/2 transform -translate-x-1/2 top-10 sm:block md:hidden z-5 "
      />
      <SVGIcon
        iconName="football"
        className="absolute w-250 h-260 left-20 top-5 hidden md:block"
      />

      <div className="absolute text-white text-left top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-0 sm:mt-0 md:mt-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center sm:text-left ">
          Interested in sponsoring this <span className="block">event?</span>
        </h2>
        <div className="flex flex-row space-x-2 sm:space-x-4 items-center sm:items-start">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-xs sm:text-sm md:text-base flex items-center">
            Brochure
            <span className="ml-1 text-lg bg-white rounded-full text-blue-500 flex items-center justify-center w-6 h-6 font-bold">
              &rarr;
            </span>
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-500 px-4 py-2 rounded-full text-xs sm:text-sm md:text-base flex items-center">
            Contact
            <span className="ml-1 text-lg bg-blue-500 rounded-full text-white flex items-center justify-center w-6 h-6 font-bold">
              &rarr;
            </span>
          </button>
        </div>
      </div>

      {/* Right SVG - Abstract Lines */}
      <SVGIcon
        iconName="sponsorsLines"
        className="absolute right-1 top-0 w-[850px] h-[750px] z-[-1]"
      />
    </div>
  );
}

export default Sponsors;
