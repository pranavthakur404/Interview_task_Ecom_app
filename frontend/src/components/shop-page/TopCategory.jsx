import styles from "../../components_css/shop-page/TopCategory.module.css";
import { useState } from "react";
import TopCategoryList from "./TopCategoryList";

const TopCategory = () => {
  const [data, setData] = useState([
    {
      id: 1,
      category: "Shoes",
      count: 3,
    },
    {
      id: 2,
      category: "Leather",
      count: 20,
    },
  ]);
  return (
    <div className={styles.topCategory}>
      <h4>Top Category</h4>
      <hr className={styles.breaker} />
      {data &&
        data.map((li) => {
          return <TopCategoryList key={li.id} {...li} />;
        })}
    </div>
  );
};

export default TopCategory;
