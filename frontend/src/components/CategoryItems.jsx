import React from "react";
import styles from "../components_css/CategoryItems.module.css";

const CategoryItems = ({ image, offer, title }) => {
  return (
    <div className={styles.box}>
      <div
        className={styles.bg}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.content}>
          <p>{offer}</p>
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
