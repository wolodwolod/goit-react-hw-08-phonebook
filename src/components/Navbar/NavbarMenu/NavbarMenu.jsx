import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.scss";

import {items} from "./items";

const getACtiveClass = ({isActive})=> isActive ? styles.linkActive : styles.link;

const NavbarMenu = ({isLogin}) => {
    const fiteredItems = isLogin ? items : items.filter(item => !item.private);
    const elements = fiteredItems.map(({id, to, text})=> (
        <li key={id}>
        <NavLink to={to} className={getACtiveClass}>
            {text}
        </NavLink>
    </li>
    ));

    return (
        <ul className={styles.row}>
            {elements}
        </ul>
    )
}

export default NavbarMenu;