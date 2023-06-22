import AboutSection from "./components/aboutSection/AboutSection";
import Header from "./components/header/Header";
import styles from "./App.module.scss";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
      <Contact />
      <Footer />
    </>
  );
};

export default App;
