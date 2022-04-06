import { nanoid } from 'nanoid';
import types from './types';

const initialState = {
    contacts: [
        { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
        { name: 'Hermione Kline', number: '433-89-12', id: nanoid() },
        { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
        { name: 'Annie Copeland', number: '227-91-26', id: nanoid() }
    ],
    }
const reduser = (state = initialState, action) => {
    switch (action.type) {
        
        case types.add:
            const newContact = {
                ...action.payload,
                id: nanoid()
            };
            return {
                contacts: [...state.contacts, newContact]
            };
        
        case types.remove:
            const newContacts = state.contacts.filter(contact => contact.id !== action.id);
            return {
                contacts: newContacts
            };
        
        case types.set:
            
            return {
                contacts: action.payload
            }
        
        default:
            return state;
   }    
};

export default reduser;