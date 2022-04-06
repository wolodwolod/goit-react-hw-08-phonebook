import React, { useState, useCallback } from 'react';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import Filter from 'components/Filter';
import ContactItem from 'components/ContactItem';

import actions from 'redux/actions';



const ContactList = () => {
  
  const dispatch = useDispatch(); 
  
  // State "Filter"

  const [filter, setFilter] = useState('');  
  
  // Контакты из Store

  const contacts = useSelector(store => store.contacts, shallowEqual);
   

// Добавляем в State "Filter" вводимое значение
  
  const handleFilter = useCallback ( (e) => {
    setFilter(e.currentTarget.value);
    }, []);

// Список контактов для рендера
  
  const filterContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();
    
      return filter !== "" ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)) : contacts
    ;
  };  
    
// Удаление контакта    
  
  const deleteContact = (id) => {
    const action = actions.remove(id);
    dispatch(action);
  };  
  
  return (
    <div>
    <Filter value={filter} onChange={handleFilter} />
    <ul>
      {filterContacts().map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
              name={name}
              number={number}
              onDelete={() => deleteContact (id)}                
        />
      ))}
    </ul>
    </div>
  );
};

export default ContactList;



