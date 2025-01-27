import { lazy } from 'react';

export const IconMap = {
  leftHero: lazy(() => import('./components/LeftHeroSVG')),
  rightHero: lazy(() => import('./components/RightHeroSVG')),
  gotLogo: lazy(() => import('./components/GOTLogoSVG')),
  footerbg: lazy(() => import('./components/FooterSVG')),
  backgroundHero: lazy(() => import('./components/BackgroundHero')),
};
