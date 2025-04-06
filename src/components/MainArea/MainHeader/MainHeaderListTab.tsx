import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  setCurrPressState: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeaderListTab: FC<MyComponentProps> = ({ setCurrPressState }) => {
  // const [newsData, setNewsData] = React.useState([]);
  setCurrPressState("all-press");
  setCurrPressState("my-press");
  // 아직 미구현 - UI 먼저 작업 중

  return (
    <Container>
      <div>전체 언론사</div>
      <div className="my-press-area">
        <p>내가 구독한 언론사</p>
        <div className="my-press-count">8</div>
      </div>
    </Container>
  );
};

export default MainHeaderListTab;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;

  .my-press-area {
    display: flex;
    align-items: center;
  }

  .my-press-count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    margin-left: 0.25rem;
    background-color: ${({ theme }) => theme.colors.surface.brandAlt};
    color: ${({ theme }) => theme.colors.text.whiteWeak};
    font-size: ${({ theme }) => theme.typo.medium12.fontSize};
    border-radius: 40%;
  }

  .strong {
    font-weight: ${({ theme }) => theme.typo.bold16.fontWeight};
    font-size: ${({ theme }) => theme.typo.bold16.fontSize};
    line-height: ${({ theme }) => theme.typo.bold16.lineHeight};
  }
`;
