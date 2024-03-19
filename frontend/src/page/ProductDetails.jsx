import BestSeller from "../components/BestSeller";
import ProductBanner from "../components/ProductBanner";
import ProductInfo from "../components/product-details/ProductInfo";
import InfoTabs from "../components/product-details/InfoTabs";
import Footer from "../components/Footer";

const ProductDetails = () => {
  return (
    <div>
      <ProductBanner title="Product Details" />
      <ProductInfo />
      <InfoTabs />
      <BestSeller />
      <Footer />
    </div>
  );
};

export default ProductDetails;
