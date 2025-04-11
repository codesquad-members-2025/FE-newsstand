import { useState, useMemo } from "react";
import { SubscribedModalContext } from "./SubscribedModalContext";

export default function SubscribedModalProvider({ children }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [targetPress, setTargetPress] = useState(null);
  const [isSubscribed, setisSubscribed] = useState(false);
  const [targetPid, setTargetPid] = useState(null);
  //어떤 버튼을 누르던 모달은 열기||닫기 -> 토글이용
  function clickSubscribedModal(
    tartgetPid = null,
    pressName = null,
    isSubscribed = null
  ) {
    if (tartgetPid !== null) setTargetPid(tartgetPid);
    if (pressName !== null) setTargetPress(pressName);
    if (isSubscribed !== null) setisSubscribed(Boolean(isSubscribed));
    setisModalOpen((prev) => !prev);
  }

  const value = useMemo(
    () => ({
      isModalOpen,
      clickSubscribedModal,
      targetPress,
      isSubscribed,
      targetPid,
    }),
    [isModalOpen, clickSubscribedModal, targetPress, isSubscribed, targetPid]
  );

  return (
    <SubscribedModalContext.Provider value={value}>
      {children}
    </SubscribedModalContext.Provider>
  );
}
