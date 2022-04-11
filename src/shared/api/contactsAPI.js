import axios from "axios";


export const getContacts = async ()=> {
    const {data} = await axios.get("/contacts");
    return data;
}

export const addContact = async (data)=> {
    const {data: result} = await axios.post("/contacts", data);
    return result;
}

export const removeContact = async (id) => {
    const { data: result } = await axios.delete(`/contacts/${id}`);
    return result;
};
// const instance = axios.create({
//     baseURL: "https://connections-api.herokuapp.com/",
     
//     // params: {
//     //     api_key: "",
//     //     language: "en-US",
//     // }
// });

// export const getContacts = async () => {
//     const {data} = await instance.get("/");
//     return data;
// };

// export const addContact = async (data) => {
//     const { data: result } = await instance.post("/", data);
//     return result;
// };

// export const removeContact = async (id) => {
//     const { data: result } = await instance.delete(`/${id}`);
//     return result;
// };
// // export const setContacts = async (data) => {
// //     const { data: result } = await instance.post("/", data);
// //     return result;
// // };

const contactsAPI = {
    getContacts,
    addContact,
    removeContact,
    // setContacts
};

export default contactsAPI;