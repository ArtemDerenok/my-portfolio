import styles from "./NavBar.module.scss";

interface INavBar {
  isMobile: boolean;
  handleIsMobile: () => void;
}

const NavBar = ({ isMobile, handleIsMobile }: INavBar) => {
  return (
    <div
      onClick={handleIsMobile}
      className={`${styles.navBar} ${isMobile ? styles.active : null}`}
    >
      <ul className={styles.navBar__list}>
        <li>
          <a href="#about">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Work</a>
        </li>
        <li>
          <a href="#contacts">Contact</a>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default NavBar;
