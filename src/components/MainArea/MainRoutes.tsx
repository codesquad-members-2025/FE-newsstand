import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PressGrid from "./PressGrid/PressGrid";
import PressList from "./PressList/PressList";
import MainHeader from "./MainHeader/MainHeader";
import styled from "@emotion/styled";

const MainRoutes: React.FC = () => {
  const [currPressState, setCurrPressState] =
    React.useState<string>("all-press");
  const [currShowState, setCurrShowState] = React.useState<string>("list");

  useEffect(() => {
    if (currPressState === "all-press") {
      // 전체 언론사
    } else {
      // currPressState === "my-press"
      // 내가 구독한 언론사
    }
  }, [currPressState]);

  return (
    <Container>
      <MainHeader
        currShowState={currShowState}
        setCurrShowState={setCurrShowState}
        setCurrPressState={setCurrPressState}
      />
      <Routes>
        <Route
          path="/press-grid"
          element={<PressGrid currPressState={currPressState} />}
        />
        <Route
          path="/press-list"
          element={<PressList currPressState={currPressState} />}
        />
        <Route path="/" element={<PressList />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </Container>
  );
};

export default MainRoutes;

const Container = styled.div`
  flex-direction: column;
  height: 27.25rem;
`;
