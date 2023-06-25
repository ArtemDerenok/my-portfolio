import { useState } from "react";
import Button from "../button/Button";
import DarkModeBtn from "../darkModeBtn/DarkModeBtn";
import Link from "../link/Link";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import gitHubImg from "../../assets/icons/github.svg";
import styles from "./Header.module.scss";
import NavBar from "../navBar/NavBar";
import Hamburger from "../hamburger/Hamburger";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__boxOne}>
        <Menu />
        <div className={styles.header__boxTwo}>
          <Link
            img={gitHubImg}
            href="https://github.com/ArtemDerenok"
            alt="github"
          />
          <DarkModeBtn />
          <div onClick={handleMobileMenu} className={styles.header__mobileMenu}>
            <Hamburger isMobile={isMobile} />
          </div>
        </div>
        <div className={styles.header__contactBtn}>
          <Button text="Contact me &rarr;" href="#contacts" />
        </div>
      </div>
      <NavBar isMobile={isMobile} handleIsMobile={handleMobileMenu} />
    </header>
  );
};

export default Header;
