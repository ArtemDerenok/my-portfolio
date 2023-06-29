import gitHubIcon from "../../assets/icons/github.svg";
import deployIcon from "../../assets/icons/deploy.svg";
import Tag from "../tag/Tag";
import styles from "./Card.module.scss";
import Link from "../link/Link";

interface ICard {
  heading: string;
  img: string;
  description: string;
  demo: string;
  code: string;
  technologies: {
    text: string;
    icon: string;
  }[];
  theme: boolean;
}

const Card = ({
  heading,
  img,
  description,
  demo,
  code,
  technologies,
  theme,
}: ICard) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.card__title}>{heading}</h4>
      <img className={styles.card__img} src={img} alt={heading} />
      <div className={styles.card__tags}>
        <div className={styles.card__tagsBoxOne}>
          {technologies.map((elem, index) => (
            <Tag text={elem.text} icon={elem.icon} key={index} theme={theme} />
          ))}
        </div>
        <div className={styles.card__tagsBoxTwo}>
          <Link img={gitHubIcon} href={code} alt="github" theme={theme} />
          <Link img={deployIcon} href={demo} alt="demo" theme={theme} />
        </div>
      </div>
      <p className={styles.card__text}>{description}</p>
    </div>
  );
};

export default Card;
