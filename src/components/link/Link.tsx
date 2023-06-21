import styles from "./Link.module.scss";

interface ILink {
  img: string;
  href: string;
  alt: string;
}

const Link = ({ img, href, alt }: ILink) => {
  return (
    <a href={href} className={styles.link}>
      <img src={img} alt={alt} />
    </a>
  );
};

export default Link;
