import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const addToken = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

// export const instance = axios.create({
//     baseURL: "https://auth-backend-lesson.herokuapp.com/api"
// });

const signup = async (data)=> {
    const {data: result} = await axios.post("/users/signup", data);
    addToken(result.token);
    // instance.defaults.headers.common.Authorization = result.token;
    return result;
}

const login = async (data) => {
    const {data: result} = await axios.post("/users/login", data);
    addToken(result.token);
    // instance.defaults.headers.common.Authorization = result.token;
    return result;
}

const logout = async () => {
    const {data: result} = await axios.post("/users/logout");
    // instance.defaults.headers.common.Authorization = "";
    return result;
}

const getCurrent = async (token) => {
    console.log(token)
    addToken(token);
    const { data: result } = await axios.get("/users/current");
    console.log(result);
    return result;
}

const authAPI = {
    signup,
    login,
    logout,
    getCurrent
};

export default authAPI;