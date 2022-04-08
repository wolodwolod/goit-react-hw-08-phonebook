import { createReducer, nanoid } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

const initialState = [
        { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
        { name: 'Hermione Kline', number: '433-89-12', id: nanoid() },
        { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
        { name: 'Annie Copeland', number: '227-91-26', id: nanoid() }
    ];

const contactsReducer = createReducer(initialState, {
    [actions.add]: (state, { payload }) => {
        const newContact = { ...payload, id: nanoid() };
        state.push(newContact)
    },
    [actions.remove]: (state, { payload }) => {
        const newCart = state.filter(item => item.id !== payload);
        return newCart;
    },
    [actions.set]: (state, { payload }) => {
        
        return payload;
    },

});

export default contactsReducer;
