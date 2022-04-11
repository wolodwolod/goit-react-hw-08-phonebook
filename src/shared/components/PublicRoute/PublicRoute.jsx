import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PublicRoute = ()=> {
    const isLogin = useAuth();

    if(isLogin) {
        return <Navigate to="/my-books" />
    }
    return <Outlet />
};

export default PublicRoute;