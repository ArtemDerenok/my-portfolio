import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import tsIcon from "../../assets/icons/ts.svg";
import gitHubIcon from "../../assets/icons/github.svg";
import deployIcon from "../../assets/icons/deploy.svg";
import Tag from "../tag/Tag";
import styles from "./Card.module.scss";
import Link from "../link/Link";

interface ICard {
  heading: string;
  img: string;
  description: string;
}

const Card = ({ heading, img, description }: ICard) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>{heading}</h4>
      <img className={styles.card__img} src={img} alt={heading} />
      <div className={styles.card__tags}>
        <div className={styles.card__tagsBoxOne}>
          <Tag text="HTML" icon={htmlIcon} />
          <Tag text="CSS" icon={cssIcon} />
          <Tag text="JavaScript" icon={jsIcon} />
          <Tag text="TypeScript" icon={tsIcon} />
        </div>
        <div className={styles.card__tagsBoxTwo}>
          <Link
            img={gitHubIcon}
            href="https://github.com/ArtemDerenok"
            alt="github"
          />
          <Link
            img={deployIcon}
            href="https://github.com/ArtemDerenok"
            alt="demo"
          />
        </div>
      </div>
      <p className={styles.card__text}>{description}</p>
    </div>
  );
};

export default Card;
