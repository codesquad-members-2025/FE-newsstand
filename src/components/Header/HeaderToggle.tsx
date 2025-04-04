import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { useThemeState, useThemeDispatch } from "../../contexts/ThemeContext";

const HeaderToggle: FC = () => {
  const { isDarkMode } = useThemeState();
  const dispatch = useThemeDispatch();
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <Container>
      <button onClick={handleToggle}>{isDarkMode ? "🌙" : "☀️"}</button>
    </Container>
  );
};

export default HeaderToggle;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-weight: ${({ theme }) => theme.typo.regular12.fontWeight};
  font-size: ${({ theme }) => theme.typo.regular12.fontSize};
  line-height: ${({ theme }) => theme.typo.regular12.lineHeight};

  button {
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.weak};
    font-size: ${({ theme }) => theme.typo.bold24.fontSize};

    &:hover {
      color: ${({ theme }) => theme.colors.text.strong};
      border: none;
    }

    &:focus,
    &:active {
      outline: none;
      border: none;
    }
  }
`;
