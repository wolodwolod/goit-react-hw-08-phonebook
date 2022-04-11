import { createAsyncThunk } from "@reduxjs/toolkit";
// import actions from "./contacts-actions";
import contactsAPI from "shared/api/contactsAPI";

const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async (_, thunkAPI) => {
        try {
            const result = await contactsAPI.getContacts();
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
);

// const fetch = () => {
//     const func = async (dispatch) => {
//         dispatch(actions.fetchRequest())
//         try {
//             const allContacts = await services.getContacts();
//             dispatch(actions.fetchSuccess(allContacts));
//         } catch (error) {
//             dispatch(actions.fetchError(error));
//         }
//     };
//     return func;
// };
const addContact = createAsyncThunk(
    "contacts/add",
    async (data, thunkAPI) => {
        try {
            const result = await contactsAPI.addContact(data);
            return result;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
    {
        condition: (data, { getState }) => {
          const { contacts } = getState();
        // console.log(contacts);
        const { items } = contacts;
        // console.log(items);        
        const normalizedInputName = data.name.toLowerCase();
       const findName = items.find(
      contact => contact.name.toLowerCase() === normalizedInputName
    );
    if (findName) {
      alert(`${data.name} is already in contacts!`);
    return false;
        };
    const findNumber = items.find(
      contact => contact.number === data.number);
    if (findNumber) {
      alert(`This phone number is already in contacts!`);
    return false;
        };  
        }
    }
);

const removeContact = createAsyncThunk(
    "contacts/remove",
    async (id, thunkAPI) => {
        try {
            await contactsAPI.removeContact(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
) 
// const removeContact = id => {
//     const func = async (dispatch) => {
//         dispatch(actions.removeRequest());
//         try {
//             await services.removeContact(id);
//             dispatch(actions.removeSuccess(id));
//         }
//         catch (error) {
//             dispatch(actions.removeError());
//         };
//     };
//     return func;
// };

const operations = {
    fetchContacts,
    addContact,
    removeContact   
}

export default operations;