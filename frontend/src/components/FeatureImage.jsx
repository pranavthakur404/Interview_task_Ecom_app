import { useEffect, useState } from "react";
import Container from "../components/Container";
import styles from "../components_css/FeatureImage.module.css";
import { api_url } from "../constant";
import Products from "./Products";

const FeatureImage = () => {
  const [products, setProducts] = useState([
    {
      _id: 1,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 1,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 1,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 1,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);
  const fetching = async () => {
    const res = await fetch(`${api_url}/getAll`);
    const resData = await res.json();
    setProducts(resData.data);
  };
  useEffect(() => {
    // fetching();
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
