import styles from "./Hamburger.module.scss";

interface IHamburger {
  isMobile: boolean;
  theme: boolean;
}

const Hamburger = ({ isMobile, theme }: IHamburger) => {
  return (
    <div
      className={`${styles.hamburger} ${
        isMobile ? styles.hamburger_active : null
      }`}
    >
      <span className={`${theme ? styles.dark : null}`}></span>
      <span className={`${theme ? styles.dark : null}`}></span>
      <span className={`${theme ? styles.dark : null}`}></span>
    </div>
  );
};

export default Hamburger;
