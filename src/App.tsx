import { useEffect, useState } from "react";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import MainSection from "./components/mainSection/MainSection";
import ProjectsSection from "./components/projectsSection/ProjectsSection";
import styles from "./App.module.scss";

const App = () => {
  const [theme, setTheme] = useState(false);

  const handleDarkMode = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add(styles.dark);
    } else {
      document.body.classList.remove(styles.dark);
    }
  }, [theme]);

  return (
    <>
      <MainSection theme={theme} handleDarkMode={handleDarkMode} />
      <ProjectsSection theme={theme} />
      <Contact />
      <Footer theme={theme} />
    </>
  );
};

export default App;
