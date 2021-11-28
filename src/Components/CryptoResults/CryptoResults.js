// Import Hooks
import { useContext } from "react";
// Import useContext
import { DataApiContext } from "../Utils/DataContext";
// Import styles
import "./styles.scss";

function CryptoResults() {
  const result = useContext(DataApiContext);
  console.log("damn" + result);

  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">{result}</h3>
    </div>
  );
}

export default CryptoResults;
