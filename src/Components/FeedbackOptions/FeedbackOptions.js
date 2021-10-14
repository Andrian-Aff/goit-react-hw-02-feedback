import PropTypes from 'prop-types';
import Button from '../Button';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonsBox}>
      {options.map(option => (
        <Button
          key={option}
          labelBtn={option}
          onLeaveFeedback={() => onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
