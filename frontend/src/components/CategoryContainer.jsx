import styles from "../components_css/CategoryContainer.module.css";
import img1 from "../assets/category_container/img1.jpg";
import img2 from "../assets/category_container/img2.jpg";
import img3 from "../assets/category_container/img3.jpg";
import CategoryItems from "./CategoryItems";

const CategoryContainer = () => {
  const cateogryData = [
    {
      id: 1,
      image: img1,
      offer: "Sale 50% Off",
      title: "SPORTS SHOES",
    },
    {
      id: 2,
      image: img2,
      offer: "Sale 50% Off",
      title: "SPORTS SHOES",
    },
    {
      id: 3,
      image: img3,
      offer: "Sale 50% Off",
      title: "SPORTS SHOES",
    },
  ];
  return (
    <div className={styles.categoryContainer}>
      {cateogryData.map((data) => {
        return <CategoryItems key={data.id} {...data} />;
      })}
    </div>
  );
};

export default CategoryContainer;
