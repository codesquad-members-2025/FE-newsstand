import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
// import { pressType } from "../../../types/pressDataTypes"; // pressType 타입 import

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  setPressIndex: React.Dispatch<React.SetStateAction<number>>;
  // data: (pressType & { category: string })[];
}

const PressListArrowArea: FC<MyComponentProps> = ({ setPressIndex }) => {
  const maxPage = 4; // 임시로 설정
  return (
    <Container>
      <img
        src="/src/assets/press-icons/LeftButton.svg"
        alt="left-arrow"
        onClick={() =>
          setPressIndex((prev) => (prev === 0 ? maxPage : prev - 1))
        }
      />
      <img
        src="/src/assets/press-icons/RightButton.svg"
        alt="right-arrow"
        onClick={() =>
          setPressIndex((prev) => (prev === maxPage ? 0 : prev + 1))
        }
      />
    </Container>
  );
};

export default PressListArrowArea;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: 3 / 1 / 3 / 3;
  margin-top: 1rem;
  cursor: pointer;
`;
