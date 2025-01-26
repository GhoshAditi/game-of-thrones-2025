import { lazy } from 'react';
import FootballPlayerSVG from './components/FootballPlayerSVG';

export const IconMap = {
  leftHero: lazy(() => import('./components/LeftHeroSVG')),
  helmet: lazy(() => import('./components/HelmetSVG')),
  football: lazy(() => import('./components/FootballSVG')),

  sponsorsLines: lazy(() => import('./components/SponsorsLinesSVG')),
  logo: lazy(() => import('./components/LogoSVG')),
};
