import classNames from 'classnames';
import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';


type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  narrow?: boolean;
}

function Modal({isOpen, onClose, children, narrow = false}: ModalProps): React.ReactPortal | null {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);
  const lastFocusableElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleEscapePress = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        onClose();
      }
    };

    const handleFocusWithin = (evt: Event) => {
      if(modalRef.current && !modalRef.current.contains(evt.target as Node)) {
        modalRef.current.focus();
      }
    };

    const handleBodyScroll = (evt: Event) => {
      if (isOpen) {
        evt.preventDefault();
      }
    };

    const handleTabPress = (evt: KeyboardEvent) => {
      if (!modalRef.current) {return;}

      if (evt.key === 'Tab') {
        if (evt.shiftKey && document.activeElement === firstFocusableElementRef.current) {
          // Shift + Tab на первом элементе, перенаправляем фокус на последний элемент
          evt.preventDefault();
          lastFocusableElementRef.current?.focus();
        } else if (!evt.shiftKey && document.activeElement === lastFocusableElementRef.current) {
          // Tab на последнем элементе, перенаправляем фокус на первый элемент
          evt.preventDefault();
          firstFocusableElementRef.current?.focus();
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapePress);
      document.addEventListener('focusin', handleFocusWithin);
      document.body.addEventListener('scroll', handleBodyScroll, { passive: false });
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
      document.addEventListener('keydown', handleTabPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('focusin', handleFocusWithin);
      document.body.removeEventListener('scroll', handleBodyScroll);
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleTabPress);
    };
  }, [isOpen, onClose]);

  return isOpen ? ReactDOM.createPortal(
    (
      <div className={ classNames('modal is-active', {'modal--narrow': narrow}) }
        ref={ modalRef }
      >
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            aria-label="Закрыть попап"
            onClick={ onClose }
          >
          </div>
          <div className="modal__content">
            <FocusLock>
              { children }
              <button
                className="cross-btn"
                type="button"
                aria-label="Закрыть попап"
                onClick={ onClose }
              >
                <svg width="10" height="10" aria-hidden="true">
                  <use xlinkHref="#icon-close"></use>
                </svg>
              </button>
            </FocusLock>
          </div>
        </div>
      </div>
    ), document.body) : null;
}

export default Modal;
