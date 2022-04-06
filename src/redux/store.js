import { configureStore } from "@reduxjs/toolkit";

import contactReducer from "./contacts/contacts-slice";


const store = configureStore({
    reducer: {
        contacts:contactReducer
    }
})

console.log(store.getState())
    
export default store;
