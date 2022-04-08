import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsSlice = createSlice({

    name: "contacts",
    initialState: {
        items:[
        { name: 'Rosie Simpson', number: '459-12-56', id: nanoid() },
        { name: 'Hermione Kline', number: '433-89-12', id: nanoid() },
        { name: 'Eden Clements', number: '645-17-79', id: nanoid() },
        { name: 'Annie Copeland', number: '227-91-26', id: nanoid() }
    ],
        loading: false,
        error: null
    },
        
    reducers: {
        add: {
            reducer: (state, {payload}) => {
                state.push(payload);
                //  console.log(payload);
            },
            prepare: (data) => {
                const newContact = {
                    ...data,
                    id: nanoid()
                };
                // console.log(data);
                return {
                    payload: newContact
                }
            }
        },
        
        // add: (state, { payload }) => {
        //     const newContact = { ...payload, id: nanoid() };
        //     return [...state, newContact];
        // },
        
        remove: (state, { payload }) => {
            const newState = state.filter(item => item.id !== payload);
            return newState;
        },

        set: (state, { payload }) => {
            return payload;
        }
    }
})

export const {actions} = contactsSlice;

export default contactsSlice.reducer;
