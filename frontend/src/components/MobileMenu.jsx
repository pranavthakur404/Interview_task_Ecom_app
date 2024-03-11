import styles from "../components_css/MobileMenu.module.css";
import { createPortal } from "react-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import MobileNavigation from "./MobileNavigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Container from "./Container";
import { IoMdClose } from "react-icons/io";

export default function MobileMenu({
  children,
  setShowNav,
  showNav,
  showSearch,
  setShowSearch,
}) {
  const OverlayVisibility = {
    opacity: showNav || showSearch ? "1" : "0",
    visibility: showNav || showSearch ? "visible" : "visibile",
    zIndex: showNav || showSearch ? "2" : "-10",
  };
  const containerVisibility = {
    left: showNav ? "0px" : "-310px",
  };

  const searchBarvisibility = {
    top: showSearch ? "0px" : "-200px",
  };

  useEffect(() => {
    if (showNav || showSearch) {
      document.body.classList.add("hidden");
    } else {
      document.body.classList.remove("hidden");
    }
  }, [showNav]);

  const handleClick = () => {
    setShowNav(false);
    setShowSearch(false);
  };

  const closeBtn = () => {
    setShowSearch(false);
  };

  return createPortal(
    <>
      <div
        className={styles.overlay}
        style={OverlayVisibility}
        onClick={handleClick}
      ></div>
      <div className={styles.container} style={containerVisibility}>
        <div className={styles.closeBtn}>
          <h3>Menu</h3>
          <MdKeyboardArrowLeft />
        </div>
        <div className={styles.contactBox}>
          <p>
            <FaPhoneAlt className={styles.icon} /> +00 123 456 789
          </p>
        </div>
        <div className={styles.contactBox}>
          <p>
            <FaEnvelope className={styles.icon} />
            demo@example.com
          </p>
        </div>
        <div className={styles.contactBox}>
          <p>
            <IoPersonSharp className={styles.icon} /> Account
          </p>
        </div>
        <MobileNavigation />
      </div>
      {/* search bar */}
      <div className={styles.searchBar} style={searchBarvisibility}>
        <Container>
          <span className={styles.closeIcon} onClick={closeBtn}>
            <IoMdClose />
          </span>
          <p className={styles.text}>Start Typing And Press Enter To Search</p>
          <form className={styles.searchForm}>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <CiSearch />
            </button>
          </form>
        </Container>
      </div>
    </>,
    document.getElementById("mobileMenu")
  );
}
