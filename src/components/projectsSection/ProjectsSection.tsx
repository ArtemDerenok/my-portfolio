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
import restCounties from "../../assets/img/restCountries.png";
import cafeStreet from "../../assets/img/cafeStreet.png";
import shortlyImg from "../../assets/img/shortly.png";
import rockPaper from "../../assets/img/rockPaper.png";
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = ({ theme }: { theme: boolean }) => {
  return (
    <section className={styles.container}>
      <div className={styles.projects}>
        <h3 className={styles.projects__title} id="projects">
          My <span>projects</span>
        </h3>
        <div className={styles.projects__cards}>
          <Card
            heading="Quiz art"
            img={quizImg}
            description="Quiz application built with JavaScript, Webpack and Bootstrap framework."
            demo="https://serene-hodgkin-901fac.netlify.app/"
            code="https://github.com/ArtemDerenok/art-quiz"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "CSS", icon: cssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Bootstrap", icon: bootstrapIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Portfolio"
            img={guitarImg}
            description="Landing page built with SCSS and using best practice."
            demo="https://wondrous-buttercream-13b1f4.netlify.app/"
            code="https://github.com/ArtemDerenok/guitarist-portfolio"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "JavaScript", icon: jsIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Momentum"
            img={momentumImg}
            description="Personal dashboard built with native JavaScript."
            demo="https://happy-perlman-3d94e0.netlify.app/"
            code="https://github.com/ArtemDerenok/Momentum"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "CSS", icon: cssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Webpack", icon: webpackIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Countries"
            img={restCounties}
            description="REST Countries API with color theme switcher"
            demo="https://zippy-creponne-2d84e6.netlify.app/"
            code="https://github.com/ArtemDerenok/rest-countries-api"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "TypeScript", icon: tsIcon },
              { text: "React", icon: reactIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Songbird"
            img={songBird}
            description="SPA built with React, TypeScript and SCSS."
            demo="https://astounding-marigold-218591.netlify.app/"
            code="https://github.com/ArtemDerenok/songbird"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "TypeScript", icon: tsIcon },
              { text: "React", icon: reactIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Cafe Street"
            img={cafeStreet}
            description="Landing page built with SCSS and using best practice."
            demo="https://shimmering-cendol-9a5e19.netlify.app/"
            code="https://github.com/ArtemDerenok/coffeeShop-landing"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Webpack", icon: webpackIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Shortly"
            img={shortlyImg}
            description="Shortly URL shortening API"
            demo="https://transcendent-lily-e0158f.netlify.app/"
            code="https://github.com/ArtemDerenok/url-shortening-api"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "TypeScript", icon: tsIcon },
              { text: "React", icon: reactIcon },
            ]}
            theme={theme}
          />
          <Card
            heading="Rock, Paper, Scissors"
            img={rockPaper}
            description="
            The famous game using JavaScript."
            demo="https://jovial-platypus-0d5ca8.netlify.app/"
            code="https://github.com/ArtemDerenok/rock-paper-scissors-master"
            technologies={[
              { text: "HTML", icon: htmlIcon },
              { text: "SCSS", icon: scssIcon },
              { text: "JavaScript", icon: jsIcon },
              { text: "Webpack", icon: webpackIcon },
            ]}
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
