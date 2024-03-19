import styles from "../../components_css/product-details/Review.module.css";
import Rating from "../Rating";

const Review = ({ id, title, author, date, comment, rating }) => {
  return (
    <div className={styles.review}>
      <Rating num={rating} />
      <p className={styles.title}>{title}</p>
      <p className={styles.time}>
        {author} on {date}
      </p>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default Review;
