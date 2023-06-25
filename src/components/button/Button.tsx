import styles from "./Button.module.scss";

interface IButton {
  text: string;
  href: string;
}

const Button = ({ text, href }: IButton) => {
  return (
    <a className={styles.button} href={href}>
      {text}
    </a>
  );
};

export default Button;
