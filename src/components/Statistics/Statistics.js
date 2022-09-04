import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={s.statistics}>
      <h2 className={s.statistics__title}>Statistics</h2>
      <ul className={s.statistics__list}>
        <li className={s.statistics__item}>
          Good:&nbsp;
          <span className={s.statistics__value}>{good}</span>
        </li>
        <li className={s.statistics__item}>
          Neutral:&nbsp;
          <span className={s.statistics__value}>{neutral}</span>
        </li>
        <li className={s.statistics__item}>
          Bad:&nbsp;
          <span className={s.statistics__value}>{bad}</span>
        </li>
        <li className={s.statistics__item}>
          Total:&nbsp;
          <span className={s.statistics__value}>{total}</span>
        </li>
      </ul>
      <p className={s.statistics__text}>
        Positive feedback:&nbsp;
        <span>{isNaN(positiveFeedback) ? 0 : positiveFeedback.toFixed(2)}</span>
        %
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
export default Statistics;
