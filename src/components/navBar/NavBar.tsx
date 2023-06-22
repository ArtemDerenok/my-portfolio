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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Work</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default NavBar;
