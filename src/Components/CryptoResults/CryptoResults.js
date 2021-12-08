import "./styles.scss";
import { useContext } from "react";
import { DataApiContext } from "../Context/DataContext";

function CryptoResults() {
  const result = useContext(DataApiContext);

  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">{result}</h3>
    </div>
  );
}

export default CryptoResults;
