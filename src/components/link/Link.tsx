interface ILink {
  img: string;
  src: string;
  alt: string;
}

const Link = ({ img, src, alt }: ILink) => {
  return (
    <a href={src}>
      <img src={img} alt={alt} />
    </a>
  );
};

export default Link;
