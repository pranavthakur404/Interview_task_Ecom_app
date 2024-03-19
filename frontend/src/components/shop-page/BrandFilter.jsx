import { useState } from "react";
import styles from "../../components_css/shop-page/TopCategory.module.css";
import BrandList from "./BrandList";

const BrandFilter = () => {
  const [brands, setBrands] = useState([
    {
      id: 1,
      brand: "Lakmeetao",
      count: "6",
    },
    {
      id: 2,
      brand: "Beautifill",
      count: "4",
    },
    {
      id: 3,
      brand: "Made In GD",
      count: "2",
    },
    {
      id: 4,
      brand: "Pecifico",
      count: "6",
    },
    {
      id: 5,
      brand: "Xlovgtir",
      count: "12",
    },
  ]);
  return (
    <div className={styles.topCategory}>
      <h4>Brand</h4>
      <hr className={styles.breaker} />
      {brands &&
        brands.map((li) => {
          return <BrandList key={li.id} {...li} />;
        })}
    </div>
  );
};

export default BrandFilter;
