import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import React, { useState } from 'react';
import s from './ContactForm.module.css';

import { actions } from 'redux/contacts/contacts-slice';


const ContactForm = () => {
    
  const [formContacts, setFormContacts] = useState({
    formName: '',
    formNumber: '',
  })
  
  const contacts = useSelector(store => store.contacts, shallowEqual);
  const dispatch = useDispatch();


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
        
    addContact({ name: formContacts.formName, number: formContacts.formNumber });
    setFormContacts({
      formName: '',
      formNumber: '',
    });
  };
  
  const addContact = (payload) => {
    
    const { name, number } = payload;
    
    const normalizedInputName = name.toLowerCase();
    const findName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedInputName
    );
    if (findName) {
      return alert(`${name} is already in contacts!`);
    }
    const findNumber = contacts.find(
      contact => contact.number === number);
    if (findNumber) {
      return alert(`This phone number is already in contacts!`);
    }
    
    const action = actions.add(payload);
    dispatch(action);
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

export default ContactForm;