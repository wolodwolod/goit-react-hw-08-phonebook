import { useSelector, shallowEqual } from "react-redux";

import { getIslogin } from "../../redux/auth/auth-selectors";

const useAuth = ()=> {
    const isLogin = useSelector(getIslogin, shallowEqual);

    return isLogin;
}

export default useAuth;