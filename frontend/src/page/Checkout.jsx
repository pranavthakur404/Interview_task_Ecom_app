import styles from "../page_css/Checkout.module.css";
import ProductBanner from "../components/ProductBanner";
import Container from "../components/Container";
import Login from "../components/checkout-page/Login";
import Coupon from "../components/checkout-page/Coupon";
import { useState } from "react";
import { IoInformationCircle } from "react-icons/io5";
import BillingAddress from "../components/checkout-page/BillingAddress";

const Checkout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const hide = {
    height: "0px",
    overflow: "hidden",
    padding: "0px",
  };

  return (
    <div className={styles.checkout}>
      <ProductBanner title={"CHECKOUT"} />
      <Container>
        <main>
          <div>
            <span className={styles.loginBtn}>
              <IoInformationCircle />
              <p>Returning customer?</p>
              <br className={styles.buttonBreaker} />
              <span
                className={styles.btn}
                onClick={() => {
                  setShowLogin(!showLogin);
                  setShowCoupon(false);
                }}
              >
                &nbsp; Click here to login
              </span>
            </span>

            {
              <div
                className={styles.loginChild}
                style={showLogin ? null : hide}
              >
                <Login />
              </div>
            }
          </div>
          <div>
            <span className={styles.couponBtn}>
              <IoInformationCircle />
              <p>Have a Coupon?</p>
              <br className={styles.buttonBreaker} />
              <span
                className={styles.btn}
                onClick={() => {
                  setShowCoupon(!showCoupon);
                  setShowLogin(false);
                }}
              >
                &nbsp; Click here to enter your code
              </span>
            </span>
            {
              <div
                className={styles.couponChild}
                style={showCoupon ? null : hide}
              >
                <Coupon />
              </div>
            }
          </div>

          {/* Checkout Container */}
          <div className={styles.checkoutContainer}>
            <BillingAddress />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Checkout;
