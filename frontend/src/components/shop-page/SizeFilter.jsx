import styles from "../../components_css/shop-page/TopCategory.module.css";

const SizeFilter = () => {
  return (
    <div className={styles.topCategory}>
      <h4>Size</h4>
      <hr style={{ marginBottom: "10px" }} />
      <p>S</p>
      <p>M</p>
      <p>L</p>
      <p>XL</p>
      <p>XXL</p>
    </div>
  );
};

export default SizeFilter;
