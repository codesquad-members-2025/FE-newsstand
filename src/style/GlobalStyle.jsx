// src/styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    color: #4E4B66;
    font-family: sans-serif;
    
  }
`;

export default GlobalStyle;
