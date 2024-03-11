import { useEffect, useState } from "react";
import Container from "../components/Container";
import styles from "../components_css/FeatureImage.module.css";
import { api_url } from "../constant";
import Products from "./Products";

const FeatureImage = () => {
  const [products, setProducts] = useState([]);
  const fetching = async () => {
    const res = await fetch(`${api_url}/getAll`);
    const resData = await res.json();
    setProducts(resData.data);
  };
  useEffect(() => {
    fetching();
  }, []);
  return (
    <Container>
      <div className={styles.featureImage}>
        <div className={styles.header}>
          <h1>Featured Items</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className={styles.featureProducts}>
          {products &&
            products.map((data) => {
              return <Products key={data._id} {...data} />;
            })}
        </div>
      </div>
    </Container>
  );
};

export default FeatureImage;
