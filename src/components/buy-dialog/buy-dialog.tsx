import { useState } from 'react';
import Modal from '../modal/modal';
import AddItemModal from './add-item';
import { Camera } from '../../types/camera';
import AddItemSuccessModal from './add-item-success';
import { actions } from '../../store/basket-process/basket-process';
import { useAppDispatch } from '../../hooks';

type BuyDialogProps = {
  product: Camera;
  isOpen: boolean;
  onClose: () => void;
  onFinish?: () => void;
}

function BuyDialog({ product, isOpen, onClose, onFinish }: BuyDialogProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [element, setElement] = useState('form');

  const handleClose = () => {
    onClose();
    setElement('form');
  };

  const handleOnClick = () => {
    setElement('successWindow');
    dispatch(actions.addCameraToBasket(product));
  };

  return (
    <>
      <Modal isOpen={ isOpen && element === 'form' } onClose={ handleClose } >
        <AddItemModal product={ product } onClick={ handleOnClick } onClose={ handleClose } />
      </Modal>
      <Modal isOpen={ isOpen && element === 'successWindow' } onClose={ handleClose } >
        <AddItemSuccessModal onClose={ () => {
          handleClose();
          onFinish && onFinish();
        }}
        />
      </Modal>
    </>
  );
}

export default BuyDialog;
