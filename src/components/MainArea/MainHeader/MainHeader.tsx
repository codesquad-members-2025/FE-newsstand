import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import MainHeaderListTab from "./MainHeaderListTab";
import MainHeaderPressTab from "./MainHeaderPressTab";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  currPressState: string;
  currShowState: string;
  setCurrPressState: React.Dispatch<React.SetStateAction<string>>;
  setCurrShowState: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeader: FC<MyComponentProps> = ({
  currPressState,
  currShowState,
  setCurrPressState,
  setCurrShowState,
}) => {
  return (
    <Container>
      <MainHeaderListTab
        currPressState={currPressState}
        setCurrPressState={setCurrPressState}
      />
      <MainHeaderPressTab
        currShowState={currShowState}
        setCurrShowState={setCurrShowState}
      />
    </Container>
  );
};

export default MainHeader;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  margin-top: 0.688rem;
  margin-bottom: 1.563rem;
`;
