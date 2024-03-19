import styles from "../../components_css/wishlist-page/List.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";

const List = ({ id, imgUrl, title, inStock, price, removeList }) => {
  return (
    <tr className={styles.list}>
      <td className={styles.delBtn}>
        <button
          onClick={() => {
            removeList(id);
          }}
        >
          <RiDeleteBin5Line />
        </button>
      </td>
      <td colSpan={2} className={styles.title}>
        <img src={imgUrl} alt={title} />
        <span title={title}>{title}</span>
      </td>
      <td>
        {inStock ? (
          <p className={styles.inStock}>In Stock</p>
        ) : (
          <p className={styles.outStock}>Out of Stock</p>
        )}
      </td>
      <td>₹{price}</td>
      <td>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </td>
    </tr>
  );
};

export default List;
