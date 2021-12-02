import axios from "axios";
// Import Hooks
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// Import Components
import Articles from "../StyledComponents/Articles";
import Header from "../StyledComponents/Header";
// Import styles
import "./styles.scss";
import loader from "../../Assets/Images/spinner.gif";

// API to get new articles about Crypto
function CryptoNews() {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://latest-crypto-news.p.rapidapi.com/newsbtc/crypto/latest",
      headers: {
        "x-rapidapi-host": "latest-crypto-news.p.rapidapi.com",
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

  console.log(articles);

  const selectArticle = () => {
    console.log("pipo");
  };

  return (
    <>
      <div className="crypto__header">
        <Header />
      </div>
      <div className="crypto__header__container">
        <h1 className="crypto__container--containerNews-title">News page</h1>
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
                img={article.articleImage}
                title={article.articleTitle}
                onClick={selectArticle}
                link={article.articleUrl}
              />
            );
          })
        )}
      </div>
    </>
  );
}

export default CryptoNews;
