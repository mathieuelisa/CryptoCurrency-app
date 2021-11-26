// Import styles
import "./styles.scss";
// Import Components
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import CryptoResults from "../CryptoResults/CryptoResults";

function CryptoExchange() {
  return (
    <div className="crypto__container">
      <CryptoCurrency />
      <CryptoResults />
    </div>
  );
}

export default CryptoExchange;
