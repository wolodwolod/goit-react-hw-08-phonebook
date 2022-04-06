import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({

    name: "contacts",
    initialState: [
        { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
        { name: 'Hermione Kline', number: '433-89-12', id: nanoid() },
        { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
        { name: 'Annie Copeland', number: '227-91-26', id: nanoid() }
    ],
    reducers: {
        
        add: (state, { payload }) => {
            const newContact = { ...payload, id: nanoid() };
            return [...state, newContact];
        },
        
        remove: (state, { payload }) => {
            const newState = state.filter(item => item.id !== payload);
            return newState;
        },

        set: (state, { payload }) => {
            return payload;
        }
    }
})

export const {actions} = contactSlice;

export default contactSlice.reducer;
