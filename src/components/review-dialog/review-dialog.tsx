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
  hide: () => void;
}

function ReviewDialog({productId, isOpen, hide}: ReviewDialogProps): JSX.Element {
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
    hide();
    setElement('form');
  };

  return (
    <>
      <Modal isOpen={ isOpen && element === 'form' } hide={handleClose}>
        <ReviewForm productId={productId} onSubmit={(evt) => void handleSubmitForm(evt)} />
      </Modal>
      <Modal isOpen={ isOpen && element === 'successWindow' } hide={ handleClose } narrow>
        <ReviewSuccessModal hide={ handleClose } />
      </Modal>
      <Modal isOpen={ isOpen && element === 'failureWindow' } hide={ handleClose } narrow>
        <ReviewErrorModal />
      </Modal>
      <Modal isOpen={ isOpen && element === 'loaderWindow' } hide={ handleClose } narrow>
        <LoadingScreen />
      </Modal>
    </>
  );
}

export default ReviewDialog;
