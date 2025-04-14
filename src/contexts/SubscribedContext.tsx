import React, { createContext, useReducer, useContext, ReactNode } from "react";
import { pressTypes, pressType } from "../types/pressDataTypes";

// 전역 상태 타입: 구독한 언론사들을 배열로 관리
type SubscribedState = {
  subscriptions: pressTypes;
};

// 액션 타입 정의
type SubscribedAction =
  | { type: "ADD_SUBSCRIPTION"; payload: pressType }
  | { type: "REMOVE_SUBSCRIPTION"; payload: string }; // payload는 pid

// Reducer 함수: 액션에 따라 상태 업데이트
function subscribedReducer(
  state: SubscribedState,
  action: SubscribedAction
): SubscribedState {
  switch (action.type) {
    case "ADD_SUBSCRIPTION":
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };
    case "REMOVE_SUBSCRIPTION":
      return {
        ...state,
        subscriptions: state.subscriptions.filter(
          (media) => media.pid !== action.payload
        ),
      };
    default:
      throw new Error(`Unhandled action type`);
  }
}

// Context 생성: 상태와 디스패치 분리
const SubscribedStateContext = createContext<SubscribedState | undefined>(
  undefined
);
const SubscribedDispatchContext = createContext<
  React.Dispatch<SubscribedAction> | undefined
>(undefined);

// Provider 컴포넌트
interface SubscribedProviderProps {
  children: ReactNode;
}

export function SubscribedProvider({ children }: SubscribedProviderProps) {
  const [state, dispatch] = useReducer(subscribedReducer, {
    subscriptions: [],
  });

  // useMemo를 사용해 state를 메모이제이션
  const memoizedState = React.useMemo(() => state, [state]);

  return (
    <SubscribedStateContext.Provider value={memoizedState}>
      <SubscribedDispatchContext.Provider value={dispatch}>
        {children}
      </SubscribedDispatchContext.Provider>
    </SubscribedStateContext.Provider>
  );
}

// Custom Hooks: SubscribedContext 사용을 쉽게 하기 위한 hooks
export function useSubscribedState() {
  const context = useContext(SubscribedStateContext);
  if (context === undefined) {
    throw new Error(
      "useSubscribedState must be used within a SubscribedProvider"
    );
  }
  return context;
}

export function useSubscribedDispatch() {
  const context = useContext(SubscribedDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useSubscribedDispatch must be used within a SubscribedProvider"
    );
  }
  return context;
}
