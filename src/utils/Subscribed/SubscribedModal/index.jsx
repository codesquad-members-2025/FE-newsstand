import styled from "styled-components";
import { SubscribedModalContext } from "./SubscribedModalContext";
import { useEffect, useContext } from "react";
import { SubscribedContext } from "../SubscribedContext";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: all; /* 클릭 막음 */
`;
const AlertModalWrapper = styled.div`
  width: 20rem;
  height: 8.75rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid ${({ theme }) => theme.border.default};
  background-color: ${({ theme }) => theme.surface.default};
`;

const NoticeWrapper = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NoticeText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  border-top: 1px solid ${({ theme }) => theme.border.default};
`;
const ApproveButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  border-right: 1px solid ${({ theme }) => theme.border.default};
`;

const RefuseButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

function getNoticeText(press, isSubscribe) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <span>
        <strong>{press}</strong>을(를)
      </span>
      <span>구독{isSubscribe ? "해지" : null}하시겠습니까?</span>
    </>
  );
}
function getApproveText(isSubscribed) {
  const approveText = isSubscribed ? `예, 해지합니다` : `예, 구독합니다`;
  return approveText;
}

const refuseText = `아니오`;

export default function SubscribedModal() {
  const { toggleSubscribed } = useContext(SubscribedContext); //모달에서 관리해야함

  const { targetPress, isSubscribed, targetPid, clickSubscribedModal } =
    useContext(SubscribedModalContext);
  return (
    <ModalBackdrop>
      <AlertModalWrapper>
        <NoticeWrapper>
          <NoticeText>{getNoticeText(targetPress, isSubscribed)}</NoticeText>
        </NoticeWrapper>
        <ButtonWrapper>
          <ApproveButton
            onClick={() => {
              clickSubscribedModal();
              toggleSubscribed(targetPid);
            }}
          >
            {getApproveText(isSubscribed)}
          </ApproveButton>
          <RefuseButton onClick={clickSubscribedModal}>
            {refuseText}
          </RefuseButton>
        </ButtonWrapper>
      </AlertModalWrapper>
    </ModalBackdrop>
  );
}
