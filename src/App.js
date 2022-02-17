
import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import Section from 'components/Section'
import ContactForm from 'components/ContactForm'
import ContactList from 'components/ContactList'
import Filter from 'components/Filter'

class App extends Component {

    state = {
        contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' ,id: nanoid() },
      { name: 'Hermione Kline', number: '433-89-12' ,id: nanoid() },
      { name: 'Eden Clements', number: '645-17-79' ,id: nanoid() },
      { name: 'Annie Copeland', number: '227-91-26' ,id: nanoid() },
        ],
        
        filter: '',
    }

 addContact = ({ name, number }) => {
    const normalizedInputName = name.toLowerCase();
    const findName = this.state.contacts.find(
      
        contact => contact.name.toLowerCase() === normalizedInputName
    );
    if (findName) {
      return alert(`${name} is already in contacts.`);
    }
const findNumber = this.state.contacts.find(
      contact => contact.number === number
    );
    if (findNumber) {
      return alert(`This phone number is already in contacts.`);
    }
    
    this.setState(({ contacts }) => ({
      contacts: [{ name, number, id: nanoid() }, ...contacts],
    }));
  };

    filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
      return filter !== "" ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)) : contacts
    ;
  };
    
    
    handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    };
    

   
    deleteContact =  id  => {
        this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };
    
    render() {
        console.log(this.state);
      // const { filter, contacts } = this.state; 
      // const filteredContacts = this.filterContacts(); 
        return (
            <>
                <Section className='PhonebookSection' title='Phonebook'>
                    <ContactForm onSubmit={this.addContact} 
                    />                   
                </Section>
                <Section className='ContactsSection' title='Contacts'>
                    <Filter value={this.state.filter} onChange={this.handleFilter} />
              {}      
              <ContactList
                        contacts={this.filterContacts ()}
                      DeleteContact={this.deleteContact}  
                    />                   
                </Section>
                
                </>
            )
        
    }
}
export default App;