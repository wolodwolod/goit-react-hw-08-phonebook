import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {logout} from "../../../redux/auth/auth-operations";

import { getUser } from "../../../redux/auth/auth-selectors";

import s from "./user-menu.module.scss"

const UserMenu = ()=> {
    const {email} = useSelector(getUser, shallowEqual);

    const dispatch = useDispatch();

    const handleLogout = ()=> dispatch(logout());

    return (
        <div className={s.user_menu} >
            <h4>{email}</h4>
            <button className={s.button_logout} onClick={handleLogout}>Logout</button>
        </div>
    )
};

export default UserMenu;