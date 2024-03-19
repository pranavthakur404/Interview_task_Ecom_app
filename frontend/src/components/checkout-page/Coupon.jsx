import { useState } from "react";
import styles from "../../components_css/checkout-page/Coupon.module.css";

const Coupon = () => {
  const [coupon, setCoupon] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.coupon}>
      <p>If you have a coupon code, please apply it below.</p>
      <form action="#" onSubmit={handleSubmit}>
        <input
          type="text"
          value={coupon}
          placeholder="Coupon code"
          onChange={(e) => {
            setCoupon(e.target.value);
          }}
        />
        <button>APPLY COUPON</button>
      </form>
    </div>
  );
};

export default Coupon;
