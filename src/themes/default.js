import { lighten, darken } from 'polished';

const cPrimary = '#1533D1';
const cSecondary = '#FF8700';
const cGray = '#8e8e8e';

const cWarning = '#F16400';
const cError = '#C00500';
const cSuccess = '#00A550';

export const defaultTheme = {
  colors: {
    primary: cPrimary,
    primaryLighter: lighten(0.3, cPrimary),
    primaryLightest: lighten(0.45, cPrimary),
    primaryDarker: darken(0.2, cPrimary),
    primaryDarkest: darken(0.35, cPrimary),

    secondary: cSecondary,
    secondaryLighter: lighten(0.25, cSecondary),
    secondaryLightest: lighten(0.35, cSecondary),
    secondaryDarker: darken(0.15, cSecondary),
    secondaryDarkest: darken(0.35, cSecondary),

    grayLightest: lighten(0.4, cGray),
    grayLighter: lighten(0.25, cGray),
    gray: cGray,
    grayDarker: darken(0.15, cGray),
    grayDarkest: darken(0.35, cGray),

    success: cSuccess,
    successLighter: lighten(0.2, cSuccess),
    successLightest: lighten(0.55, cSuccess),
    warning: cWarning,
    warningLighter: lighten(0.2, cWarning),
    warningLightest: lighten(0.45, cWarning),
    error: cError,
    errorLighter: lighten(0.2, cError),
    errorLightest: lighten(0.5, cError),

    white: '#fff',
    black: '#000'
  },
  margins: {
    huge: '4rem',
    large: '2rem',
    normal: '1rem',
    small: '.5rem',
    tiny: '.2rem'
  },
  typography: {
    families: {
      primary: 'Helvetica',
      display: 'Helvetica'
    },
    sizes: {
      huge: '32px',
      large: '24px',
      normal: '16px',
      small: '14px',
      tiny: '12px'
    }
  }
};
