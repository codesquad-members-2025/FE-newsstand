import { typography, radius, shadow, grayscale, blue } from "./baseTheme";

const baseTheme = {
  typography,
  radius,
  shadow,
};

// darkTheme 색상 정의
const darkTheme = {
  ...baseTheme,
  colors: {
    grayscale,
    blue,
    text: {
      strong: "#FFFFFF",
      bold: "#F5F7F9",
      default: "#D2DAE0",
      weak: "#FFFFFFB3",
      whiteDefault: "#FFFFFF",
      whiteWeak: "#FFFFFFB3",
      point: "#4362D0",
    },
    surface: {
      default: "#14212B",
      alt: "#4B5966",
      brandDefault: "#4362D0",
      brandAlt: "#7890E7",
    },
    border: {
      bold: "#FFFFFFB3",
      default: "#5F6E76",
    },
  },
  border: {
    default: "1px solid #5F6E76",
  },
};

export default darkTheme;
