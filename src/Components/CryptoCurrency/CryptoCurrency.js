// Import styles
import "./styles.scss";
// Import Components
import Input from "../StyledComponents/Input";

import { useState } from "react";

import axios from "axios";

function CryptoCurrency() {
  // const [dataApi, setDataApi] = useState([]);
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
  console.log(state);

  const onChangeCurrencies = (e) => {
    const currencyValue = e.target.value;

    setCurrency({
      ...currency,
      [e.target.name]: currencyValue,
    });
  };

  console.log(currency);

  const exchange = () => {
    var options = {
      method: "GET",
      url: "https://alpha-vantage.p.rapidapi.com/query",
      params: {
        to_currency: "JPY",
        function: "CURRENCY_EXCHANGE_RATE",
        from_currency: "USD",
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

      <button onClick={exchange}>Exchange</button>
    </div>
  );
}

export default CryptoCurrency;
