import { combineReducers, createReducer, nanoid } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

// export const initialState = [
//     { name: 'Rosie Simpson', number: '459-12-56' },
//     { name: 'Hermione Kline', number: '433-89-12' },
//     { name: 'Eden Clements', number: '645-17-79' },
//     { name: 'Annie Copeland', number: '227-91-26' }
// ];

const items = createReducer([], {
  [actions.fetchSuccess]: (state, { payload }) => [...state, ...payload],
  [actions.addSuccess]: (state, { payload }) => [...state, payload],
  [actions.removeSuccess]: (state, { payload }) => state.filter(item => item.id !== payload),
//   [actions.setSuccess]: (state, { payload }) => [...payload]
});

const loading = createReducer(false, {
[actions.fetchRequest]: () => true,
[actions.fetchSuccess]: () => false,   
[actions.fetchError]: () => false,  
[actions.addRequest]: () => true,
[actions.addSuccess]: () => false,   
[actions.addError]: () => false,   
[actions.removeRequest]: () => true,
[actions.removeSuccess]: () => false,   
[actions.removeError]: () => false,   
// [actions.setRequest]: () => true,
// [actions.setSuccess]: () => false,   
// [actions.setError]: () => false   
});

const error = createReducer(null, {
 [actions.fetchError]: (_, { payload }) => payload,   
 [actions.addError]: (_, { payload }) => payload,
 [actions.removeError]: (_, { payload }) => payload,
//  [actions.setError]: (_, { payload }) => payload 
});

// const contactsReducer = createReducer(initialState, {
//     [actions.addRequest]: (state) => {
//         state.loading = true;
//     },
//     [actions.addSuccess]: (state, { payload }) => {
//         state.items.push(payload);
//         state.loading = false;
//         state.error = null;
//     },
//     [actions.addError]: (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//     },
//     // {
//     //     const newContact = { ...payload, id: nanoid() };
//     //     state.push(newContact)
//     // },
//     [actions.removeRequest]: (state) => {
//     state.loading = true;
//      },
//     [actions.removeSuccess]: (state, { payload }) => {
//         const result = state.items.filter(item => item.id !== payload);
//         return{items: result, loading: false, error: null};
//     },
//     [actions.removeError]: (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//     },

//     [actions.setRequest]: (state) => {
//         state.loading = true;
//     },
//     [actions.setSuccess]: (state, { payload }) => {
//        return{items: payload, loading: false, error: null};      
//     },
//     [actions.setError]: (state, { payload }) => {
//         state.loading = false;
//         state.error = payload;
//     },
//     // [actions.set]: (state, { payload }) => {
//     //     return payload;
//     // },
// });

const contactsReducer = combineReducers({
    items,
    loading,
    error
})

export default contactsReducer;
