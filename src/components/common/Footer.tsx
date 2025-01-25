import React from 'react';
import SVGIcon from './SVGIcon';
import { FaInstagram, FaGoogle, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const ABOUT_LINK = '/about';
const EVENTS_LINK = '/events';
const TEAM_LINK = '/team';
const INSTAGRAM_LINK = 'https://www.instagram.com';
const GOOGLE_LINK = 'https://www.google.com';
const FACEBOOK_LINK = 'https://www.facebook.com';

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center py-12 md:h-screen">
      <div
        className="absolute inset-0"
        style={{ clipPath: 'inset(0 0 15% 0)' }}
      >
        <SVGIcon iconName="footerbg" className="w-full h-full" />
      </div>
      <h1 className="relative text-xl md:text-4xl pt-6 md:pt-[12rem] font-black text-center text-white font-got z-10 tracking-wider">
        Game of Thrones
      </h1>
      <h2 className="relative text-base md:text-2xl pt-2 text-center font-sargento text-white z-10">
        <Link href={ABOUT_LINK} className="mx-2 hover:text-gray-300">
          About
        </Link>
        <Link href={EVENTS_LINK} className="mx-2 hover:text-gray-300">
          Events
        </Link>
        <Link href={TEAM_LINK} className="mx-2 hover:text-gray-300">
          Team
        </Link>
      </h2>
      <div className="relative flex pt-4 text-white z-10">
        <a
          href={INSTAGRAM_LINK}
          className="mx-2 hover:text-gray-300"
          aria-label="Instagram"
        >
          <FaInstagram size="1.5em" />
        </a>
        <a
          href={GOOGLE_LINK}
          className="mx-2 hover:text-gray-300"
          aria-label="Google"
        >
          <FaGoogle size="1.5em" />
        </a>
        <a
          href={FACEBOOK_LINK}
          className="mx-2 hover:text-gray-300"
          aria-label="Facebook"
        >
          <FaFacebook size="1.5em" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
