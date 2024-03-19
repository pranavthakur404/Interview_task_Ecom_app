import styles from "../../components_css/shop-page/PriceFilter.module.css";
import { useState } from "react";

const PriceFilter = () => {
  const [value, setValue] = useState(1000);
  return (
    <div className={styles.priceFilter}>
      <h4>Price Filter</h4>
      <hr className={styles.breaker} />
      <form action="#">
        <span>₹{value}</span>
        <input
          type="range"
          min="100"
          max="10000"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default PriceFilter;
