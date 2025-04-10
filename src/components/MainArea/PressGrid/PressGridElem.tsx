import React, { FC, useState, useCallback } from "react";
import styled from "@emotion/styled";
import { useThemeState } from "../../../contexts/ThemeContext";
import {
  useSubscribedState,
  useSubscribedDispatch,
} from "../../../contexts/SubscribedContext";
import { NewsItem } from "../../../types/pressDataTypes";

interface PressGridElemProps {
  name: string;
  regDate: string;
  logoDark: string;
  logoLight: string;
  dataId: number; // pid (number 타입이라고 가정)
  materials: NewsItem[];
}

const PressGridElem: FC<PressGridElemProps> = ({
  name,
  regDate,
  materials,
  dataId,
  logoDark,
  logoLight,
}) => {
  // 다크모드 여부 가져오기
  const { isDarkMode } = useThemeState();

  // 구독 상태 및 디스패치
  const { subscriptions } = useSubscribedState();
  const dispatch = useSubscribedDispatch();

  // 현재 셀(언론사)가 구독 되었는지 여부
  const isSubscribed = subscriptions.some(
    (media) => media.pid === dataId.toString()
  );

  // 마우스 오버 상태 관리
  const [hovered, setHovered] = useState(false);

  // 구독하기 함수 (메모이제이션 적용)
  const handleSubscribe = useCallback(() => {
    dispatch({
      type: "ADD_SUBSCRIPTION",
      payload: {
        pid: dataId.toString(),
        logoDark,
        logoLight,
        name,
        regDate,
        materials,
      },
    });
  }, [dispatch, dataId, logoDark, logoLight, name, regDate, materials]);

  // 구독 해제하기 함수 (메모이제이션 적용)
  const handleUnsubscribe = useCallback(() => {
    dispatch({
      type: "REMOVE_SUBSCRIPTION",
      payload: dataId.toString(),
    });
  }, [dispatch, dataId]);

  return (
    <Container
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 언론사 로고 */}
      <img src={isDarkMode ? logoDark : logoLight} alt="Press Logo" />

      {/* 'hovered'가 true인 경우 버튼 표시 */}
      {hovered && (
        <Button>
          {isSubscribed ? (
            <img
              src="/src/assets/press-icons/UnsubscribeBtn.svg"
              alt="Unsubscribe button"
              onClick={handleUnsubscribe}
            />
          ) : (
            <img
              src="/src/assets/press-icons/SubscribeBtn.svg"
              alt="Subscribe button"
              onClick={handleSubscribe}
            />
          )}
        </Button>
      )}
    </Container>
  );
};

export default React.memo(PressGridElem);

// Styled Components 예시 (Emotion)
const Container = styled.div`
  border: 0.5px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 버튼 위치를 절대값으로 띄우고 싶다면 */

  img {
    height: 1.25rem;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 1.25rem;
  position: absolute;
  bottom: 2.4065rem; /* 원하는 위치 조정 */
  background-color: #fff;
  cursor: pointer;
`;
