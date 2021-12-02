// Import styles
import "./styles.scss";
// Import Components
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import Header from "../StyledComponents/Header";

import { Link } from "react-router-dom";

function CryptoExchange() {
  return (
    <>
      <div className="crypto__header">
        <Header />
      </div>
      <div className="crypto__container">
        <CryptoCurrency />
        <Link to="/news" className="crypto__container--news">
          Get news about crypto ?{" "}
        </Link>
      </div>
    </>
  );
}

export default CryptoExchange;
