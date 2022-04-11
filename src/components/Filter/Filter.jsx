import PropTypes from 'prop-types';
import s from './filter.module.scss';
import { memo } from 'react';

function Filter({ filter, onChange }) {
  // console.log('rend Filter')
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
export default memo(Filter);