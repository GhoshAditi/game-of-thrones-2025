'use client';
import { Suspense, useEffect } from 'react';
import SVGIcon from '../common/SVGIcon';

const Hero = () => {
  // const { setUserData } = useUser();

  // useEffect(()=>{
  //   setUserData();
  // },[]);
  return (
    <div className="">
      <h1 className="font-got">Hello</h1>
      <h1 className="font-sargento">World</h1>
      <h1 className="font-instrumentSans">GOT</h1>
      <Suspense fallback={<></>}>
        <SVGIcon
          iconName="leftHero"
          className="w-[800px] lg:w-[500px] bg-black lg:bg-blue-500"
          useDiv
        />
      </Suspense>
    </div>
  );
};

export default Hero;
