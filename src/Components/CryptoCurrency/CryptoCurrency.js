import "./styles.scss";
import Input from "../StyledComponents/Input";
import { useState } from "react";

function CryptoCurrency() {
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
    </div>
  );
}

export default CryptoCurrency;
