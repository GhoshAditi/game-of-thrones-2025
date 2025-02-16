'use client';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useAnimate, motion, AnimationScope } from 'framer-motion';
import { FiMenu, FiArrowUpRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import SVGIcon from '../common/SVGIcon';
import Link from 'next/link';
import { login } from '@/utils/functions/auth/login';
import { useUser } from '@/lib/stores/user';
import { supabase } from '@/utils/functions/supabase-client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { logout } from '@/utils/functions/auth/logout';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  return (
    <section>
      <GlassNavigation />
    </section>
  );
};

const GlassNavigation = () => {
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [scope, animate] = useAnimate();
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = ({ offsetX, offsetY, target }: MouseEvent) => {
    const isNavElement =
      target &&
      Array.from((target as HTMLElement).classList).includes('glass-nav');

    if (isNavElement) {
      setHovered(true);

      const top = offsetY + 'px';
      const left = offsetX + 'px';

      animate(scope.current, { top, left }, { duration: 0 });
    } else {
      setHovered(false);
    }
  };

  useEffect(() => {
    navRef.current?.addEventListener('mousemove', handleMouseMove);

    return () =>
      navRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav
      ref={navRef}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: hovered ? 'none' : 'auto',
      }}
      className="glass-nav fixed left-0 right-0 top-0 z-30 mx-auto overflow-hidden border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur md:left-6 md:right-6 md:top-6 md:rounded-2xl mb-10"
    >
      <div className="glass-nav flex items-center justify-between px-5 py-5">
        <Cursor hovered={hovered} scope={scope} />

        <Links />

        <Logo />

        <div className="flex flex-row items-center gap-4">
          {/* <GlassLink text="Coordinator" link="/events" />*/}{' '}
          {/* To be uncommented later */}
          <Buttons setMenuOpen={setMenuOpen} />
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Cursor = ({
  hovered,
  scope,
}: {
  hovered: boolean;
  scope: AnimationScope<any>;
}) => {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: hovered ? 1 : 0,
        transform: `scale(${
          hovered ? 1 : 0
        }) translateX(-50%) translateY(-50%)`,
      }}
      transition={{ duration: 0.15 }}
      ref={scope}
      className="pointer-events-none absolute z-0 grid h-[50px] w-[50px] origin-[0px_0px] place-content-center rounded-full bg-gradient-to-br from-indigo-600 from-40% to-indigo-400 text-2xl"
    >
      <FiArrowUpRight className="text-white" />
    </motion.span>
  );
};

const Logo = () => (
  <span className="pointer-events-none relative left-0 top-[50%] z-10 text-4xl font-black text-white mix-blend-overlay md:absolute md:left-[50%] md:-translate-x-[50%] md:-translate-y-[50%]">
    <SVGIcon iconName="logo" className="w-40 h-20" />
  </span>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex">
    <GlassLink text="Home" link="/" />
    <GlassLink text="Events" link="/events" />
    {/* <GlassLink text="Team" link="/team" /> */}
    <GlassLink text="Gallery" link="/gallery" />
    <GlassLink text="Contacts" link="/contacts" />
  </div>
);

const GlassLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
};

const TextLink = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className="text-white/90 transition-colors hover:text-white"
    >
      {text}
    </Link>
  );
};

const Buttons = ({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <div className="flex items-center gap-4">
    <div className="block md:hidden">
      <SignInButton />
    </div>
    <div className="hidden md:block">
      <SignInButton />
    </div>

    <button
      onClick={() => setMenuOpen((pv) => !pv)}
      className="ml-2 block scale-100 text-3xl text-white/90 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
    >
      <FiMenu />
    </button>
  </div>
);

export const SignInButton = () => {
  const { userData, userLoading, clearUserData } = useUser();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const readUserSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user.user_metadata?.avatar_url) {
        setProfileImage(data.session.user.user_metadata.avatar_url);
      }
    };
    readUserSession();
  }, []);

  if (userLoading) {
    return <Skeleton className="w-10 h-10 rounded-full bg-gray-600" />;
  }

  if (userData && profileImage) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="relative">
            {!imageLoaded && (
              <Skeleton className="w-10 h-10 rounded-full absolute inset-0" />
            )}
            <AvatarImage
              src={profileImage}
              alt="Profile"
              onLoad={() => setImageLoaded(true)}
              className={imageLoaded ? 'block' : 'hidden'}
            />
            <AvatarFallback>
              {!userLoading && userData?.name ? userData.name.charAt(0) : ''}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => {
              router.push('/profile');
            }}
          >
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={async () => {
              await supabase.auth.signOut();
              localStorage.removeItem('sb-session'); // Adjust based on storage mechanism
              clearUserData();
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <button
      className="group relative scale-100 overflow-hidden rounded-lg py-2 transition-transform hover:scale-105 active:scale-95"
      onClick={login}
    >
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white bg-blue-500 font-bold rounded-full px-4 py-2">
        Login
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }: { menuOpen: boolean }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : '0px',
      }}
      className="block overflow-hidden md:hidden"
    >
      <div
        ref={ref}
        className="flex flex-col items-start justify-between px-4 pb-4"
      >
        <div className="flex flex-col items-center gap-7">
          <TextLink text="Home" link="/" />
          <TextLink text="Team" link="/team" />
          <TextLink text="Events" link="/events" />
          <GlassLink text="Gallery" link="/gallery" />
          <GlassLink text="Contacts" link="/contacts" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
