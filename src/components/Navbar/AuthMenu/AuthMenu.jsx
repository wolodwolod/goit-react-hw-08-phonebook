import { NavLink } from "react-router-dom";

import styles from "./auth-menu.module.scss";

const getACtiveClass = ({isActive})=> isActive ? styles.linkActive : styles.link;

const AuthMenu = ()=> {
    return (
        <div >
            <NavLink to="/register" className={getACtiveClass} >Register</NavLink>
            
            <NavLink to="/login" className={getACtiveClass} >Login</NavLink>
        </div>
    )
};

export default AuthMenu;