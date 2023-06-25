import styles from "./Menu.module.scss";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        <li className={styles.menu__listItem}>
          <a href="#about">Home</a>
        </li>
        <li className={styles.menu__listItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.menu__listItem}>
          <a href="#projects">Work</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
