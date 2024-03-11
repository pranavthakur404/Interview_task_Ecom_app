import styles from "../components_css/Products.module.css";
import { FaHeart, FaShoppingCart, FaArrowsAlt } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";

const Products = ({ _id, name, price, imageUrl, discount }) => {
  return (
    <div className={styles.products}>
      <div className={styles.image}>
        <img src={imageUrl} alt={name} />
        {discount && <span className={styles.discount}>-{discount}</span>}
        <div className={styles.overlay}>
          <span>
            <FaHeart />
          </span>
          <span>
            <FaShoppingCart />
          </span>
          <span>
            <FaArrowsAlt />
          </span>
          <span>
            <FaShuffle />
          </span>
        </div>
      </div>
      <div className={styles.info}>
        <p className={styles.tag}>Men/Women</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
};

export default Products;
