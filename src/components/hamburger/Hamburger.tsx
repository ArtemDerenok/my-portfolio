import styles from "./Hamburger.module.scss";

interface IHamburger {
  isMobile: boolean;
}

const Hamburger = ({ isMobile }: IHamburger) => {
  return (
    <div
      className={`${styles.hamburger} ${
        isMobile ? styles.hamburger_active : null
      }`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
