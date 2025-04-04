import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  toggleTheme: () => void;
}

const HeaderToggle: FC<MyComponentProps> = ({ toggleTheme }) => {
  return (
    <Container>
      <button onClick={toggleTheme}>테마 변경</button>
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
`;
