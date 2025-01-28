import React from "react";
import Image from "next/image";
import SVGIcon from '@/components/common/SVGIcon';
import { locations } from "@/utils/functions/constant";

const Location = () => {
  return (
    <div>
          <SVGIcon iconName="wrapperBg" className="absolute inset-0 w-full h-full bg-cover bg-center z-[-1] hidden md:block" />
     
    <div className="relative min-h-screen overflow-hidden">
     
      <div className="relative flex flex-col items-start gap-10 z-10">
        <h1 className="font-got text-2xl tracking-wider text-primary lg:px-10 text-blue-300">
          Locations
        </h1>
        
        <div className="relative mx-auto flex w-[95%] flex-col gap-10">
          {locations.map((location, index) => {
            return (
              <div key={index}>
                <div className="text-md flex flex-row gap-2 lg:px-8">
                  <Image
                    src="/assets/contacts/redpin.svg"
                    height={0}
                    width={0}
                    className="w-8 lg:w-12"
                    alt="location"
                  />
                  <p className="font-semibold text-gray-200">
                    {location.name}
                    <br /> {location.landmark}
                  </p>
                </div>
                <iframe
                  className="mx-auto h-[300px] w-[90%] rounded-md lg:h-[500px]"
                  loading="lazy"
                  src={location.place}
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Location;