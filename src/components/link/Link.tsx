import styles from "./Link.module.scss";

interface ILink {
  img: string;
  href: string;
  alt: string;
  theme: boolean;
}

const Link = ({ img, href, alt, theme }: ILink) => {
  return (
    <a href={href} className={styles.link}>
      <img src={img} alt={alt} className={`${theme ? styles.dark : null}`} />
    </a>
  );
};

export default Link;
