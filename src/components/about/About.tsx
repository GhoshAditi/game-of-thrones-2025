import React from 'react';
import SVGIcon from '../common/SVGIcon';

function About() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center w-full mx-auto px-5 md:px-10  ">
      <SVGIcon
        iconName="helmet"
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
      />
      <div className="text-xs md:text-lg leading-loose text-white w-3/5 lg:w-1/3 mx-auto text-justify font-instrumentSans">
        Game of Thrones (GoT’25), RCC Institute of Information Technology's
        Annual Sports Meet, is back as a National Inter College Sports
        Tournament in Kolkata happening in January 2024. Featuring diverse
        sports competitions and attractive prizes, GoT’24 invites colleges
        nationwide for intense and inclusive contests. Beyond rivalry, it
        emphasizes sportsmanship and teamwork, offering a platform for students
        to showcase talents and create lasting memories. Don’t miss the biggest
        sports event of the year – mark your calendars!
      </div>
    </div>
  );
}

export default About;
