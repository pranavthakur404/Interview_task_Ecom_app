import React from "react";
import HomeBanner from "../components/HomeBanner";
import CategoryContainer from "../components/CategoryContainer";
import FeatureImage from "../components/FeatureImage";
import HomeOfferBanner from "../components/HomeOfferBanner";
import BenefitsContainer from "../components/BenefitsContainer";
import FeedBack from "../components/FeedBack";
import Footer from "../components/Footer";
import BestSeller from "../components/BestSeller";

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <CategoryContainer />
      <FeatureImage />
      <HomeOfferBanner />
      <BenefitsContainer />
      <BestSeller />
      <FeedBack />
      <Footer />
    </div>
  );
};

export default Home;
