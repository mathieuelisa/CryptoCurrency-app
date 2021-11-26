import "./styles.scss";

function Input({
  title,
  value,
  name,
  onChange,
  currenciesValue,
  currenciesName,
  onChangeCurrencies,
}) {
  const currencies = ["BTC", "LTC", "ETH", "SHIBA"];

  return (
    <form>
      <label>
        <h3 className="crypto__input-title">{title}</h3>
        <input type="number" value={value} onChange={onChange} name={name} />
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
