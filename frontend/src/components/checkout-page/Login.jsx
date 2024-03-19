import React, { useState } from "react";
import styles from "../../components_css/checkout-page/Login.module.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <div className={styles.login}>
      <p>
        If you have shopped with us before, please enter your details below. If
        you are a new customer, please proceed to the Billing & Shipping
        section.
      </p>
      <form action="#">
        <div>
          <label htmlFor="email">Username or Email</label>
          <input
            type="text"
            required
            name="email"
            value={data.email}
            onChange={(e) => {
              setData((prevData) => {
                return { ...prevData, [e.target.name]: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            required
            name="password"
            value={data.password}
            onChange={(e) => {
              setData((prevData) => {
                return { ...prevData, [e.target.name]: e.target.value };
              });
            }}
          />
        </div>
      </form>
      <button className={styles.loginBtn}>Login</button>
      <br />
      <br />
      <button className={styles.resetPassBtn}>Forget Password ?</button>
    </div>
  );
};

export default Login;
