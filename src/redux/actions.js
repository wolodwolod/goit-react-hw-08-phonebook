import types from "./types";

const add = (payload) => {
    return {
        type: types.add,
        payload
    }
};

const remove = (id) => {
    return {
        type: types.remove,
       id
    }
};
const set = (payload) => {
    return {
        type: types.set,
       payload
    }
};

const actions = {
    add,
    remove,
    set
};

export default actions;