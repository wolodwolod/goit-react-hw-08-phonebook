import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-reduser";


const store = configureStore({
    reducer: {
        contacts:contactsReducer
    }
})

console.log(store.getState())
    
export default store;
