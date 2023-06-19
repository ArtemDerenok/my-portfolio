import Button from "../button/Button";
import DarkModeBtn from "../darkModeBtn/DarkModeBtn";
import Link from "../link/Link";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import gitHubImg from "../../assets/icons/github.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__boxOne}>
        <Menu />
        <div className={styles.header__boxTwo}>
          <Link
            img={gitHubImg}
            src="https://github.com/ArtemDerenok"
            alt="github"
          />
          <DarkModeBtn />
        </div>
        <Button text="Contact me &rarr;" />
      </div>
    </header>
  );
};

export default Header;
