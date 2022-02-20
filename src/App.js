
import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Section from 'components/Section'
import ContactForm from 'components/ContactForm'
import ContactList from 'components/ContactList'
import Filter from 'components/Filter'

function App () {

  const [contacts, setContacts] = useState([
    { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
    { name: 'Hermione Kline', number: '433-89-12', id: nanoid() },
    { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
    { name: 'Annie Copeland', number: '227-91-26', id: nanoid() }
  ]);
  const [filter, setFilter] = useState('');
 
// Если LocalStorage не пустой, переносим контакты в State; 
 
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedСontacts = JSON.parse(contacts);

    if (parsedСontacts) {
      setContacts(parsedСontacts);
    }
    return;
  }, []);

// При изменении (добавлении) контактов в State, копируем contacts в LocalStorage;
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  // Добавление контакта в State
  // Проверка на наличие в State вводимых данных 
 const addContact = ({ name, number }) => {
  
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
    // Проверив, вносим контакт в State, сохранив предыдущие контакты 
      setContacts([...contacts, {
      id: nanoid(),
      name,
      number,
    }]);
  };
   
  // Список отфильтрованных контактов
    const filterContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();
    
      return filter !== "" ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)) : contacts
    ;
  };
    
// Вносим в State вводимое значение Filter  
    const handleFilter = e => {
    setFilter(e.currentTarget.value);
    };
    
// Удаляем контакт из State
  const deleteContact = id => {
      setContacts(
      contacts.filter(contact => contact.id !== id)
    ); 
     };
       
        return (
            <>
                <Section className='PhonebookSection' title='Phonebook'>
                    <ContactForm onSubmit={addContact} 
                    />                   
                </Section>
                <Section className='ContactsSection' title='Contacts'>
                    <Filter value={filter} onChange={handleFilter} />
              {}      
              <ContactList
                        contacts={filterContacts ()}
                      DeleteContact={deleteContact}  
                    />                   
                </Section>
           </>
            )
}

export default App;