import Container from "../components/Container";
import ProductBanner from "../components/ProductBanner";
import LeftContent from "../components/about-page/LeftContent";
import styles from "../page_css/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <ProductBanner title={"ABOUT US"} />
      <Container>
        <LeftContent></LeftContent>
      </Container>
    </div>
  );
};

export default About;
