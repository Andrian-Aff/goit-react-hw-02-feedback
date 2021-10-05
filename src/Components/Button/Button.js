import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ textBtn, onLeaveFeedback }) {
  return (
    <button
      className={`${s.button}`}
      type="button"
      onClick={event => onLeaveFeedback(event)}
    >
      {textBtn}
    </button>
  );
}

Button.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
};
