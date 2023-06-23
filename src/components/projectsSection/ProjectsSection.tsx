import Card from "../card/Card";
import cardImg from "../../assets/img/cardImg.png";
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
            img={cardImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
          />
          <Card
            heading="Quiz art"
            img={cardImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
          />
          <Card
            heading="Quiz art"
            img={cardImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
          />
          <Card
            heading="Quiz art"
            img={cardImg}
            description="Digital agency is a landing page built with the latest version of next.js using best practices."
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
