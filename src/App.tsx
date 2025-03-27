import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AutoRollingArea from "./components/AutoRollingArea/AutoRollingArea";
import PressGridPage from "./pages/PressGridPage/PressGridPage";
import PressListPage from "./pages/PressListPage/PressListPage";
import { ThemeProvider } from "@emotion/react";
import darkTheme from "./styles/theme/darkTheme.tsx";
import lightTheme from "./styles/theme/lightTheme.tsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {/* 공통으로 보여주고 싶은 헤더 */}
        <Header toggleTheme={toggleTheme} />
        <AutoRollingArea />

        {/* 페이지별로 다른 화면을 보여주는 라우트 설정 */}
        <Routes>
          {/* 예: /press-grid → PressGridPage */}
          <Route path="/press-grid" element={<PressGridPage />} />
          {/* 예: /press-list → PressListPage */}
          <Route path="/press-list" element={<PressListPage />} />

          {/* "/" 경로 접속 시 바로 /press-grid로 이동시키는 예시 */}
          <Route path="/" element={<PressListPage />} />

          {/* 404 처리용 또는 라우트가 없을 때 */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
