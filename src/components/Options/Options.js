import PropTypes from 'prop-types';
import s from './Options.module.css';

const Options = ({ onGood, onNeutral, onBad }) => {
  return (
    <>
      <p className={s.feedback__title}>Please leave feedback</p>
      <div className={s.feedback__options}>
        <button className={s.feedback__btn} type="button" onClick={onGood}>
          Good
        </button>
        <button className={s.feedback__btn} type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button className={s.feedback__btn} type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    </>
  );
};

Options.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
};

export default Options;
