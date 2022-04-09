import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

const ContactItem = ({ name, number, onDelete}) => {
  return (
    <li className={s.ContactItem}>
      <p>
              {name}: {number}            
      </p>
      
          <button className={s.ContactItem__btn} type="button" onClick={onDelete}>
        Delete
          </button>
          
    </li>
  );
};

ContactItem.propTypes = {
  
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactItem;