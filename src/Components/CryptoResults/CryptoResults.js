import "./styles.scss";

function CryptoResults() {
  let numberResulat = 37838967;
  // let result = numberResulat.toLocaleString();
  let result = numberResulat.toLocaleString();

  // const { count, setCount, count2, setCount2 } = useContext(CountContext);

  return (
    <div className="crypto__container--results">
      <h3 className="crypto__container--results-number">{result}</h3>
    </div>
  );
}

export default CryptoResults;
