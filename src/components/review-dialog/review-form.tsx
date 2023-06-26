import { ReviewData } from '../../types/review-data';
import { useForm, SubmitHandler } from 'react-hook-form';
import classNames from 'classnames';

type ReviewFormProps = {
  productId: number;
  onSubmit: (data: ReviewData) => void;
}

type FormData = {
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
};

function ReviewForm({productId, onSubmit}: ReviewFormProps) {
  const {register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();

  const onSubmitHandler: SubmitHandler<FormData> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    onSubmit({...data, rating: +data.rating, cameraId: productId});
  };

  // eslint-disable-next-line no-console
  console.log(watch('review'));

  return (
    <form onSubmit={ (event) => void handleSubmit(onSubmitHandler)(event) }>
      <div className="form-review__rate">
        <fieldset className={classNames('rate form-review__item', {'is-invalid': errors.rating})}>
          <legend className="rate__caption">
        Рейтинг
            <svg width={9} height={9} aria-hidden="true">
              <use xlinkHref="#icon-snowflake" />
            </svg>
          </legend>
          <div className="rate__bar">
            <div className="rate__group">
              <input
                {...register('rating', {required: true})}
                className="visually-hidden"
                id="star-5"
                type="radio"
                defaultValue={5}
              />
              <label className="rate__label" htmlFor="star-5" title="Отлично" />
              <input
                {...register('rating', {required: true})}
                className="visually-hidden"
                id="star-4"
                type="radio"
                defaultValue={4}
              />
              <label className="rate__label" htmlFor="star-4" title="Хорошо" />
              <input
                {...register('rating', {required: true})}
                className="visually-hidden"
                id="star-3"
                type="radio"
                defaultValue={3}
              />
              <label className="rate__label" htmlFor="star-3" title="Нормально" />
              <input
                {...register('rating', {required: true})}
                className="visually-hidden"
                id="star-2"
                type="radio"
                defaultValue={2}
              />
              <label className="rate__label" htmlFor="star-2" title="Плохо" />
              <input
                {...register('rating', {required: true})}
                className="visually-hidden"
                id="star-1"
                type="radio"
                defaultValue={1}
              />
              <label className="rate__label" htmlFor="star-1" title="Ужасно" />
            </div>
            <div className="rate__progress">
              <span className="rate__stars">0</span>
              <span>/</span>
              <span className="rate__all-stars">5</span>
            </div>
          </div>
          { errors.rating && <p className="rate__message">Нужно оценить товар</p> }
        </fieldset>
        <div className={classNames('custom-input form-review__item', {'is-invalid': errors.userName})}>
          <label>
            <span className="custom-input__label">
          Ваше имя
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input
              {...register('userName', { required: true })}
              placeholder="Введите ваше имя"
            />
          </label>
          { errors.userName && <p className="custom-input__error">Нужно указать имя</p> }
        </div>
        <div className={classNames('custom-input form-review__item', {'is-invalid': errors.advantage})}>
          <label>
            <span className="custom-input__label">
          Достоинства
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input {...register('advantage', { required: true })} placeholder="Основные преимущества товара" />
          </label>
          { errors.advantage && <p className="custom-input__error">Нужно указать достоинства</p> }
        </div>
        <div className={classNames('custom-input form-review__item', {'is-invalid': errors.disadvantage})}>
          <label>
            <span className="custom-input__label">
          Недостатки
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <input {...register('disadvantage', { required: true })} placeholder="Главные недостатки товара" />
          </label>
          { errors.disadvantage && <p className="custom-input__error">Нужно указать недостатки</p> }
        </div>
        <div className={classNames('custom-textarea form-review__item', {'is-invalid': errors.review})}>
          <label>
            <span className="custom-textarea__label">
          Комментарий
              <svg width={9} height={9} aria-hidden="true">
                <use xlinkHref="#icon-snowflake" />
              </svg>
            </span>
            <textarea
              {...register('review', {
                required: true,
                minLength: {
                  value: 5,
                  message: 'Нужно добавить комментарий'
                }
              })}
              placeholder="Поделитесь своим опытом покупки"
              defaultValue={''}
            />
          </label>
          { errors.review && <div className="custom-textarea__error">Нужно добавить комментарий</div> }
        </div>
      </div>
      <button className="btn btn--purple form-review__btn" type="submit">
    Отправить отзыв
      </button>
    </form>

  );
}

export default ReviewForm;
