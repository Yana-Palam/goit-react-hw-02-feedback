import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title = '', children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.section__title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
