import { lazy } from 'react';

export const IconMap = {
  leftHero: lazy(() => import('./components/LeftHeroSVG')),
  rightHero: lazy(() => import('./components/RightHeroSVG')),
};
