import axios from "axios";
// Import Hooks
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
// Import Components
import Articles from "../StyledComponents/Articles";
// Import styles
import "./styles.scss";

// API to get new articles about Crypto
function CryptoNews() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
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
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <h1 className="crypto__container--containerNews-title">News page</h1>
      <div className="crypto__container--containerNews">
        {articles.map((article, index) => {
          return (
            <Articles
              key={index}
              img={article.articleImage}
              title={article.articleTitle}
            />
          );
        })}
      </div>
    </>
  );
}

export default CryptoNews;
