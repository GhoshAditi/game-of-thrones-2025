import { lazy } from 'react';

export const IconMap = {
  leftHero: lazy(() => import('./components/LeftHeroSVG')),
  rightHero: lazy(() => import('./components/RightHeroSVG')),
  gotLogo: lazy(() => import('./components/GOTLogoSVG')),
  footerbg: lazy(() => import('./components/FooterSVG')),
  backgroundHero: lazy(() => import('./components/BackgroundHero')),
  helmet: lazy(() => import('./components/HelmetSVG')),
  football: lazy(() => import('./components/FootballSVG')),
  wrapperBg: lazy(() => import('./components/AboutAndEventsSvg')),
  sponsorsLines: lazy(() => import('./components/SponsorsLinesSVG')),
  logo: lazy(() => import('./components/LogoSVG')),
  footerLeft: lazy(() => import('./components/FooterLeft')),
  footerRight: lazy(() => import('./components/FooterRight')),
};
