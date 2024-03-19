import { useState } from "react";
import styles from "../../components_css/product-details/Reviews.module.css";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const Reviews = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 5,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 3,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 2,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 2,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 2,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 6,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 2,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 7,
      title: "Awesome Shipping Service",
      author: "Nantu Nayal",
      date: "sep 30, 2022",
      rating: 2,
      comment:
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);

  const [showingReview, setShowingReview] = useState(2);

  return (
    <div className="reviewContainer">
      <div className={styles.top}>
        <h4>Customer Reviews</h4>
        <button
          className={styles.reviewBtn}
          onClick={() => {
            setIsFormOpen(!isFormOpen);
          }}
        >
          Write a review
        </button>
      </div>
      {isFormOpen && <ReviewForm></ReviewForm>}
      <hr />
      <div className={styles.reviewsContainer}>
        {reviews &&
          reviews.map((data, index) => {
            if (index <= showingReview) {
              return <Review key={data.id} {...data} />;
            }
          })}
      </div>

      {showingReview <= reviews.length ? (
        <button
          className={styles.showMoreButton}
          onClick={() => {
            setShowingReview(showingReview + 3);
          }}
        >
          Load More
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Reviews;
