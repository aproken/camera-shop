import { useEffect, useState, useRef } from 'react';

interface IUseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

function useModal(): IUseModal {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLElement>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleEscapePress = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    };

    const handleOverlayClick: EventListener = (evt) => {
      if(overlayRef.current && overlayRef.current === evt.target) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapePress);
      document.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [isOpen]);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

export default useModal;

