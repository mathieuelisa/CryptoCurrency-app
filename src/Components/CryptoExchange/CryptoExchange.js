// Import styles
import "./styles.scss";
import CryptoCurrency from "../CryptoCurrency/CryptoCurrency";
import Header from "../StyledComponents/Header";
import Transition from "../StyledComponents/Transitions";
import { Link } from "react-router-dom";
import gsap from "gsap";

function CryptoExchange() {
  const cryptoCurrency = gsap.timeline();

  return (
    <>
      <Transition timeline={cryptoCurrency} />
      <div className="crypto__header">
        <Header />
      </div>
      <div className="crypto__container">
        <CryptoCurrency />
        <Link to="news" className="crypto__container--news">
          Get news about crypto
        </Link>
      </div>
    </>
  );
}

export default CryptoExchange;
