import React from 'react';
import SVGIcon from '../common/SVGIcon';

function Sponsors() {
  return (
    <div className="relative flex bg-black w-full h-screen">
      {/* Left SVG - Volleyball Player */}
      <SVGIcon
        iconName="football"
        className="absolute w-250 h-260 left-20 top-10"
      />

      <div className="absolute text-white text-left top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 z-10 mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Interested in sponsoring this <span className="block">event?</span>
        </h2>
        <div className="flex  space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm md:text-base flex items-center">
            Brochure
            <span className="ml-1 text-lg bg-white rounded-full text-blue-500 flex items-center justify-center w-6 h-6 font-bold">
              &rarr;
            </span>
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-500 px-6 py-2 rounded-full text-sm md:text-base flex items-center">
            Hit us up
            <span className="ml-1 text-lg bg-blue-500 rounded-full text-white flex items-center justify-center w-6 h-6 font-bold">
              &rarr;
            </span>
          </button>
        </div>
      </div>

      {/* Right SVG - Abstract Lines */}
      <SVGIcon
        iconName="sponsorsLines"
        className="absolute right-1 top-0 w-[850px] h-[750px]"
      />
    </div>
  );
}

export default Sponsors;
