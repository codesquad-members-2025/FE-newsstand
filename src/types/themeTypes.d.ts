import "@emotion/react"; // 꼭 필요

// baseTheme.tsx, lightTheme.tsx, darkTheme.tsx 에서 export된 객체 모양에 맞춘 타입 설정
declare module "@emotion/react" {
  export interface Theme {
    typo: {
      bold24: { fontWeight: number; fontSize: string; lineHeight: string };
      bold16: { fontWeight: number; fontSize: string; lineHeight: string };
      bold14: { fontWeight: number; fontSize: string; lineHeight: string };
      bold12: { fontWeight: number; fontSize: string; lineHeight: string };
      medium16: { fontWeight: number; fontSize: string; lineHeight: string };
      medium14: { fontWeight: number; fontSize: string; lineHeight: string };
      medium12: { fontWeight: number; fontSize: string; lineHeight: string };
      regular14: { fontWeight: number; fontSize: string; lineHeight: string };
      regular12: { fontWeight: number; fontSize: string; lineHeight: string };
    };
    radius: {
      full: string;
      medium: string;
    };
    shadow: {
      popup: string;
    };
    colors: {
      grayscale: {
        white: string;
        whiteAlt: string;
        gray50: string;
        gray100: string;
        gray200: string;
        gray300: string;
        gray400: string;
        gray500: string;
        black: string;
      };
      blue: {
        blue100: string;
        blue500: string;
      };
      text: {
        strong: string;
        bold: string;
        default: string;
        weak: string;
        whiteDefault: string;
        whiteWeak: string;
        point: string;
      };
      surface: {
        default: string;
        alt: string;
        brandDefault: string;
        brandAlt: string;
      };
      border: {
        bold: string;
        default: string;
      };
    };
    border: {
      default: string;
    };
  }
}
