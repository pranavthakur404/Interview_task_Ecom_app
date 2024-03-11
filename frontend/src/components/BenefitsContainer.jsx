import React from "react";
import Container from "./Container";
import styles from "../components_css/BenefitsContainer.module.css";

const BenefitsContainer = () => {
  return (
    <Container>
      <div className={styles.Container}>
        <div className={styles.box}>
          <p>Free Home Delivary</p>
        </div>
        <div className={styles.box}>
          <p>Secure Payment</p>
        </div>
        <div className={styles.box}>
          <p>Order Discount</p>
        </div>
        <div className={styles.box}>
          <p>24 x 7 Online Support</p>
        </div>
      </div>
    </Container>
  );
};

export default BenefitsContainer;
