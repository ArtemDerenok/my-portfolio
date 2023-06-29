import styles from "./Tag.module.scss";

interface ITag {
  text: string;
  icon: string;
  theme: boolean;
}

const Tag = ({ text, icon, theme }: ITag) => {
  return (
    <li className={styles.tag}>
      <img src={icon} alt={text} />
      <p
        className={`${styles.tag__text} ${
          theme ? styles.tag__text_dark : null
        }`}
      >
        {text}
      </p>
    </li>
  );
};

export default Tag;
