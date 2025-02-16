import { css } from 'styled-components';

export const theme = {
  colors: {
    white: '#FFFFFF',
    background: '#FCFCFC',
    mainColor: '#371FF0',
    black: '#000000',
    black80: '#000000CC',
    black60: '#00000099',
    black50: '#00000080',
    black40: '#00000066',
    black20: '#00000033',
    black10: '#0000001A',
    black5: '#0000000D',
    sColor1: '#884EDA',
    sColor2: '#F3DCFF',
    sColor3: '#26B11C',
    sColor4: '#DA2528',
  },
  fontStyles: {
    large1B: css`
      font-size: 2.4rem;
      font-family: PretendardSemiBold;
    `,
    large2B: css`
      font-size: 2rem;
      font-family: PretendardBold;
    `,
    large2SB: css`
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
    headingR: css`
      font-size: 1.6rem;
      font-family: PretendardRegular;
    `,
    head2B: css`
      font-size: 1.4rem;
      font-family: PretendardBold;
    `,
    head2SB: css`
      font-size: 1.4rem;
      font-family: PretendardSemiBold;
    `,
    head2M: css`
      font-size: 1.4rem;
      font-family: PretendardMedium;
    `,
    head2R: css`
      font-size: 1.4rem;
      font-family: PretendardRegular;
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
