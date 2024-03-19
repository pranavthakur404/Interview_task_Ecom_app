import ProductBanner from "../components/ProductBanner";
import styles from "../page_css/ShoppingCart.module.css";
import Container from "../components/Container";
import { useCartContext } from "../context/CartContext";
import List from "../components/shopping-cart-page/List";
import CartTotalForm from "../components/shopping-cart-page/CartTotalForm";
import Coupon from "../components/shopping-cart-page/Coupon";
import CalShipping from "../components/shopping-cart-page/CalShipping";
import { NavLink } from "react-router-dom";

const ShoppingCart = () => {
  const { cartList, clearCart } = useCartContext();
  return (
    <div className={styles.shoppingcart}>
      <ProductBanner title="SHOPPINT CART" />
      <Container>
        <div className={styles.cartContainer}>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartList &&
                cartList.map((list) => {
                  return <List key={list.id} {...list} />;
                })}
            </tbody>
          </table>
        </div>

        {/* clear button */}
        <div className={styles.buttons}>
          <NavLink to="/shop">
            <button className={styles.shoppintBtn}>Continue Shopping</button>
          </NavLink>
          <button className={styles.clearBtn} onClick={clearCart}>
            CLEAR CART
          </button>
        </div>

        {/* billing container */}
        <div className={styles.billing}>
          <CalShipping />
          <Coupon />
          <CartTotalForm />
        </div>
      </Container>
    </div>
  );
};

export default ShoppingCart;
