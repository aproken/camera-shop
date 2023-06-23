type ReviewInputItemProps = {
  label: string;
  placeholder: string;
  value: string;
  errors: string | undefined;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewInputItem({ label, placeholder, value, errors, onChange }: ReviewInputItemProps): JSX.Element {
  return (
    <div className="custom-input form-review__item">
      <label>
        <span className="custom-input__label">{ label }
          <svg width="9" height="9" aria-hidden="true">
            <use xlinkHref="#icon-snowflake"></use>
          </svg>
        </span>
        <input
          type="text"
          name="userName"
          placeholder={ placeholder }
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
      { errors && <p className="custom-input__error">{ errors }</p>}
    </div>
  );
}

export default ReviewInputItem;
