import { useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import Modal from '../modal/modal';
import ReviewForm from './review-form';
import ReviewSuccessModal from './review-success-modal';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch } from '../../hooks';
import { fetchAddNewReviewAction } from '../../store/api-action';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import ReviewErrorModal from './review-error-modal';

type ReviewDialogProps = {
  productId: number;
  isOpen: boolean;
  onClose: () => void;
}

function ReviewDialog({productId, isOpen, onClose}: ReviewDialogProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [element, setElement] = useState('form');

  const handleSubmitForm = (formData: ReviewData) => {
    setElement('loaderWindow');
    dispatch(fetchAddNewReviewAction(formData))
      .then((data) => unwrapResult(data))
      .then( () => setElement('successWindow'))
      .catch( (error) => {
        setElement('failureWindow');
      });
  };

  const handleClose = () => {
    onClose();
    setElement('form');
  };

  return (
    <>
      <Modal isOpen={ isOpen && element === 'form' } onClose={ handleClose }>
        <ReviewForm productId={productId} onSubmit={(evt) => void handleSubmitForm(evt)} />
      </Modal>
      <Modal isOpen={ isOpen && element === 'successWindow' } onClose={ handleClose } narrow>
        <ReviewSuccessModal onClose={ handleClose } />
      </Modal>
      <Modal isOpen={ isOpen && element === 'failureWindow' } onClose={ handleClose } narrow>
        <ReviewErrorModal />
      </Modal>
      <Modal isOpen={ isOpen && element === 'loaderWindow' } onClose={ handleClose } narrow>
        <LoadingScreen />
      </Modal>
    </>
  );
}

export default ReviewDialog;
