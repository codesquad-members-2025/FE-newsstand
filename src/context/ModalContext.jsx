import { createContext, useState, useMemo } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [targetName, setTargetName] = useState('');
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const openModal = ({ targetName, onConfirm }) => {
    setTargetName(targetName);
    setOnConfirm(() => onConfirm); // 함수로 감싸줘야 최신 참조 유지할 수 있다!
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTargetName('');
    setOnConfirm(() => () => {}); // 초기화
  };

  const value = useMemo(
    () => ({
      isOpen,
      targetName,
      onConfirm,
      openModal,
      closeModal,
    }),
    [isOpen, targetName, onConfirm]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
}
