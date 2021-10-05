import PropTypes from 'prop-types';
import Button from '../Button';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonsBox}>
      {options.map(textBtn => (
        <Button
          key={textBtn}
          textBtn={textBtn}
          onLeaveFeedback={onLeaveFeedback}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
