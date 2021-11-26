import "./styles.scss";
import Input from "../StyledComponents/Input";

function CryptoCurrency() {
  return (
    <div className="crypto__container--currency">
      <Input title="PRIMARY CURRENCY" />
      <Input title="SECONDARY CURRENCY" />
    </div>
  );
}

export default CryptoCurrency;
