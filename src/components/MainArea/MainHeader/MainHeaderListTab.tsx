import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import { useSubscribedState } from "../../../contexts/SubscribedContext";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  currPressState: string;
  setCurrPressState: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeaderListTab: FC<MyComponentProps> = ({
  currPressState,
  setCurrPressState,
}) => {
  const navigate = useNavigate();
  const { subscriptions } = useSubscribedState();

  // const [newsData, setNewsData] = React.useState([]);
  // 아직 미구현 - UI 먼저 작업 중

  return (
    <Container>
      <div
        className="all-press-area"
        onClick={() => {
          setCurrPressState("all-press");
          navigate("/press-grid-all-press");
        }}
      >
        <p
          // className={`${currPressState === "all-press" ? "strong" : "normal"}`}
          className={currPressState === "all-press" ? "strong" : "normal"}
        >
          전체 언론사
        </p>
      </div>
      <div
        className="my-press-area"
        onClick={() => {
          setCurrPressState("my-press");
          navigate("/press-grid-my-press");
        }}
      >
        <p className={`${currPressState === "my-press" ? "strong" : "normal"}`}>
          내가 구독한 언론사
        </p>
        <div className="my-press-count">{subscriptions.length}</div>
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

  .all-press-area {
    cursor: pointer;
  }

  .my-press-area {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .strong {
    font-weight: ${({ theme }) => theme.typo.bold16.fontWeight} !important;
    font-size: ${({ theme }) => theme.typo.bold16.fontSize} !important;
    line-height: ${({ theme }) => theme.typo.bold16.lineHeight} !important;
    color: ${({ theme }) => theme.colors.text.strong} !important;
  }

  .normal {
    font-weight: ${({ theme }) => theme.typo.medium16.fontWeight};
    font-size: ${({ theme }) => theme.typo.medium16.fontSize};
    line-height: ${({ theme }) => theme.typo.medium16.lineHeight};
    color: ${({ theme }) => theme.colors.text.weak};
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
