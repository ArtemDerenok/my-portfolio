import Link from "../link/Link";
import Logo from "../logo/Logo";
import linkedIcon from "../../assets/icons/linked.svg";
import telegramIcon from "../../assets/icons/telegram.png";
import githubIcon from "../../assets/icons/github.svg";
import styles from "./Footer.module.scss";

const Footer = ({ theme }: { theme: boolean }) => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <ul>
        <li>
          <Link
            img={linkedIcon}
            href="https://www.linkedin.com/in/artem-derenok-78ba6823b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BgDz3JUnCS5ywuJw8WKJQcw%3D%3D"
            alt="linkedIn"
            theme={theme}
          />
        </li>
        <li>
          <Link
            img={telegramIcon}
            href="https://t.me/ad1237832"
            alt="telegram"
            theme={theme}
          />
        </li>
        <li>
          <Link
            img={githubIcon}
            href="https://github.com/ArtemDerenok"
            alt="github"
            theme={theme}
          />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
