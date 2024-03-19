import { useState } from "react";
import Container from "../components/Container";
import ProductBanner from "../components/ProductBanner";
import BrandFilter from "../components/shop-page/BrandFilter";
import ColorFilter from "../components/shop-page/ColorFilter";
import PriceFilter from "../components/shop-page/PriceFilter";
import ShopProducts from "../components/shop-page/ShopProducts";
import SizeFilter from "../components/shop-page/SizeFilter";
import TopCategory from "../components/shop-page/TopCategory";
import TopFilter from "../components/shop-page/TopFilter";
import styles from "../page_css/Shop.module.css";

const Shop = () => {
  const [isMultiDiv, setIsMultiDiv] = useState(true);
  return (
    <div className={styles.shop}>
      <ProductBanner title="PRODUCT PAGE" />
      <Container>
        <main className={styles.main}>
          <div className={styles.left}>
            <TopCategory />
            <PriceFilter />
            {/* <ColorFilter /> */}
            <SizeFilter />
            <BrandFilter />
          </div>
          <div className={styles.right}>
            <TopFilter setIsMultiDiv={setIsMultiDiv} isMultiDiv={isMultiDiv} />
            <ShopProducts isMultiDiv={isMultiDiv} />
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Shop;
