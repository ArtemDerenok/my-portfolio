import styles from "./App.module.scss";
import AboutSection from "./components/aboutSection/AboutSection";
import Header from "./components/header/Header";

const App = () => {
  return (
    <>
      <section className={styles.firstSection}>
        <div
          className={`${styles.container} ${styles.firstSection__navContainer}`}
        >
          <Header />
          <AboutSection />
        </div>
      </section>
    </>
  );
};

export default App;
