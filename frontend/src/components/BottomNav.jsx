import { Link, NavLink } from "react-router-dom";
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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Pages</NavLink>
            <MdOutlineKeyboardArrowDown className={styles.downArrow} />
            <ul>
              <li>Account</li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>Register</li>
              <li>Page Not found </li>
              <li>
                <NavLink to="/compare">Compare</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">Checkout</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
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
