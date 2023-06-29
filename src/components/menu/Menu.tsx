import styles from "./Menu.module.scss";

const Menu = ({ theme }: { theme: boolean }) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={`${styles.menu__listItem}`}>
          <a href="#about" className={`${theme ? styles.dark : null}`}>
            Home
          </a>
        </li>
        <li className={`${styles.menu__listItem}`}>
          <a href="#about" className={`${theme ? styles.dark : null}`}>
            About
          </a>
        </li>
        <li className={`${styles.menu__listItem}`}>
          <a href="#projects" className={`${theme ? styles.dark : null}`}>
            Work
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
