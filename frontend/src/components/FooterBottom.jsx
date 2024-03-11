import styles from "../components_css/FooterBottom.module.css";
import Container from "./Container";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <Container>
        <div className={styles.footerBottomInner}>
          <p>© 2021 Shome. Made with by Codecarnival.</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
