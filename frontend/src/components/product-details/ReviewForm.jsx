import styles from "../../components_css/product-details/ReviewForm.module.css";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const ReviewForm = () => {
  const [ratingPoints, setRatingPoints] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    title: "",
    comment: "",
  });

  const yellow = {
    color: "#f5c61a",
  };
  const transparent = {
    color: "silver",
  };

  const updateFormData = (e) => {
    setFormData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <h3 className={styles.title}>Write a review</h3>
      <div>
        <label htmlFor="name">Name</label> <br />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={updateFormData}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label> <br />
        <input
          type="email"
          name="email"
          placeholder="john.smith@example.com"
          value={formData.email}
          onChange={updateFormData}
        />
      </div>
      <div>
        <label htmlFor="rating">rating</label> <br />
        <span className={styles.rating}>
          <FaStar
            style={ratingPoints >= 1 ? yellow : transparent}
            onClick={() => {
              setRatingPoints(1);
            }}
          />
          <FaStar
            style={ratingPoints >= 2 ? yellow : transparent}
            onClick={() => {
              setRatingPoints(2);
            }}
          />
          <FaStar
            style={ratingPoints >= 3 ? yellow : transparent}
            onClick={() => {
              setRatingPoints(3);
            }}
          />
          <FaStar
            style={ratingPoints >= 4 ? yellow : transparent}
            onClick={() => {
              setRatingPoints(4);
            }}
          />
          <FaStar
            style={ratingPoints >= 5 ? yellow : transparent}
            onClick={() => {
              setRatingPoints(5);
            }}
          />
        </span>
      </div>
      <div>
        <label htmlFor="title">Review Title</label> <br />
        <input
          type="text"
          name="title"
          placeholder="Give your review title"
          value={formData.title}
          onChange={updateFormData}
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label> <br />
        <textarea
          name="comment"
          maxLength={1500}
          placeholder="Write you comment"
          value={formData.comment}
          onChange={updateFormData}
        />
      </div>
    </form>
  );
};

export default ReviewForm;
