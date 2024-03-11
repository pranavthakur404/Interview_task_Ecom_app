import React from "react";
import Container from "./Container";
import styles from "../components_css/TopNav.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <Container>
        <div className={styles.nav}>
          <p>World Wide Completely Free Returns and Free Shipping</p>
          <ul>
            <li>
              <FaPhoneAlt className={styles.icon} /> +00 123 456 789
            </li>
            <li>
              <FaEnvelope className={styles.icon} />
              demo@example.com
            </li>
            <li>
              <IoPersonSharp className={styles.icon} /> Account
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
