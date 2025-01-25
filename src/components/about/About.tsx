import React from 'react';
import SVGIcon from '../common/SVGIcon';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-black text-white mx-auto p-4 md:p-0">
      {/* Helmet Section - Hidden on Small Screens */}
      <div className="relative flex-shrink-0 hidden md:block">
        <SVGIcon iconName="helmet" className="w-150 h-160 ml-20" />
      </div>

      {/* Text Section */}
      <div className="ml-5 md:mr-80 max-w-3xl text-center">
        {/* Mobile "About" Heading */}
        <h2 className="block md:hidden text-3xl font-bold uppercase mb-4">
          About
        </h2>
        <p className="text-xs md:text-lg leading-relaxed font-instrumentSans">
          Game of Thrones (GoT’25), RCC Institute of Information Technology's
          Annual Sports Meet, is back as a National Inter College Sports
          Tournament in Kolkata happening in January 2024. Featuring diverse
          sports competitions and attractive prizes, GoT’24 invites colleges
          nationwide for intense and inclusive contests. Beyond rivalry, it
          emphasizes sportsmanship and teamwork, offering a platform for
          students to showcase talents and create lasting memories. Don’t miss
          the biggest sports event of the year – mark your calendars!
        </p>
      </div>
    </div>
  );
}

export default About;
