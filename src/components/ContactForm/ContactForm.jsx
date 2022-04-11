import PropTypes from 'prop-types';
import React, { useState } from 'react';
import s from "./contact-form.module.scss";



const ContactForm = ({ onSubmit }) => {
    
  const [formContacts, setFormContacts] = useState({
    formName: '',
    formNumber: '',
  })
  
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormContacts(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    });
  };
    
  const handleSubmit = e => {
    e.preventDefault();
        
    onSubmit({ name: formContacts.formName, number: formContacts.formNumber });
    setFormContacts({
      formName: '',
      formNumber: '',
    });
  };  
    

  return (
    <form className={s.Form}
      onSubmit={handleSubmit}>
      <label className={s.Form__label}>
        Name
        <input className={s.Form__input}
          type="text"
          name="formName"
          value={formContacts.formName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
            
      <label className={s.Form__label}>
        Number
        <input className={s.Form__input}
          type="tel"
          name="formNumber"
          value={formContacts.formNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
        
      <button className={s.Form__btn} type="submit">Add contact</button>
    </form>
  );
}; 

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; 

export default ContactForm;