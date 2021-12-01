import "./styles.scss";

function Articles({ img, title }) {
  return (
    <div className="articles__config">
      <img
        className="articles__config-img"
        src={img}
        alt={"pictures of article"}
      />
      <h4 className="articles__config-title">{title}</h4>
    </div>
  );
}

export default Articles;
