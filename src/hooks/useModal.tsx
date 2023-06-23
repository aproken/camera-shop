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

// вызов "document.selector('.modal__overlay')" может быть проблематичным, особенно если есть несколько модальных окон с различными классами оверлея. Лучше передавать элемент оверлей явно в хук.
// проверка "evt.target === evt.currentTarget" не всегда будет работать правильно. это условие проверяет, что клик прооизошел именно на оверлей, а не на его дочерних элементах. Если внутри оверлей есть другие интерактивные элементы, такие как кнопки, ссылки, то клик по ним тоже может считаться за клик по оверлею и модальное окно будет закрываться. Лучшим решением будет передавать элемент оверлея явно и применять делегирование событий, чтобы определить, был ли клик на оверлее или на его дочерних элементах
