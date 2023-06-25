import AboutSection from "../aboutSection/AboutSection";
import Header from "../header/Header";
import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainSection}>
        <Header />
        <AboutSection />
      </div>
    </section>
  );
};

export default MainSection;
