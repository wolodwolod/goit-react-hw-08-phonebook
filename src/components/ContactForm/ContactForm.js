import PropTypes from 'prop-types';
import React, { useState } from 'react';
import s from './ContactForm.module.css';

function PhoneBook ({onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name': setName(value);
        break;
      case 'number': setNumber(value);
        break;  
      
      default: break;
    }
  };

    
  const handleSubmit = e => {
        e.preventDefault();
        
    onSubmit({ name: name, number: number });
    setName('');
    setNumber('');
    }
    
    return (
        <form className={s.Form}
            onSubmit={handleSubmit}>
            <label className={s.Form__label}>
          Name
          <input className={s.Form__input}
            type="text"
            name="name"
            value={name}
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
            name="number"
            value={number}
            onChange={handleChange}              
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
            </label>
        
        <button className={s.Form__btn} type="submit">Add contact</button>
      </form>
    );
}
 PhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}; 

export default PhoneBook;