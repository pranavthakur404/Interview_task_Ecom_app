import React, { useEffect, useState } from "react";
import Container from "./Container";
import styles from "../components_css/MiddleNav.module.css";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { PiHeartLight } from "react-icons/pi";
import { PiShoppingBagThin } from "react-icons/pi";
import { IoIosMenu } from "react-icons/io";
import MobileMenu from "./MobileMenu";

const MiddleNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowNav(true);
  };

  const handleSearchBtn = () => {
    setShowSearch(!showSearch);
  };

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      if (event.srcElement.innerWidth > 924) {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <Container>
      <div className={styles.middleNav}>
        <div className={styles.content}>
          <img src={logo} alt="SHome" className={styles.logo} />
          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <CiSearch />
            </button>
          </div>
          <div className={styles.cart}>
            <span className={styles.searchIcon} onClick={handleSearchBtn}>
              <CiSearch />
            </span>
            <span>
              <PiHeartLight className={styles.icon} />
            </span>
            <span>
              <PiShoppingBagThin className={styles.icon} />
            </span>
            <span className={styles.hamburger} onClick={handleClick}>
              <IoIosMenu className={styles.icon} />
            </span>
          </div>
        </div>
        <MobileMenu
          showNav={showNav}
          setShowNav={setShowNav}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        ></MobileMenu>
      </div>
    </Container>
  );
};

export default MiddleNav;
