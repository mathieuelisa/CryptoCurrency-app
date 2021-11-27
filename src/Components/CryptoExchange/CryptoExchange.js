// Import styles
import "./styles.scss";
// Import Components
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import CryptoResults from "../CryptoResults/CryptoResults";

import { Link } from "react-router-dom";

function CryptoExchange() {
  return (
    <div className="crypto__container">
      <CryptoCurrency />
      <CryptoResults />
      <Link to="/news" className="crypto__container--news">
        Get news about crypto ?{" "}
      </Link>
    </div>
  );
}

export default CryptoExchange;
