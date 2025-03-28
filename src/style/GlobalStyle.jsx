// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

// Pretendard woff imports
import PretendardThin from "@fonts/Pretendard-Thin.woff";
import PretendardExtraLight from "@fonts/Pretendard-ExtraLight.woff";
import PretendardLight from "@fonts/Pretendard-Light.woff";
import PretendardRegular from "@fonts/Pretendard-Regular.woff";
import PretendardMedium from "@fonts/Pretendard-Medium.woff";
import PretendardSemiBold from "@fonts/Pretendard-SemiBold.woff";
import PretendardBold from "@fonts/Pretendard-Bold.woff";
import PretendardExtraBold from "@fonts/Pretendard-ExtraBold.woff";
import PretendardBlack from "@fonts/Pretendard-Black.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraLight}) format('woff');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraBold}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    border: 1px solid red 
  }

  html, body, #root {
    font-size: 16px;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.surface.default};
    color: ${({ theme }) => theme.text.default};
    font-family: 'Pretendard'
    
  }
`;

export default GlobalStyle;
