import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';


const ContactList = ({ contacts, onDelete }) => {
  
   ContactList.defaultProps = {
    contacts: []
}  
  return (
    
     <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
              name={name}
              number={number}
              onDelete={() => onDelete (id)}                
        />
      ))}
    </ul>
    
  );
};

ContactList.propTypes = {
      onDelete: PropTypes.func.isRequired,
  };

export default ContactList;



