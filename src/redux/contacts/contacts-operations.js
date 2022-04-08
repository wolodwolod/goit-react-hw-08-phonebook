import actions from "./contacts-actions";
import services from "services/contacts";

const fetch = () => {
    const func = async (dispatch) => {
        dispatch(actions.fetchRequest())
        try {
            const allContacts = await services.getContacts();
            dispatch(actions.fetchSuccess(allContacts));
        } catch (error) {
            dispatch(actions.fetchError(error));
        }
    };
    return func;
}; 

const add = data => {
    const func = async (dispatch, getState) => {
        const { contacts } = getState();
        console.log(contacts);
        const { items } = contacts;
        console.log(items);
        
        const normalizedInputName = data.name.toLowerCase();
       const findName = items.find(
      contact => contact.name.toLowerCase() === normalizedInputName
    );
    if (findName) {
      return alert(`${data.name} is already in contacts!`);
        };
    const findNumber = items.find(
      contact => contact.number === data.number);
    if (findNumber) {
      return alert(`This phone number is already in contacts!`);
        };
        
        dispatch(actions.addRequest());
        try {
            const newContact = await services.addContact(data);
            dispatch(actions.addSuccess(newContact));
        }
        catch (error) {
            dispatch(actions.addError(error));
        }
    };
    return func;
};

const remove = id => {
    const func = async (dispatch) => {
        dispatch(actions.removeRequest());
        try {
            const result = await services.removeContact(id);
            dispatch(actions.removeSuccess(id));
        }
        catch (error) {
            dispatch(actions.removeError());
        };
    };
    return func;
};

// const set = data => {
//     const func = async (dispatch) => {              
//         dispatch(actions.setRequest());
//         try {
//             const newContacts = await services.setContacts(data);
//             dispatch(actions.setSuccess(newContacts));
//         }
//         catch (error) {
//             dispatch(actions.addError(error));
//         }
//     };
//     return func;
// };

const operations = {
    fetch,
    add,
    remove,
    // set
}

export default operations;