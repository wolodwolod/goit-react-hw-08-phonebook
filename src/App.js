
import React, { useEffect, useRef, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';


import actions from 'redux/actions';


function App () {

   
  const contacts = useSelector(store => store.contacts, shallowEqual);
  const dispatch = useDispatch();
  
  const setContacts = useCallback((payload) => {
    const action = actions.set(payload);
    dispatch(action);
  }, [dispatch]);

  const firstRenderRef = useRef(true);

    useEffect(()=> {
        if(firstRenderRef.current) {
            // console.log("first  render")
            const data = localStorage.getItem("contacts");
            const parsedСontacts = JSON.parse(data);            
          if (parsedСontacts?.length) {
              setContacts (parsedСontacts)            
          };
            firstRenderRef.current = false;
        }
        else {
            // console.log("second  render")
            localStorage.setItem("contacts", JSON.stringify(contacts))
        }
    }, [contacts, setContacts]);  
  
       
  return (
    <>
      <Section className='PhonebookSection' title='Phonebook'>        
        <ContactForm />       
      </Section>
      
      <Section className='ContactsSection' title='Contacts'>       
        <ContactList/>        
      </Section>
    </>
  );
}

export default App;