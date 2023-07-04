import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import tsIcon from "../../assets/icons/ts.svg";
import reactIcon from "../../assets/icons/react.svg";
import webpackIcon from "../../assets/icons/webpack.png";
import nestIcon from "../../assets/icons/node.svg";
import nodeIcon from "../../assets/icons/node.svg";
import styles from "./AboutSection.module.scss";
import Tag from "../tag/Tag";

interface ITagObj {
  text: string;
  icon: string;
}

const iconsArr: ITagObj[] = [
  {
    text: "HTML",
    icon: htmlIcon,
  },
  {
    text: "CSS",
    icon: cssIcon,
  },
  {
    text: "JavaScript",
    icon: jsIcon,
  },
  {
    text: "TypeScript",
    icon: tsIcon,
  },
  {
    text: "React",
    icon: reactIcon,
  },
  {
    text: "Webpack",
    icon: webpackIcon,
  },
  {
    text: "NestJS",
    icon: nestIcon,
  },
  {
    text: "NodeJS",
    icon: nodeIcon,
  },
];

const AboutSection = ({ theme }: { theme: boolean }) => {
  return (
    <div className={styles.about}>
      <h1 id="about">
        Hello I’m
        <br /> Artyom Derenok
      </h1>
      <p className={styles.about__text}>
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications.
      </p>
      <ul>
        {iconsArr.map((elem, index) => (
          <Tag text={elem.text} icon={elem.icon} key={index} theme={theme} />
        ))}
      </ul>
    </div>
  );
};

export default AboutSection;
