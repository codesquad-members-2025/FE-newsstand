import { useContext } from 'react';

import { ModalContext } from '@/context/ModalContext';

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('모달 프로바이더로 감싸져있지 않은 상태입니다');
  }
  return context;
}
