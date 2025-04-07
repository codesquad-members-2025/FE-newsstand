import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { pressTypes } from "../types/pressDataTypes";

// 뉴스 데이터 상태 타입 정의
type NewsState = {
  data: pressTypes | null;
};

// 뉴스 데이터를 저장하기 위한 액션 타입
type NewsAction = {
  type: "SET_NEWS";
  payload: pressTypes;
};

// Reducer 함수: SET_NEWS 액션으로 상태 업데이트
function newsReducer(state: NewsState, action: NewsAction): NewsState {
  switch (action.type) {
    case "SET_NEWS":
      return { ...state, data: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// NewsContext 타입 정의
type NewsContextType = {
  state: NewsState;
  dispatch: React.Dispatch<NewsAction>;
};

// NewsContext 생성
const NewsContext = createContext<NewsContextType | undefined>(undefined);

// NewsProvider 컴포넌트: 마운트 시 뉴스 데이터를 fetch하여 저장
interface NewsProviderProps {
  children: ReactNode;
}

export function NewsProvider({ children }: NewsProviderProps) {
  const [state, dispatch] = useReducer(
    newsReducer,
    { data: null } // 초기값
  );

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch("/mock-data/mockPressData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch news data");
        }
        const data: pressTypes = await response.json();
        dispatch({ type: "SET_NEWS", payload: data });
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <NewsContext.Provider value={{ state, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}

// Custom Hook: NewsContext를 쉽게 사용하기 위한 hook
export function useNewsContext() {
  const context = useContext(NewsContext);
  if (context === undefined) {
    throw new Error("useNewsContext must be used within a NewsProvider");
  }
  return context;
}
