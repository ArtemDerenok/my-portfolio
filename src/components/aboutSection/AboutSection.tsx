import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <div className={styles.about}>
      <h1>
        Hello I’m
        <br /> Artyom Derenok
      </h1>
      <p>
        I am a UI Engineer at Google, where I design and develop user-centered
        interfaces for cutting-edge technology products. I work with a talented
        team to create visually appealing and intuitive designs that enhance
        user experience. I am passionate about using technology to create
        beautiful and functional designs that solve real-world problems.
      </p>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Webpack</li>
        <li>NestJS</li>
        <li>NodeJS</li>
      </ul>
    </div>
  );
};

export default AboutSection;
