import styles from "./Tag.module.scss";

interface ITag {
  text: string;
  icon: string;
}

const Tag = ({ text, icon }: ITag) => {
  return (
    <li className={styles.tag}>
      <img src={icon} alt={text} />
      <p className={styles.tag__text}>{text}</p>
    </li>
  );
};

export default Tag;
