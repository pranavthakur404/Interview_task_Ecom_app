import { useEffect, useState } from "react";
import styles from "../components_css/BestSeller.module.css";
import Container from "./Container";
import { api_url } from "../constant";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Products from "./Products";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const fetching = async () => {
    const res = await fetch(`${api_url}/getAll`);
    const resData = await res.json();
    setProducts(resData.data);
  };
  useEffect(() => {
    fetching();
  });
  return (
    <Container>
      <div className={styles.bestSeller}>
        <div className={styles.heading}>
          <h2>Best Seller</h2>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className={styles.products}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              551: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {products &&
              products.map((data) => {
                return (
                  <SwiperSlide key={data._id}>
                    <Products {...data} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default BestSeller;
