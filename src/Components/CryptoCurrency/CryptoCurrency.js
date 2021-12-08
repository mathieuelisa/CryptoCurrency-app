import "./styles.scss";
import { useState } from "react";
import { DataApiContext } from "../Context/DataContext";
import Input from "../StyledComponents/Input";
import CryptoResults from "../CryptoResults/CryptoResults";
import axios from "axios";
import loader from "../../Assets/Images/spinner.gif";

function CryptoCurrency() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    primary: "",
    secondary: "",
  });

  const [currency, setCurrency] = useState({
    firstCurrency: "",
    secondCurrency: "",
  });

  const onChange = (e) => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const onChangeCurrencies = (e) => {
    const currencyValue = e.target.value;

    setCurrency({
      ...currency,
      [e.target.name]: currencyValue,
    });
  };

  // API to get exchange currency
  const exchange = () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        from_currency: currency.firstCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        to_currency: currency.secondCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            state.primary
        );
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="crypto__container--currency">
      <div className="crypto__container--currency-first">
        <Input
          title="PRIMARY CURRENCY"
          name="primary"
          value={state.primary}
          onChange={onChange}
          currenciesValue={currency.firstCurrency}
          currenciesName="firstCurrency"
          onChangeCurrencies={onChangeCurrencies}
          classNameInput="crypto__container--currency-input"
        />
      </div>

      {!state.primary ? (
        <div className="crypto__container--currency-notifDiv">
          <p className="crypto__container--currency-notifications">
            Enter a value
          </p>
        </div>
      ) : (
        <>
          <p></p>
        </>
      )}

      <div className="crypto__container--currency-second">
        <Input
          title="SECONDARY CURRENCY"
          name="secondary"
          value={state.secondary}
          onChange={onChange}
          currenciesValue={currency.secondCurrency}
          currenciesName="secondCurrency"
          onChangeCurrencies={onChangeCurrencies}
          classNameInput="crypto__container--currency-input"
          disabled={true}
        />
      </div>
      <div className="crypto__container--currency-third">
        <button
          onClick={exchange}
          className="crypto__container--currency-button"
        >
          Exchange
        </button>
      </div>

      {/* A voir avec cryptoResult pour afficher la currency dans le result */}
      {/* <DataApiContext.Provider
        value={{
          result: [result, setResult],
          currency: [currency, setCurrency],
        }}
      > */}

      <DataApiContext.Provider value={result}>
        {loading ? (
          <div className="crypto__container--results">
            <img
              className="crypto__container--results-loading"
              src={loader}
              alt="loading"
            />
          </div>
        ) : (
          <CryptoResults />
        )}
      </DataApiContext.Provider>
    </div>
  );
}

export default CryptoCurrency;
