import React from "react";
import Container from "../Container";
import ProductSlider from "../ProductSlider";
import styles from "../../components_css/ProductsInfo.module.css";
import ProductDescription from "../ProductDescription";

const ProductInfo = () => {
  return (
    <Container>
      <div className={styles.info}>
        <div className={styles.left}>
          <ProductSlider />
        </div>
        <div className={styles.right}>
          <ProductDescription />
        </div>
      </div>
    </Container>
  );
};

export default ProductInfo;
