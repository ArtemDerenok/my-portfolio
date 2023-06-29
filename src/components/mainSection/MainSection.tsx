import AboutSection from "../aboutSection/AboutSection";
import Header from "../header/Header";
import styles from "./MainSection.module.scss";

const MainSection = ({
  theme,
  handleDarkMode,
}: {
  theme: boolean;
  handleDarkMode: () => void;
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.mainSection}>
        <Header theme={theme} handleDarkMode={handleDarkMode} />
        <AboutSection theme={theme} />
      </div>
    </section>
  );
};

export default MainSection;
