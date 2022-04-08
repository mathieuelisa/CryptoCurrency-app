import "./styles.scss";
import { useEffect, useRef, useState } from "react";
import Articles from "../StyledComponents/Articles";
import Header from "../StyledComponents/Header";
import loader from "../../Assets/Images/spinner.gif";
import Transition from "../StyledComponents/Transitions";
import axios from "axios";
import gsap from "gsap";

function CryptoNews() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const cryptoNews = gsap.timeline();
  const cryptoNewsTitle = useRef(null);

  useEffect(() => {
    cryptoNews.to(
      cryptoNewsTitle.current,
      {
        duration: 3,
        y: -50,
        opacity: 1,
      },
      "-=0.5s"
    );
  });

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://crypto-news15.p.rapidapi.com/news/amb",
      headers: {
        "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setArticles(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Transition timeline={cryptoNews} />
      <div className="crypto__header">
        <Header />
      </div>
      <div className="crypto__header__container">
        <h1
          className="crypto__container--containerNews-title"
          ref={cryptoNewsTitle}
        >
          News page
        </h1>
      </div>
      <div className="crypto__container--containerNews">
        {loading ? (
          <img
            className="crypto__container--containerNews-loading"
            src={loader}
            alt="loading pictures"
          />
        ) : (
          articles.map((article, index) => {
            return (
              <Articles
                key={index}
                // img={article.articleImage}
                title={article.title}
                link={article.url}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default CryptoNews;
