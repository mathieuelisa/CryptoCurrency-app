import "./styles.scss";

function Articles({ img, title, onClick, link }) {
  return (
    <div className="articles__config">
      <img
        className="articles__config-img"
        src={img}
        alt={"pictures of article"}
        onClick={onClick}
      />
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="articles__config-title"
        onClick={onClick}
      >
        {title}
      </a>
    </div>
  );
}

export default Articles;
