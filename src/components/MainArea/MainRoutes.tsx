import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PressGrid from "./PressGrid/PressGrid";
import PressList from "./PressList/PressList";
import MainHeader from "./MainHeader/MainHeader";
import styled from "@emotion/styled";

const MainRoutes: React.FC = () => {
  const [allNewsData, setAllNewsData] = React.useState([]);

  const [currPressState, setCurrPressState] =
    React.useState<string>("all-press");
  const [currShowState, setCurrShowState] = React.useState<string>("list");

  // 뉴스 데이터 불러오기
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/mock-data/mockPressData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // 뉴스 데이터 저장
        setAllNewsData(data);
        console.log(allNewsData);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData();
  }, []);

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
          element={
            <PressGrid
              currPressState={currPressState}
              allNewsData={allNewsData}
            />
          }
        />
        <Route
          path="/press-list"
          element={
            <PressList
              currPressState={currPressState}
              allNewsData={allNewsData}
            />
          }
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
