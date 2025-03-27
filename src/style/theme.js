import { grayscale, blue } from "./colors";

export const lightTheme = {
  text: {
    strong: grayscale.black,
    bold: grayscale[500],
    default: grayscale[400],
    weak: grayscale[200],
    whiteDefault: grayscale.white,
    whiteWeak: grayscale.whiteAlt,
    point: blue[500],
  },
  surface: {
    default: grayscale.white,
    alt: grayscale[50],
    brandDefault: blue[500],
    brandAlt: blue[100],
  },
  border: {
    bold: grayscale[300],
    default: grayscale[100],
  },
  background: grayscale.white,
};

export const darkTheme = {
  text: {
    strong: grayscale.white,
    bold: grayscale[50],
    default: grayscale[100],
    weak: grayscale.whiteAlt,
    whiteDefault: grayscale.white,
    whiteWeak: grayscale.whiteAlt,
    point: blue[500],
  },
  surface: {
    default: grayscale.black,
    alt: grayscale[500],
    brandDefault: blue[500],
    brandAlt: blue[100],
  },
  border: {
    bold: grayscale.whiteAlt,
    default: grayscale[400],
  },
  background: grayscale.black,
};
