import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
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
      <li className={s.statistics__item}>
        Positive feedback:&nbsp;
        <span className={s.statistics__value}>{positivePercentage}</span>%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
