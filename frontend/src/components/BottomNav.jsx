import { NavLink } from "react-router-dom";
import styles from "../components_css/BottomNav.module.css";
import Container from "./Container";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const BottomNav = () => {
  return (
    <Container>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <MdOutlineKeyboardArrowDown className={styles.downArrow} />
            <ul>
              <li>Home 1</li>
              <li>Home 2</li>
            </ul>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Pages</NavLink>
            <MdOutlineKeyboardArrowDown className={styles.downArrow} />
            <ul>
              <li>Account</li>
              <li>Login</li>
              <li>Register</li>
              <li>Login</li>
              <li>Page Not found </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
            <MdOutlineKeyboardArrowDown className={styles.downArrow} />
          </li>
          <li>
            <NavLink to="/">Blog</NavLink>
            <MdOutlineKeyboardArrowDown className={styles.downArrow} />
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default BottomNav;
