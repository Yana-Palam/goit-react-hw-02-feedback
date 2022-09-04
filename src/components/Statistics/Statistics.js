import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
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
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
export default Statistics;
