import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ labelBtn, onLeaveFeedback }) {
  return (
    <button className={`${s.button}`} type="button" onClick={onLeaveFeedback}>
      {labelBtn}
    </button>
  );
}

Button.propTypes = {
  textBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func,
};
