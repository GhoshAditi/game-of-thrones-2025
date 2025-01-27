import React from 'react';
import SVGIcon from '../common/SVGIcon';

const MobileHero = () => {
  return (
    <div className="block w-full relative">
      {/* Left Honeycomb  */}
      <div className="absolute left-0 top-0">
        <SVGIcon iconName="leftHero" className="h-[180px] w-[150px]" />
      </div>

      {/* Center Content */}
      <div className="pt-[80px] pl-[70px]">
        <SVGIcon
          iconName="gotLogo"
          className="h-[200px] w-[190px] ml-14 -mt-16 mb-4"
        />
        <h1 className="text-center text-sm tracking-wider mr-12 -mt-16 font-got text-white">
          Game of<br></br> Thrones
        </h1>
        <p className="text-sm font-instrumentSans text-center mr-14 text-white mb-4">
          Inter College State <br></br> Level Sports Fest
        </p>
      </div>

      {/* Right Honeycomb*/}
      <div className="absolute right-0 top-[220px]">
        <SVGIcon iconName="rightHero" className="h-[180px] w-[150px] -mt-4" />
      </div>

      {/* Register Button  */}
      <div className="text-center -mt- ml-4">
        <button
          className="py-2 px-4 font-sargento text-xs text-white rounded-full shadow-md"
          style={{
            background: 'linear-gradient(to right, #9158FF, #b794f4)',
          }}
        >
          REGISTER <br></br>NOW
        </button>
      </div>
    </div>
  );
};

export default MobileHero;
