
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { getAllContacts, getContactsLoading } from 'redux/contacts/contacts-selectors';

import operations from 'redux/contacts/contacts-operations';



function App () {
   
  const [filter, setFilter] = useState('');  
  
  const contacts = useSelector(getAllContacts, shallowEqual);
  const loading = useSelector(getContactsLoading, shallowEqual);
  const dispatch = useDispatch();
  console.log(contacts);
  
    
  useEffect(() => {
                 
          const getContacts = () => dispatch(operations.fetchContacts());
          getContacts();       
        }    
    , [dispatch]);  
  
  
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
    
    const action = operations.addContact(payload);
    dispatch(action);
  }; 
  
  
  const deleteContact = (id) => {
    const action = operations.removeContact(id);
    dispatch(action);
  };  


  const filterContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();
    
      return filter !== "" ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)) : contacts
    ;
  };

  const handleFilter = useCallback ( (e) => {
    setFilter(e.currentTarget.value);
    }, []);

  console.log(filterContacts());
       
  return (
    <>
      <Section className='PhonebookSection' title='Phonebook'>        
        <ContactForm onSubmit={addContact}/>       
      </Section>
      
      <Section className='ContactsSection' title='Contacts'>
        <Filter value={filter} onChange={handleFilter} />
        <div style={{ height: '10px' }}>
          {loading && <p>...Loading</p>}
        </div>        
        <ContactList contacts={filterContacts ()} onDelete={deleteContact} />        
      </Section>
    </>
  );
}

export default App;