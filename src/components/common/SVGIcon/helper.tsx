import { lazy } from 'react';

export const IconMap = {
  leftHero: lazy(() => import('./components/LeftHeroSVG')),
  helmet: lazy(() => import('./components/HelmetSVG')),
  football: lazy(() => import('./components/FootballSVG')),
  wrapperBg: lazy(() => import('./components/AboutAndEventsSvg')),
  sponsorsLines: lazy(() => import('./components/SponsorsLinesSVG')),
  logo: lazy(() => import('./components/LogoSVG')),
};
