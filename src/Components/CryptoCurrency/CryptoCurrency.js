// Import styles
import "./styles.scss";
// Import Components
import Input from "../StyledComponents/Input";
import CryptoResults from "../CryptoResults/CryptoResults";

import { useState } from "react";

import axios from "axios";

function CryptoCurrency() {
  const [exchangeValue, setExchangeValue] = useState(0);
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

  console.log(currency.firstCurrency);

  const exchange = () => {
    var options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: currency.secondCurrency,
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: currency.firstCurrency,
      },
      headers: {
        "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setExchangeValue(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      })
      .catch((error) => console.error(error));
  };

  console.log("This is your value " + exchangeValue);

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

      {/* Put the provider here */}
      {/* <CountContext.Provider value={{ count, setCount, count2, setCount2 }}> */}
      <CryptoResults />
    </div>
  );
}

export default CryptoCurrency;
