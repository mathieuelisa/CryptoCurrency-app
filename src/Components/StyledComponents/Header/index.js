import "./styles.scss";
import loading from "../../../Assets/Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">
        <img className="crypto__logo" src={loading} alt="pictures logo" />
      </Link>
    </>
  );
}

export default Header;
