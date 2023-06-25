import contactImg from "../../assets/icons/contact.png";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={`${styles.container} ${styles.contact}`}>
      <div className={styles.contact__boxOne}>
        <h3 className={styles.contact__title} id="contacts">
          Contact
        </h3>
        <p className={styles.contact__text}>
          Want a website for your brand and business? I design what you
          desire....
        </p>
        <img src={contactImg} alt="contacts" className={styles.contact__img} />
      </div>
      <div className={styles.contact__boxTwo}>
        <form className={styles.form}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className={styles.form__name} />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className={styles.form__email} />
          <label htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            className={styles.form__message}
          ></textarea>
          <button className={styles.form__button}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
