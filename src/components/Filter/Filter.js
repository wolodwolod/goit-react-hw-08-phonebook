import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ filter, onChange }) {
  return (
    <label className={s.Filter__label}>
      Find contacts by name
      <input className={s.Filter__input} type="text" name="filter" value={filter} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;