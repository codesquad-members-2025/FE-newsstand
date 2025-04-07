import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { useThemeState } from "../../../contexts/ThemeContext";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  id: number;
  logoDark: string;
  logoLight: string;
}

const PressGridElem: FC<MyComponentProps> = ({ id, logoDark, logoLight }) => {
  const { isDarkMode } = useThemeState();

  return (
    <Container key={id}>
      <img src={isDarkMode ? logoDark : logoLight} alt="Logo" />
    </Container>
  );
};

export default PressGridElem;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  border: 0.5px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 52.5px;
    height: 20px;
  }
`;
