'use client';
import SVGIcon from '../common/SVGIcon';
import Image from 'next/image';
import { AnimatedButton } from './Button';
import { useRouter } from 'next/navigation';

function Sponsors() {
  const router = useRouter();
  return (
    <div className="relative bg-black flex flex-row flex-wrap items-center justify-center md:gap-20 w-full">
      {/* Football Image */}
      <Image
        src="/assets/football.png"
        alt="Football"
        width={240}
        height={240}
        className="block md:hidden"
      />

      {/* Football SVG */}
      <SVGIcon
        iconName="football"
        className="hidden md:block w-[500px] h-[500px] 2xl:w-[800px] 2xl:h-[800px]"
      />

      {/* Content Container */}
      <div className="text-white flex flex-col items-center md:items-start md:gap-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-center sm:text-left">
          Interested in sponsoring this <span className="block">event?</span>
        </h2>
        <div className="flex flex-row space-x-2 sm:space-x-4 items-center sm:items-start">
          <AnimatedButton text="Brochure" primary={true} />
          <AnimatedButton
            text="Contact"
            primary={false}
            onClick={() => {
              router.push('/contacts');
            }}
          />
        </div>
      </div>

      {/* Abstract Lines SVG - Moved behind content */}
      <SVGIcon
        iconName="sponsorsLines"
        className="absolute right-1 top-0 w-[850px] h-[750px] z-0"
      />
    </div>
  );
}

export default Sponsors;
