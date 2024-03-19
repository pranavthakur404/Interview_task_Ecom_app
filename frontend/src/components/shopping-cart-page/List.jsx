import styles from "../../components_css/wishlist-page/List.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import styles2 from "../../components_css/shopping-cart-page/List.module.css";
import { useCartContext } from "../../context/CartContext";

const List = ({ id, imgUrl, title, quantity, price }) => {
  const { deleteItem, increaseQuanity, decreaseQuanity } = useCartContext();
  return (
    <tr className={styles.list}>
      <td className={styles.delBtn}>
        <button
          onClick={() => {
            deleteItem(id);
          }}
        >
          <RiDeleteBin5Line />
        </button>
      </td>
      <td colSpan={2} className={styles.title}>
        <img src={imgUrl} alt={title} />
        <span title={title}>{title}</span>
      </td>
      <td>₹{price}</td>
      <td>
        <div className={styles2.quantityBox}>
          <span
            onClick={() => {
              decreaseQuanity(id);
            }}
          >
            -
          </span>
          {quantity}
          <span
            onClick={() => {
              increaseQuanity(id);
            }}
          >
            +
          </span>
        </div>
      </td>
      <td>
        <span className={styles2.totalPrice}>₹{price * quantity}</span>
      </td>
    </tr>
  );
};

export default List;
