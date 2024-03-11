import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "../components_css/HomeBanner.module.css";

// import required modules
import { Navigation } from "swiper/modules";

import img1 from "../assets/bannerBg/slider-01.jpg";
import img2 from "../assets/bannerBg/slider-04.jpg";

const HomeBanner = () => {
  const sliderData = [
    {
      id: 1,
      offer: "UP TO 30% OFF",
      title: "Exclusive New Shoes",
      image: img1,
    },
    {
      id: 2,
      offer: "UP TO 30% OFF",
      title: "Exclusive New Shoes",
      image: img2,
    },
  ];
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={`mySwiper ${styles.swipperBanner}`}
      >
        {sliderData.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className={styles.sliderContainer}>
                <img
                  src={data.image}
                  className={styles.sliderImage}
                  alt="background"
                />
                <div className={styles.sliderContent}>
                  <p>{data.offer}</p>
                  <h2>{data.title}</h2>
                  <button>Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
