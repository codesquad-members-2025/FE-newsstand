import styled from '@emotion/styled';
import { useEffect } from 'react';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.surface.default};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  border-bottom: none;
  box-shadow: ${({ theme }) => theme.shadow.popup};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  color: ${({ theme }) => theme.colors.text.default};
  ${({ theme }) => theme.typography.m16};
`;

const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.text.strong};
  ${({ theme }) => theme.typography.b16};
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  gap: 1px;
  background-color: ${({ theme }) => theme.colors.border.default};
`;

const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.surface.alt};
  color: ${({ emphasized, theme }) =>
    emphasized ? theme.colors.text.strong : theme.colors.text.default};

  ${({ theme }) => theme.typography.m16};

  &:hover {
    text-decoration: underline;
  }
`;

const Modal = ({ targetName, isModalOpen, onConfirm, onModalClose }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <ModalContainer>
      <ModalContent>
        <TitleGroup>
          <p>
            <StyledText>{targetName}</StyledText>을(를)
          </p>
          <p>구독해지하시겠습니까?</p>
        </TitleGroup>
        <ButtonGroup>
          <Button onClick={onConfirm}>예, 해지합니다</Button>
          <Button emphasized onClick={onModalClose}>
            아니오
          </Button>
        </ButtonGroup>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
