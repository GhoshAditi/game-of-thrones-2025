import React from 'react';
import SVGIcon from '../common/SVGIcon';

const DesktopHero = () => {
  return (
    <div className="flex flex-row justify-between w-full overflow-visible">
      <div className="flex justify-center">
        <SVGIcon iconName="leftHero" className="h-[537px] w-[577px]" />
      </div>

      <div className="text-center relative flex-shrink-0 px-4">
        <SVGIcon iconName="gotLogo" className="h-[400px] w-[300px]" />
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
          <h1 className="text-2xl tracking-wider mt-56 font-got text-white">
            Game of Thrones
          </h1>
          <p className="text-2xl font-instrumentSans text-white mb-4">
            Inter College State Level Sports Fest
          </p>
          <button
            className="py-4 px-4 font-sargento text-xl text-white rounded-lg shadow-md"
            style={{
              background:
                'radial-gradient(130.78% 1677.05% at 50% 50%, #9158FF 0%, #FFFFFF 100%)',
            }}
          >
            REGISTER NOW
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <SVGIcon iconName="rightHero" className="h-[537px] w-[577px]" />
      </div>
    </div>
  );
};

export default DesktopHero;
