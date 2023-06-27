import contactImg from "../../assets/icons/contact.png";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contact.module.scss";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <section className={`${styles.container} ${styles.contact}`}>
      <div className={styles.contact__boxOne}>
        <h3 className={styles.contact__title} id="contacts">
          Contact
        </h3>
        <p className={styles.contact__text}>
          Want a website for your brand and business? I’m ready to talk...
        </p>
        <img src={contactImg} alt="contacts" className={styles.contact__img} />
      </div>
      <div className={styles.contact__boxTwo}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={styles.form__name}
            {...(register("name"), { required: true, minLength: 2 })}
          />
          {errors.message?.type === "required" ? (
            <p className={styles.error}>Name is required</p>
          ) : errors.message?.type === "minLength" ? (
            <p className={styles.error}>Name is too short</p>
          ) : null}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className={styles.form__email}
            {...(register("email"), { required: true })}
          />
          {errors.email?.type === "required" ? (
            <p className={styles.error}>Email is required</p>
          ) : null}
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className={styles.form__message}
            {...register("message", { required: true, minLength: 20 })}
          ></textarea>
          {errors.message?.type === "required" ? (
            <p className={styles.error}>Message is required</p>
          ) : errors.message?.type === "minLength" ? (
            <p className={styles.error}>Message is too short</p>
          ) : null}
          <button className={styles.form__button}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
