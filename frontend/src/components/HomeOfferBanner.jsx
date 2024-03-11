import styles from "../components_css/HomeOfferBanner.module.css";
import Container from "./Container";
import banner from "../assets/offerBanner/bg2.jpg";
import shade from "../assets/offerBanner/shade.jpg";
import shoes from "../assets/offerBanner/shoes.jpg";

const HomeOfferBanner = () => {
  return (
    <div
      className={styles.OfferBanner}
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.contentContainer}>
        <div className={styles.image}>
          <img src={shade} alt="Shade" className={styles.img1} />
          <img src={shoes} alt="Shoes" className={styles.img2} />
        </div>
        <div className={styles.content}>
          <p>Saving 50%</p>
          <h2>All Online Store</h2>
          <p className={styles.text}>OFFER AVAILABLE ALL SHOES & PRODUCTS</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeOfferBanner;
