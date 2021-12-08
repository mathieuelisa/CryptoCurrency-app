import "./styles.scss";
import { useContext } from "react";
import { DataApiContext } from "../Context/DataContext";
// import { useState } from "react/cjs/react.development";

function CryptoResults() {
  // const { result, currency } = useContext(DataApiContext);
  // const [myResult, setMyResult] = useState(result);
  // const [myCurrency, setMyCurrency] = useState(currency);

  const result = useContext(DataApiContext);
  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">{result}</h3>
    </div>
  );
}

export default CryptoResults;
