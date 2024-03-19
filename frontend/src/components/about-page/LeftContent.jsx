import styles from "../../components_css/about-page/LeftContent.module.css";
import shoes from "../../assets/offerBanner/shoes.jpg";
import shade from "../../assets/offerBanner/shade.jpg";

const LeftContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.box}>
          <img src={shade} className={styles.img1} alt="shoes" />
          <img src={shoes} className={styles.img2} alt="shoes" />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.heading}>
          Smart Life <br />
          <span className={styles.bolder}>With Smart Shoes</span>
        </p>
        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidata non proident, sunt in culpa qui officia.
        </p>
        <button className={styles.contactusBtn}>Contact Us</button>
      </div>
    </div>
  );
};

export default LeftContent;
