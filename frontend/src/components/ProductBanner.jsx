import React from "react";
import bgImg from "../assets/bannerBg/ProductBanner.png";
import styles from "../components_css/ProductBanner.module.css";
import Container from "./Container";

const ProductBanner = ({ title }) => {
  const banner = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={styles.banner} style={banner}>
      <Container>
        <div className={styles.content}>
          <h2>{title}</h2>
          <p>
            HOME // <span className="red">{title}</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProductBanner;
