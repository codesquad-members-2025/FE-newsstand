import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import PressListNav from "./PressListNav";
import PressListMainNews from "./PressListMainNews";
import PressListSubNews from "./PressListSubNews";
import PressListArrowArea from "./PressListArrowArea";

// interface MyComponentProps {
//   // 컴포넌트에 필요한 props 타입을 정의
//   title?: [];
// }

const PressListContent: FC = () => {
  return (
    <Container>
      <PressListNav />
      <PressListMainNews />
      <PressListSubNews />
      <PressListArrowArea />
    </Container>
  );
};

export default PressListContent;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: grid;
  grid-template-columns: 320px 530px;
  grid-template-rows: 24px 260px 32px;
  gap: 2rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border.default};
`;
