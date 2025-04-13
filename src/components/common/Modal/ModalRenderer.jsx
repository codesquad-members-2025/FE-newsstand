import Modal from './Modal';
import { useModal } from './useModal';

export function ModalRenderer() {
  const { isOpen, targetName, onConfirm, closeModal } = useModal();

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
    closeModal();
  };

  return (
    <Modal
      targetName={targetName}
      isModalOpen={isOpen}
      onConfirm={handleConfirm}
      onModalClose={closeModal}
    />
  );
}
