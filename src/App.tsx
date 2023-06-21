import AboutSection from "./components/aboutSection/AboutSection";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import styles from "./App.module.scss";

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
      <Footer />
    </>
  );
};

export default App;
