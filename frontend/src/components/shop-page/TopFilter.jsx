import styles from "../../components_css/shop-page/TopFilter.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsGrid3X3GapFill } from "react-icons/bs";

const TopFilter = ({ setIsMultiDiv, isMultiDiv }) => {
  const active = {
    color: "#eb3e32",
  };
  return (
    <div className={styles.box}>
      <div className={styles.button}>
        <span>
          <BsGrid3X3GapFill
            style={isMultiDiv && active}
            onClick={() => {
              setIsMultiDiv(true);
            }}
          />
        </span>
        <span>
          <GiHamburgerMenu
            style={!isMultiDiv && active}
            onClick={() => {
              setIsMultiDiv(false);
            }}
          />
        </span>
      </div>
      <div className={styles.filter}>
        <label htmlFor="sortby">Sort By :</label>
        <select name="sortby" id="sortby">
          <option value="default">Default</option>
          <option value="popularity">Popularity</option>
          <option value="average rating">Average Rating</option>
          <option value="newsness">Newsness</option>
          <option value="price low to high">Price Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default TopFilter;
