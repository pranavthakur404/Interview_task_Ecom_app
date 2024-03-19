import { useState } from "react";
import styles from "../../components_css/shopping-cart-page/CartTotalForm.module.css";
import { useCartContext } from "../../context/CartContext";

const CartTotalForm = () => {
  const [shipping, setShipping] = useState("shipping");
  const { cartList } = useCartContext();
  let totalPrice = cartList.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  return (
    <div className={styles.wrapper}>
      <h4>Cart totals</h4>
      <div className={styles.box}>
        <p>SubTotal : ₹{totalPrice}</p>
        <form action="#">
          <p className={styles.formTitle}>Shipping</p>
          <div className={styles.inputContainer}>
            <div>
              <input
                type="radio"
                name="shipping"
                id="flatRae"
                checked={shipping == "shipping"}
                onChange={() => {
                  setShipping("shipping");
                }}
              />
              <label htmlFor="flatRate">Flat Rate</label>
            </div>

            <br />
            <div>
              <input
                type="radio"
                name="shipping"
                id="freeshipping"
                checked={shipping == "freeshipping"}
                onChange={() => {
                  setShipping("freeshipping");
                }}
              />
              <label htmlFor="freeshipping">Free Shipping</label>
            </div>
            <br />
            <div>
              <input
                type="radio"
                name="shipping"
                id="freeshipping"
                checked={shipping == "localpickup"}
                onChange={() => {
                  setShipping("localpickup");
                }}
              />
              <label htmlFor="localpickup">Local Pickup</label>
            </div>
          </div>
        </form>
        <p>Total : ₹{totalPrice}</p>
        <button className={styles.checkoutBtn}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTotalForm;
