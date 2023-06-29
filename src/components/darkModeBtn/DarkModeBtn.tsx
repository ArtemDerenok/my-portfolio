import styles from "./DarkModeBtn.module.scss";
import darkModeImg from "../../assets/icons/mode.svg";

const DarkModeBtn = ({
  handleDarkMode,
  theme,
}: {
  handleDarkMode: () => void;
  theme: boolean;
}) => {
  return (
    <button className={styles.button} onClick={handleDarkMode}>
      <img
        src={darkModeImg}
        alt="dark mode"
        className={`${theme ? styles.dark : null}`}
      />
    </button>
  );
};

export default DarkModeBtn;
