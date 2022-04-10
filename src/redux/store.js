import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-reduser";
import authReducer from "./auth/auth-slice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,        
    }
})

// console.log(store.getState())
    
export default store;
