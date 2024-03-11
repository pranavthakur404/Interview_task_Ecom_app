import styles from "../components_css/TestimonialCard.module.css";

const TestimonialCard = ({ id, image, title, author }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={image} alt={author} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <h4>- {author}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
