import { ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

type ModalProps = {
  isOpen: boolean;
  hide: () => void;
  children: ReactNode;
  narrow?: boolean;
}

function Modal({isOpen, hide, children, narrow = false}: ModalProps): React.ReactPortal | null {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEscapePress = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        hide();
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

    if (isOpen) {
      document.addEventListener('keydown', handleEscapePress);
      document.addEventListener('focusin', handleFocusWithin);
      document.body.addEventListener('scroll', handleBodyScroll, { passive: false});
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscapePress);
      document.removeEventListener('focusin', handleFocusWithin);
      document.body.removeEventListener('scroll', handleBodyScroll);
      document.body.style.overflow = '';
    };
  }, [isOpen, hide]);

  return isOpen ? ReactDOM.createPortal(
    (
      <div className={ classNames('modal is-active', {'modal--narrow': narrow}) }
        ref={ modalRef }
        tabIndex={ -1 }
      >
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            aria-label="Закрыть попап"
            onClick={ hide }
          >
          </div>
          <div className="modal__content">
            { children }
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={ hide }
            >
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    ), document.body) : null;
}

export default Modal;
