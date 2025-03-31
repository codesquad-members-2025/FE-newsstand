import React, { FC } from "react"; // 리액트 및 타입 정의 import
import styled from "@emotion/styled"; // styled-components or emotion 사용 시 (선택)
import pressListNotSelected from "../../../assets/press-icons/press-list-not-selected.svg";
import pressListSelected from "../../../assets/press-icons/press-list-selected.svg";
import pressGridNotSelected from "../../../assets/press-icons/press-grid-not-selected.svg";
import pressGridSelected from "../../../assets/press-icons/press-grid-selected.svg";
import { useNavigate } from "react-router-dom";

interface MyComponentProps {
  // 컴포넌트에 필요한 props 타입을 정의
  currShowState: string;
  setCurrShowState: React.Dispatch<React.SetStateAction<string>>;
}

const MainHeaderPressTab: FC<MyComponentProps> = ({
  currShowState,
  setCurrShowState,
}) => {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        {currShowState === "list" ? (
          <img
            className="press-list-selected"
            src={pressListSelected}
            alt="press-list-selected"
          />
        ) : (
          <img
            className="press-list-not-selected"
            src={pressListNotSelected}
            onClick={() => {
              setCurrShowState("list");
              navigate("/press-list");
            }}
            alt="press-list-not-selected"
          />
        )}
      </div>
      <div>
        {currShowState === "grid" ? (
          <img
            className="press-grid-selected"
            src={pressGridSelected}
            alt="press-grid-selected"
          />
        ) : (
          <img
            className="press-grid-not-selected"
            src={pressGridNotSelected}
            onClick={() => {
              setCurrShowState("grid");
              navigate("/press-grid");
            }}
            alt="press-grid-not-selected"
          />
        )}
      </div>
    </Container>
  );
};

export default MainHeaderPressTab;

// 아래는 Emotion styled 예시 (선택)
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 3.5rem;
  padding-top: 0.125rem;

  img {
    cursor: pointer;
  }

  .none {
    display: none;
  }
`;
