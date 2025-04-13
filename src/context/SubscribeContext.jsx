import { createContext, useState } from 'react';

// Context 생성
export const SubscribeContext = createContext();

// Provider 컴포넌트
export const SubscribeProvider = ({ children }) => {
  const [subscribedPress, setSubscribedPress] = useState([]);

  // Press 구독 추가
  const addPressSubscription = (pressId) => {
    setSubscribedPress((prevPress) => [...prevPress, pressId]);
  };

  // Press 구독 제거
  const removePressSubscription = (pressId) => {
    setSubscribedPress((prevPress) => prevPress.filter((id) => id !== pressId));
  };

  return (
    <SubscribeContext.Provider
      value={{
        subscribedPress,
        addPressSubscription,
        removePressSubscription,
      }}
    >
      {children}
    </SubscribeContext.Provider>
  );
};
