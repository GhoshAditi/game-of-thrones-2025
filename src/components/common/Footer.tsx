import { FaInstagram, FaGoogle, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import SVGIcon from './SVGIcon';

const ABOUT_LINK = '/about';
const EVENTS_LINK = '/events';
const TEAM_LINK = '/team';
const INSTAGRAM_LINK = 'https://www.instagram.com';
const GOOGLE_LINK = 'https://www.google.com';
const FACEBOOK_LINK = 'https://www.facebook.com';

const Footer = () => {
  return (
    <div
      style={{
        background:
          'linear-gradient(357.15deg, #9158FF 2.25%, rgba(146, 155, 255, 0.61) 97.52%)',
      }}
      className="flex flex-row items-center justify-between"
    >
      <SVGIcon iconName="footerLeft" />
      <div className="flex flex-col w-1/2 items-center justify-center">
        <div className="relative w-full">
          <SVGIcon
            iconName="gotLogo"
            className="w-[20vw] h-fit md:h-[30vh] flex justify-center mx-auto "
          />
          <h1 className="font-got absolute top-[50%] mx-auto w-full my-auto text-xl md:text-4xl text-center font-semibold tracking-wider">
            GAME OF THRONES
          </h1>
        </div>
        <div className="flex flex-row flex-wrap font-sargento text-base md:text-3xl mt-4 md:mt-10 justify-center items-center gap-4 md:gap-10">
          <Link href={ABOUT_LINK}>About</Link>
          <Link href={EVENTS_LINK}>Events</Link>
          <Link href={TEAM_LINK}>Team</Link>
        </div>
        <div className="flex flex-row gap-5 mt-10">
          <Link href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            <FaInstagram size={30} color="white" />
          </Link>
          <Link href={GOOGLE_LINK} target="_blank" rel="noreferrer">
            <FaGoogle size={30} color="white" />
          </Link>
          <Link href={FACEBOOK_LINK} target="_blank" rel="noreferrer">
            <FaFacebook size={30} color="white" />
          </Link>
        </div>
        {/* <p className='text-white text-center mt-5 font-semibold'>© 2025 Game of Thrones. All rights reserved.</p> */}
      </div>
      <SVGIcon iconName="footerRight" />
    </div>
  );
};

export default Footer;
