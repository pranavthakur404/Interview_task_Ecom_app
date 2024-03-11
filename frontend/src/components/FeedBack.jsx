import Container from "./Container";
import person1 from "../assets/testimonial/person1.jpg";
import person2 from "../assets/testimonial/person2.jpg";
import styles from "../components_css/Feedback.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const FeedBack = () => {
  const testimonial = [
    {
      id: 1,
      image: person1,
      title:
        "Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.",
      author: "Jaren Hammer",
    },
    {
      id: 2,
      image: person2,
      title:
        "Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.",
      author: "Dorian Cordova",
    },
    {
      id: 3,
      image: person2,
      title:
        "Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.",
      author: "Dorian Cordova",
    },
  ];
  return (
    <Container>
      <div className={styles.heading}>
        <h2>Client Feedback</h2>
        <p>There are many variations of passages of Lorem Ipsum available</p>
      </div>
      <Swiper
        // slidesPerView={2}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          1100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1110: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        {testimonial.map((li) => {
          return (
            <SwiperSlide key={li.id}>
              <TestimonialCard {...li} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default FeedBack;
