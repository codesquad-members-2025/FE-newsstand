/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const ToggleButton = styled.button`
  font-size: 2rem;
  transition: transform 0.3s ease;
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    transform: scale(1.2);
  }

  position: relative;
  width: 2.5rem;
  height: 2.5rem;
`;

const iconStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease;
`;

export default function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <ToggleButton onClick={onToggle} aria-label="Toggle dark mode">
      <span css={[iconStyle, { opacity: isDarkMode ? 1 : 0 }]}>☀️</span>
      <span css={[iconStyle, { opacity: isDarkMode ? 0 : 1 }]}>🌙</span>
    </ToggleButton>
  );
}
