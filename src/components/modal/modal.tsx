import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

type ModalProps = {
  isOpen: boolean;
  hide: () => void;
  children: ReactNode;
  narrow?: boolean;
}

function Modal({isOpen, hide, children, narrow = false}: ModalProps): React.ReactPortal | null {
  useEffect(() => {
    const handleEscapePress = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        hide();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscapePress);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen, hide]);

  return isOpen ? ReactDOM.createPortal(
    (
      <div className={classNames('modal is-active', {'modal--narrow': narrow})}>
        <div className="modal__wrapper">
          <div
            className="modal__overlay"
            onClick={hide}
          >
          </div>
          <div className="modal__content">
            {children}
            <button
              className="cross-btn"
              type="button"
              aria-label="Закрыть попап"
              onClick={hide}
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
