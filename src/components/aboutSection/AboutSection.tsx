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

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <h1>
        Hello I’m
        <br /> Artyom Derenok
      </h1>
      <p className={styles.about__text}>
        I am a UI Engineer at Google, where I design and develop user-centered
        interfaces for cutting-edge technology products. I work with a talented
        team to create visually appealing and intuitive designs that enhance
        user experience. I am passionate about using technology to create
        beautiful and functional designs that solve real-world problems.
      </p>
      <ul>
        {iconsArr.map((elem, index) => (
          <Tag text={elem.text} icon={elem.icon} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default AboutSection;
