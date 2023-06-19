import styles from "./DarkModeBtn.module.scss";
import darkModeImg from "../../assets/icons/mode.svg";

const DarkModeBtn = () => {
  return (
    <button className={styles.button}>
      <img src={darkModeImg} alt="dark mode" />
    </button>
  );
};

export default DarkModeBtn;
