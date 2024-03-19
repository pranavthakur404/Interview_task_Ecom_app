import { useState } from "react";
import styles from "../components_css/ProductDescription.module.css";
import Rating from "./Rating";
import { CiHeart } from "react-icons/ci";
import { FaShuffle } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { GoGlobe } from "react-icons/go";
import { FaPinterestP } from "react-icons/fa6";

const ProductDescription = () => {
  const [size, setSize] = useState("M");
  const [quantity, setQuanity] = useState(1);

  const handleSizeClick = (data) => {
    setSize(data);
  };
  return (
    <div className={styles.description}>
      <h3 className={styles.name}>Leather Mens Slipper</h3>
      <p className={styles.price}>
        $20.19 <span className={styles.discount}>-$10</span>
      </p>
      <div className={styles.rating}>
        <Rating num={3} />
      </div>
      <div className={styles.about}>
        <p>
          Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmll
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mill
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exet
          commodo consequat. Duis aute irure dolor
        </p>
      </div>

      {/* colors */}
      <div className={styles.color}>
        <p>Color</p>
        <span className={styles.list}>
          <span className={styles.border}>
            <i className={styles.color1}></i>
          </span>
          <span className={styles.border}>
            <i className={styles.color2}></i>
          </span>
          <span className={styles.border}>
            <i className={styles.color3}></i>
          </span>
          <span className={styles.border}>
            <i className={styles.color4}></i>
          </span>
        </span>
      </div>

      {/* size */}
      <div className={styles.size}>
        <p>Size</p>
        <div className={styles.choice}>
          <span
            className={`${styles.border} ${size == "S" ? styles.active : ""}`}
            onClick={() => {
              handleSizeClick("S");
            }}
          >
            <span className={styles.text}>S</span>
          </span>
          <span
            className={`${styles.border} ${size == "M" ? styles.active : ""}`}
            onClick={() => {
              handleSizeClick("M");
            }}
          >
            <span className={styles.text}>M</span>
          </span>
          <span
            className={`${styles.border} ${size == "L" ? styles.active : ""}`}
            onClick={() => {
              handleSizeClick("L");
            }}
          >
            <span className={styles.text}>L</span>
          </span>
          <span
            className={`${styles.border} ${size == "XL" ? styles.active : ""}`}
            onClick={() => {
              handleSizeClick("XL");
            }}
          >
            <span className={styles.text}>XL</span>
          </span>
        </div>
      </div>

      {/* quanity and add to card button */}
      <div className={styles.quantity_cartBtn}>
        <div className={styles.box}>
          <div className={styles.num}>{quantity}</div>
          <div className={styles.buttons}>
            <span
              className={styles.decrement}
              onClick={() => {
                setQuanity(quantity - 1);
              }}
            >
              -
            </span>
            <span
              className={styles.increment}
              onClick={() => {
                setQuanity(quantity + 1);
              }}
            >
              +
            </span>
          </div>
        </div>
        <button className={styles.cartBtn}>Add to Cart</button>
      </div>

      {/* wishlist */}
      <div className={styles.wishlist}>
        <button className={styles.wishBtn}>
          <CiHeart /> Add to Wishlist
        </button>
        <button className={styles.compareBtn}>
          <FaShuffle /> Add to Compare
        </button>
      </div>

      {/* social */}
      <div className={styles.socialBox}>
        <div className={styles.productCode}>
          Code : <span>CH256xl</span>
        </div>
        <div className={styles.socialIcons}>
          Share :
          <a href="#">
            <TiSocialFacebook />
          </a>
          <a href="#">
            <GoGlobe />
          </a>
          <a href="#">
            <FaPinterestP />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
