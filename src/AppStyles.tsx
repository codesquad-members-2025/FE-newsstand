/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const RootContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

// React 로고 전용 스타일 (hover 효과만 다르게 적용)
export const ReactLogo = styled(Logo)`
  &:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.p`
  color: #888;
`;

// 로고 스핀 애니메이션 keyframes
export const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 예시: 애니메이션을 적용한 로고 (필요 시 사용)
export const AnimatedLogo = styled(Logo)`
  animation: ${logoSpin} infinite 20s linear;

  @media (prefers-reduced-motion: no-preference) {
    &:nth-of-type(2) {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;
