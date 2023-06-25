import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/js.svg";
import tsIcon from "../../assets/icons/ts.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import scssIcon from "../../assets/icons/scss.svg";
import webpackIcon from "../../assets/icons/webpack.svg";
import reactIcon from "../../assets/icons/react.svg";
import Card from "../card/Card";
import quizImg from "../../assets/img/artquiz.png";
import guitarImg from "../../assets/img/guitar.png";
import momentumImg from "../../assets/img/momentum.png";
import songBird from "../../assets/img/songbird.png";
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.projects}>
        <h3 className={styles.projects__title}>
          My <span>projects</span>
        </h3>
        <div className={styles.projects__cards}>
          <Card
            heading="Quiz art"
            img={quizImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
            demo="https://serene-hodgkin-901fac.netlify.app/"
            code="https://github.com/ArtemDerenok/art-quiz"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "CSS", icon: cssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Bootstrap", icon: bootstrapIcon },
            ]}
          />
          <Card
            heading="Portfolio"
            img={guitarImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
            demo="https://wondrous-buttercream-13b1f4.netlify.app/"
            code="https://github.com/ArtemDerenok/guitarist-portfolio"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "JavaScript", icon: jsIcon },
            ]}
          />
          <Card
            heading="Momentum"
            img={momentumImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
            demo="https://happy-perlman-3d94e0.netlify.app/"
            code="https://github.com/ArtemDerenok/Momentum"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "CSS", icon: cssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Webpack", icon: webpackIcon },
            ]}
          />
          <Card
            heading="Songbird"
            img={songBird}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
            demo="https://astounding-marigold-218591.netlify.app/"
            code="https://github.com/ArtemDerenok/songbird"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "TypeScript", icon: tsIcon },
              { text: "React", icon: reactIcon },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
