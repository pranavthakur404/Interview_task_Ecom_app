import styles from "../../components_css/shopping-cart-page/CalShipping.module.css";
import { useState } from "react";
const CalShipping = () => {
  const [data, setData] = useState({
    country: "",
    state: "",
    town: "",
    zip: "",
  });
  return (
    <div className={styles.box}>
      <h4>Calculate Shipping</h4>
      <p>Estimate your shipping fee *</p>
      <form action="#">
        <p className={styles.formTitle}>Calculate Shipping</p>
        <select
          name="country"
          id="country"
          value={data.country}
          onChange={(e) => {
            setData((prevData) => {
              return { ...prevData, [e.target.name]: e.target.value };
            });
          }}
        >
          <option value="Select a country">Select A Country</option>
        </select>
        <input
          type="text"
          name="state"
          placeholder="State / Country"
          value={data.state}
          onChange={(e) => {
            setData((prevData) => {
              return { ...prevData, [e.target.name]: e.target.value };
            });
          }}
        />
        <input
          type="text"
          name="town"
          placeholder="Town / City"
          value={data.town}
          onChange={(e) => {
            setData((prevData) => {
              return { ...prevData, [e.target.name]: e.target.value };
            });
          }}
        />
        <input
          type="text"
          name="zip"
          placeholder="Postcode / Zip"
          value={data.zip}
          onChange={(e) => {
            setData((prevData) => {
              return { ...prevData, [e.target.name]: e.target.value };
            });
          }}
        />
        <button type="submit">Update Total</button>
      </form>
    </div>
  );
};

export default CalShipping;
