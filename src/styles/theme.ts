import { css } from 'styled-components';

export const theme = {
  colors: {
    background: '#FCFCFC',
    color: '#371FF0',
    black: '#000000',
    black80: '#000000EC',
    black60: '#000000C4',
    black50: '#000000CE',
    black40: '#000000C4',
    black20: '#000000B0',
    black10: '#000000A6',
    black5: '#000000A1',
  },
  fontStyles: {
    largeSB: css`
      font-size: 2rem;
      font-family: PretendardSemiBold;
    `,
    headingB: css`
      font-size: 1.6rem;
      font-family: PretendardBold;
    `,
    headingSB: css`
      font-size: 1.6rem;
      font-family: PretendardSemiBold;
    `,
    bodyMediumSB: css`
      font-size: 1.2rem;
      font-family: PretendardSemiBold;
    `,
    bodyMediumM: css`
      font-size: 1.2rem;
      font-family: PretendardMedium;
    `,
    bodyMediumR: css`
      font-size: 1.2rem;
      font-family: PretendardRegular;
    `,
    bodyMediumL: css`
      font-size: 1.2rem;
      font-family: PretendardLight;
    `,
    bodySmallM: css`
      font-size: 1rem;
      font-family: PretendardMedium;
    `,
    bodySmallR: css`
      font-size: 1rem;
      font-family: PretendardRegular;
    `,
    bodySmallL: css`
      font-size: 1rem;
      font-family: PretendardLight;
    `,
  },
  breakpoints: {
    mobile: '768px',
  },
};

export type Theme = typeof theme;

export default theme;
