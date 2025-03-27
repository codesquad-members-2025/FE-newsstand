import React from "react";
import { Routes, Route } from "react-router-dom";
import PressGridPage from "./pages/PressGridPage/PressGridPage";
import PressListPage from "./pages/PressListPage/PressListPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/press-grid" element={<PressGridPage />} />
      <Route path="/press-list" element={<PressListPage />} />
      <Route path="/" element={<PressListPage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
