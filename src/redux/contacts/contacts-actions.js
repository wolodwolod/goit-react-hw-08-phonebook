import { createAction } from "@reduxjs/toolkit";


// import types from "./types";

const add = createAction("contacts/add");
// const add = (payload) => {
//     return {
//         type: types.add,
//         payload
//     }
// };
const remove = createAction("contacts/remove");
// const remove = (id) => {
//     return {
//         type: types.remove,
//        id
//     }
// };

const set = createAction("contacts/set")
// const set = (payload) => {
//     return {
//         type: types.set,
//        payload
//     }
// };

const actions = {
    add,
    remove,
    set
};

export default actions;