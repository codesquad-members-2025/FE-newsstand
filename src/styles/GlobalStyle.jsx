/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const globalStyles = (theme) => css`
  ${emotionReset}

  body {
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Pretendard', sans-serif;
    background-color: ${theme.colors.surface.default};
    color: ${theme.colors.text.default};
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }
`;

export const GlobalStyle = () => <Global styles={globalStyles} />;
