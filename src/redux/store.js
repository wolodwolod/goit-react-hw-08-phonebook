import { createStore } from "redux";

import reduser from "./reduser";


const store = createStore(reduser);

console.log(store.getState())
    
export default store;
