import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import darkTheme from "../styles/theme/darkTheme";
import lightTheme from "../styles/theme/lightTheme";

// theme 타입 정의
type ThemeState = {
  isDarkMode: boolean;
};

// 액션 타입 정의
type ThemeAction = { type: "TOGGLE_THEME" };

// Reducer 함수: TOGGLE_THEME 액션으로 상태 업데이트
function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

// Context 생성
const ThemeStateContext = createContext<ThemeState | null>(null);
const ThemeDispatchContext = createContext<React.Dispatch<ThemeAction> | null>(
  null
);

// ThemeProvider 컴포넌트
interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  // (1) 리듀서로 isDarkMode 제어
  const [state, dispatch] = useReducer(themeReducer, {
    isDarkMode: false, // 초기값
  });

  // (2) isDarkMode 값에 따라 테마 분기
  const currentTheme = state.isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {/* (3) EmotionThemeProvider로 한번 더 감싸기 */}
        <EmotionThemeProvider theme={currentTheme}>
          {children}
        </EmotionThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  );
}

// Custom Hooks: ThemeContext를 쉽게 사용하기 위한 hook들
export function useThemeState() {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error("Cannot find ThemeProvider");
  return state;
}

export function useThemeDispatch() {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error("Cannot find ThemeProvider");
  return dispatch;
}
