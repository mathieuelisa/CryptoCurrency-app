import "./styles.scss";

function Input({
  title,
  value,
  name,
  onChange,
  currenciesValue,
  currenciesName,
  onChangeCurrencies,
  classNameInput,
}) {
  const currencies = [
    "BTC",
    "LTC",
    "ETH",
    "SHIB",
    "SOL",
    "ADA",
    "DOGE",
    "XMR",
    "EUR",
    "USD",
    "JPY",
  ];

  return (
    <form>
      <label>
        <h3 className="crypto__input-title">{title}</h3>
        <input
          type="number"
          value={value}
          onChange={onChange}
          name={name}
          className={classNameInput}
        />
      </label>
      <select
        value={currenciesValue}
        name={currenciesName}
        onChange={onChangeCurrencies}
      >
        {currencies.map((currency, index) => (
          <option key={index}>{currency}</option>
        ))}
      </select>
    </form>
  );
}

export default Input;
