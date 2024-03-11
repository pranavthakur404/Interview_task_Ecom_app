import styles from "../components_css/Footer.module.css";
import logo from "../assets/footer/logo.jpg";
import React from "react";
import Container from "./Container";
import FooterBottom from "./FooterBottom";
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Container>
          <div className={styles.footerInner}>
            <div className={`${styles.box} ${styles.box1}`}>
              <img src={logo} alt="Shome" />
              <p>
                Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod
                templ incididunt ut labore
              </p>
              <div className={styles.socialContainer}>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaDribbble />
                </span>
                <span>
                  <FaPinterestP />
                </span>
                <span>
                  <FaTwitter />
                </span>
              </div>
            </div>
            <div className={`${styles.box} ${styles.box2}`}>
              <h3>Services</h3>
              <p>Home monitoring</p>
              <p>Air Filters</p>
              <p>Professional installation</p>
              <p>Smart Buildings</p>
              <p>For contractors</p>
            </div>
            <div className={`${styles.box} ${styles.box3}`}>
              <h3>My Account</h3>
              <p>My Account</p>
              <p>Contact</p>
              <p>Shopping cart</p>
              <p>Shop</p>
              <p>Services Login</p>
            </div>
            <div className={`${styles.box} ${styles.box4}`}>
              <h3>Contact Info</h3>
              <p>Address: Your address goes here.</p>
              <p>Phone//fax: 0123456789</p>
              <p>Email: demo@example.com</p>
              <p>www.example.com</p>
              <p>Services Login</p>
            </div>
          </div>
        </Container>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;
