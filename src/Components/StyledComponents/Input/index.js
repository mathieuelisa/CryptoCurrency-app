import "./styles.scss";

function Input({ title }) {
  const currencies = ["BTC", "LTC", "ETH", "SHIBA"];

  return (
    <form>
      <label>
        <h3 className="crypto__input-title">{title}</h3>
        <input type="number" />
      </label>
      <select>
        {currencies.map((currency, index) => (
          <option key={index}>{currency}</option>
        ))}
      </select>
    </form>
  );
}

export default Input;
