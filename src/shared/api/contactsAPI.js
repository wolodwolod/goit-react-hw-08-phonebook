import axios from "axios";

const instance = axios.create({
    baseURL: "https://624f424c8c5bf4a10548cfda.mockapi.io/api/v1/contacts",
     
    // params: {
    //     api_key: "",
    //     language: "en-US",
    // }
});

export const getContacts = async () => {
    const {data} = await instance.get("/");
    return data;
};

export const addContact = async (data) => {
    const { data: result } = await instance.post("/", data);
    return result;
};

export const removeContact = async (id) => {
    const { data: result } = await instance.delete(`/${id}`);
    return result;
};
// export const setContacts = async (data) => {
//     const { data: result } = await instance.post("/", data);
//     return result;
// };

const contactsAPI = {
    getContacts,
    addContact,
    removeContact,
    // setContacts
};

export default contactsAPI;