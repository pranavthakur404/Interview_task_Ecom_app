import styles from "../../components_css/shopping-cart-page/Coupon.module.css";
import { useState } from "react";

const Coupon = () => {
  const [couponValue, setCouponValue] = useState("");
  return (
    <div className={styles.coupon}>
      <h4>Coupon Code</h4>
      <p>Enter your coupon code if you have one.</p>
      <form action="#">
        <input
          type="text"
          placeholder="Enter Your Coupon Code.."
          value={couponValue}
          onChange={(e) => {
            setCouponValue(e.target.value);
          }}
        />
        <button>Apply Coupon</button>
      </form>
    </div>
  );
};

export default Coupon;
