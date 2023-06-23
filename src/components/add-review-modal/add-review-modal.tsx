import { useState, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import useModal from '../../hooks/useModal';
import { fetchAddNewReviewAction } from '../../store/api-action';
import ReviewInputItem from '../review-input-item/review-input-item';
import AddReviewSuccessModal from '../add-review-success-modal/add-review-succeess-modal';

type AddReviewModalProps = {
  productId: number;
  onCloseModal: () => void;
}

interface FormErrors {
  userName?: string;
  advantage?: string;
  disadvantage?: string;
  review?: string;
}

function AddReviewModal({ productId, onCloseModal }: AddReviewModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    cameraId: productId,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleModalClose = () => onCloseModal();

  const handleSubmit = (evt: FormEvent <HTMLFormElement>) => {
    evt.preventDefault();

    const errors: FormErrors = {};
    let hasErrors = false;

    if (formData.userName.trim() === '') {
      errors.userName = 'Нужно указать имя';
      hasErrors = true;
    }

    if (formData.advantage.trim() === '') {
      errors.advantage = 'Нужно указать достоинства';
      hasErrors = true;
    }

    if (formData.disadvantage.trim() === '') {
      errors.disadvantage = 'Нужно указать недостатки';
      hasErrors = true;
    }

    if (formData.review.trim() === '') {
      errors.review = 'Нужно добавить комментарий';
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    dispatch(fetchAddNewReviewAction(formData));
    setShowSuccessModal(true);
  };

  if(showSuccessModal) {
    return <AddReviewSuccessModal onCloseModal={ handleModalClose }/>;
  }

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div
          onClick={ handleModalClose }
          className="modal__overlay"
        >
        </div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form
              method="post"
              onSubmit={ handleSubmit }
            >
              <div className="form-review__rate">
                <fieldset className="rate form-review__item">
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      <input
                        className="visually-hidden"
                        id="star-5"
                        name="rating"
                        type="radio"
                        value="5"
                        onChange={ (evt) => setFormData({ ...formData, rating: Number(evt.target.value) })}
                      />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input
                        className="visually-hidden"
                        id="star-4"
                        name="rating"
                        type="radio"
                        value="4"
                        onChange={ (evt) => setFormData({ ...formData, rating: Number(evt.target.value) })}
                      />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input
                        className="visually-hidden"
                        id="star-3"
                        name="rating"
                        type="radio"
                        value="3"
                        onChange={ (evt) => setFormData({ ...formData, rating: Number(evt.target.value) })}
                      />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input
                        className="visually-hidden"
                        id="star-2"
                        name="rating"
                        type="radio"
                        value="2"
                        onChange={ (evt) => setFormData({ ...formData, rating: Number(evt.target.value) })}
                      />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input
                        className="visually-hidden"
                        id="star-1"
                        name="rating"
                        type="radio"
                        value="1"
                        onChange={ (evt) => setFormData({ ...formData, rating: Number(evt.target.value) })}
                      />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    </div>
                    <div className="rate__progress"><span className="rate__stars">0</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <ReviewInputItem
                  label={ 'Ваше имя'}
                  placeholder={ 'Введите ваше имя' }
                  value={ formData.userName }
                  errors={ formErrors.userName }
                  onChange={ (evt) => setFormData({ ...formData, userName: evt.target.value}) }
                />
                <ReviewInputItem
                  label={ 'Достоинства'}
                  placeholder={ 'Основные преимущества товара' }
                  value={ formData.advantage }
                  errors={ formErrors.advantage }
                  onChange={ (evt) => setFormData({ ...formData, advantage: evt.target.value})}
                />
                <ReviewInputItem
                  label={ 'Недостатки'}
                  placeholder={ 'Главные недостатки товара' }
                  value={ formData.disadvantage }
                  errors={ formErrors.disadvantage }
                  onChange={ (evt) => setFormData({ ...formData, disadvantage: evt.target.value})}
                />
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      name="review"
                      minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                      value={ formData.review }
                      onChange={ (evt) => setFormData({ ...formData, review: evt.target.value}) }
                    >
                    </textarea>
                  </label>
                  { formErrors.review && <div className="custom-textarea__error">{ formErrors.review }</div>}
                </div>
              </div>
              <button
                className="btn btn--purple form-review__btn"
                type="submit"
              >
                Отправить отзыв
              </button>
            </form>
          </div>
          <button
            onClick={ handleModalClose }
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddReviewModal;
