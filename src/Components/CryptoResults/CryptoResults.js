import "./styles.scss";
import { useContext } from "react";
import { DataApiContext } from "../Context/DataContext";
import { useState } from "react/cjs/react.development";

function CryptoResults() {
  // const result = useContext(DataApiContext);
  const { result, currency } = useContext(DataApiContext);
  const myResult = useState(result);
  const myCurrency = useState(currency);

  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">
        {myResult} {myCurrency}
      </h3>
    </div>
  );
}

export default CryptoResults;
