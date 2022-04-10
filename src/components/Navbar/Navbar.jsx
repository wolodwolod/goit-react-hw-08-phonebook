import { useSelector, shallowEqual } from "react-redux";
import { NavLink } from "react-router-dom";

import UserMenu from "./UserMenu";
// import UserInfo from "./UserInfo";
import AuthMenu from "./AuthMenu";

import { getIslogin } from "../../redux/auth/auth-selectors";

import styles from "./navbar.module.scss";

const Navbar = () => {
const isLogin = useSelector(getIslogin, shallowEqual);

  return (
    <header className={styles.Header__box}>
      <nav className={styles.Nav}>
        <ul className={styles.Nav__links}>
          <li key="HomePage">
            <NavLink
              to="/"
              exact
              className={styles.Nav__item}
              activeClassName={styles['Nav__item--active']}
            >
              Home
            </NavLink>
          </li>

          {isLogin && (
            <li key="Contacts">
              <NavLink
                to="/contacts"
                exact
                className={styles.Nav__item}
                activeClassName={styles['Nav__item--active']}
              >
                Contacts
              </NavLink>
            </li>
          )}
        </ul>

        {isLogin ? <UserMenu /> : <AuthMenu />}
      </nav>
    </header>
  );
};

export default Navbar;