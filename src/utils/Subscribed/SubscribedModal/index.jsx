import styled from "styled-components";

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
  return (
    <>
      <span>
        <strong>{press}</strong>을(를)
      </span>
      <span>구독{isSubscribe ? null : 해지}하시겠습니까?</span>
    </>
  );
}
const approveText = `예, 해지합니다`;
const refuseText = `아니오`;

export default function SubscribedModal({ press, isSubscribe }) {
  return (
    <AlertModalWrapper>
      <NoticeWrapper>
        <NoticeText>{getNoticeText(press, isSubscribe)}</NoticeText>
      </NoticeWrapper>
      <ButtonWrapper>
        <ApproveButton>{approveText}</ApproveButton>
        <RefuseButton>{refuseText}</RefuseButton>
      </ButtonWrapper>
    </AlertModalWrapper>
  );
}
