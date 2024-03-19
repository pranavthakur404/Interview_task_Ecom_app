import styles from "../components_css/login/Login.module.css";
import Container from "../components/Container";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <div className={styles.login}>
        <h3 className={styles.title}>Login</h3>
        <hr className={styles.breaker} />
        <form action="#" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Username or Email Address</label> <br />
            <input
              type="text"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">password</label> <br />
            <input
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button className={styles.loginBtn}>Login</button>
          <div className={styles.formBottom}>
            <span className={styles.rememberMe}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember ? true : false}
                onChange={() => {
                  setFormData({ ...formData, remember: !formData.remember });
                }}
              />
              &nbsp;<label htmlFor="rememberme">Remember me</label>
            </span>
            <span>
              <a className={styles.lostPassword} href="#">Lost your password ?</a>
            </span>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
