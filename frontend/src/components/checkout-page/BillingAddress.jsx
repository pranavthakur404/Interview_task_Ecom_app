import { NavLink } from "react-router-dom";
import styles from "../../components_css/checkout-page/BillingAddress.module.css";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const BillingAddress = () => {
  const asianCountries = [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Israel",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Lebanon",
    "Malaysia",
    "Maldives",
    "Mongolia",
    "Myanmar (Burma)",
    "Nepal",
    "North Korea",
    "Oman",
    "Pakistan",
    "Palestine",
    "Philippines",
    "Qatar",
    "Saudi Arabia",
    "Singapore",
    "South Korea",
    "Sri Lanka",
    "Syria",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Turkey",
    "Turkmenistan",
    "United Arab Emirates",
    "Uzbekistan",
    "Vietnam",
    "Yemen",
  ];

  //   checking privacy polic
  const [isPrivacyPolicyCheck, setIsPrivacyPolicyCheck] = useState(false);
  const { cartList } = useCartContext();
  let total = cartList.reduce((a, b) => {
    return a + b.price * b.quantity;
  }, 0);

  //   handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
  };

  return (
    <div className={styles.wrapper}>
      {/* billing address form */}
      <div className={styles.billing}>
        <h4>Billing details</h4>
        <hr className={styles.devider} />
        <form action="#">
          {/* first and lastname */}
          <div className={styles.nameContainer}>
            <div>
              <span>
                <label htmlFor="fistName">First Name</label>
                <abbr title="required">*</abbr>
              </span>
              <br />
              <input type="text" name="firstName" required />
            </div>
            <div>
              <span>
                <label htmlFor="fistName">Last Name</label>
                <abbr title="required">*</abbr>
              </span>
              <br />
              <input type="text" name="lastName" required />
            </div>
          </div>

          {/* company name */}
          <div>
            <label htmlFor="company">Company Name (optional)</label>
            <input type="text" name="company" id="company" />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="countries">Select a country:</label>
            <abbr title="required">*</abbr>
            <input
              list="countries"
              name="countries"
              placeholder="Select Your country"
              required
            />
            <datalist id="countries">
              {asianCountries.map((country, index) => {
                return <option key={index} value={country} />;
              })}
              <option value="Chrome" />
            </datalist>
          </div>

          {/* street address */}
          <div>
            <label htmlFor="street">Street Address</label>
            <abbr title="required">*</abbr>
            <input
              type="text"
              placeholder="House number and street name"
              required
            />
          </div>

          {/* district */}
          <div>
            <label htmlFor="disctrict">District</label>
            <abbr title="required">*</abbr>
            <input type="text" placeholder="Enter your District" required />
          </div>

          {/* pincode/ */}
          <div>
            <label htmlFor="pincode">pincode</label>
            <abbr title="required">*</abbr>
            <input type="number" name="pincode" required />
          </div>

          {/* email address */}
          <div>
            <label htmlFor="pincode">pincode</label>
            <abbr title="required">*</abbr>
            <input type="email" placeholder="abc@example.com" />
          </div>

          {/* order notes */}
          <div>
            <label htmlFor="notes">Order Notes (optional)</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Notes about your order, eg. special notes for delivery"
            ></textarea>
          </div>
        </form>
      </div>

      {/* order details */}
      <div className={styles.orderDetails}>
        <h4>Your order</h4>
        <hr className={styles.devider} />

        {/* title */}
        <div className={styles.info}>
          <p>Product</p>
          <p>Total</p>
        </div>

        {/* products */}
        <div className={styles.productList}>
          {cartList.map((data, index) => {
            return (
              <span key={index} className={styles.product}>
                <p>
                  {data.title} X {data.quantity}
                </p>
                <p>₹{data.price}</p>
              </span>
            );
          })}
        </div>

        {/* sub total */}
        <div className={styles.info}>
          <p>Subtotal</p>
          <p>₹{total}</p>
        </div>

        {/* shipping */}
        <div className={styles.info}>
          <p>Shipping</p>
          <p>Flat Rate: 199</p>
        </div>

        {/* total */}
        <div className={styles.info}>
          <p>Total</p>
          <p>₹{total}</p>
        </div>

        <p className={styles.information}>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <NavLink to="/" className={styles.link}>
            Privacy Policy
          </NavLink>
          .
        </p>

        <form action="#" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={isPrivacyPolicyCheck}
            onChange={() => {
              setIsPrivacyPolicyCheck(!isPrivacyPolicyCheck);
            }}
          />
          <label htmlFor="termsAndCondition">
            I have read and agree to the website terms and conditions
          </label>
          <abbr title="required">*</abbr>
          <br />
          <button
            disabled={!isPrivacyPolicyCheck}
            className={styles.placeOrderBtn}
          >
            PLACE ORDER
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
