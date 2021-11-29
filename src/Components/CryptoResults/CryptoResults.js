// Import Hooks
import { useContext } from "react";
// Import useContext
import { DataApiContext } from "../Context/DataContext";
// Import styles
import "./styles.scss";

function CryptoResults() {
  const result = useContext(DataApiContext);

  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">{result}</h3>
    </div>
  );
}

export default CryptoResults;
