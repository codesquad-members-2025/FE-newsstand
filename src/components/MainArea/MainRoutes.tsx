import React from "react";
import { Routes, Route } from "react-router-dom";
import PressGrid from "./PressGrid/PressGrid";
import PressList from "./PressList/PressList";
import MainHeader from "./MainHeader/MainHeader";
import styled from "@emotion/styled";

const MainRoutes: React.FC = () => {
  return (
    <Container>
      <MainHeader />
      <Routes>
        <Route path="/press-grid" element={<PressGrid />} />
        <Route path="/press-list" element={<PressList />} />
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
