import { useState } from 'react';
import Modal from '../modal/modal';
import ReviewForm from './review-form';
import ReviewSuccessModal from './review-success-modal';
import { ReviewData } from '../../types/review-data';
import { useAppDispatch } from '../../hooks';
import { fetchAddNewReviewAction } from '../../store/api-action';

type ReviewDialogProps = {
  productId: number;
  isOpen: boolean;
  hide: () => void;
}

function ReviewDialog({productId, isOpen, hide}: ReviewDialogProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [element, setElement] = useState('form');

  const handleSubmitForm = (formData: ReviewData) => {
    dispatch(fetchAddNewReviewAction(formData))
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('DISPATH', data);
        setElement('successWindow');
      })
      // eslint-disable-next-line no-console
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('dispath', error);
        // TODO: setElement('failureWindow');
      });
  };
  const handleClose = () => {
    hide();
    setElement('form');
  };

  return (
    <>
      <Modal isOpen={isOpen && element === 'form'} hide={handleClose}>
        <ReviewForm productId={productId} onSubmit={handleSubmitForm} />
      </Modal>
      <Modal isOpen={isOpen && element === 'successWindow'} hide={handleClose} narrow>
        <ReviewSuccessModal hide={handleClose} />
      </Modal>
    </>
  );
}

export default ReviewDialog;
