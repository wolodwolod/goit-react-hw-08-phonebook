import { createAction } from "@reduxjs/toolkit";

const fetchRequest = createAction("contacts/fetchRequest"); 
const fetchSuccess = createAction("contacts/fetchSuccess"); 
const fetchError = createAction("contacts/fetchError"); 


const addRequest = createAction("contacts/addRequest");
const addSuccess = createAction("contacts/addSucsess");
const addError = createAction("contacts/addError");
// const add = (payload) => {
//     return {
//         type: types.add,
//         payload
//     }
// };
const removeRequest = createAction("contacts/removeRequest");
const removeSuccess = createAction("contacts/removeSuccess");
const removeError = createAction("contacts/removeError");
// const remove = (id) => {
//     return {
//         type: types.remove,
//        id
//     }
// };

// const setRequest = createAction("contacts/setRequest");
// const setSuccess = createAction("contacts/setSuccess");
// const setError = createAction("contacts/setError");
// const set = (payload) => {
//     return {
//         type: types.set,
//        payload
//     }
// };

const actions = {
    addRequest,
    addSuccess,
    addError,
    removeRequest,
    removeSuccess,
    removeError,
    // setRequest,
    // setSuccess,
    // setError,
    fetchRequest,
    fetchSuccess,
    fetchError
};

export default actions;