import "./styles.scss";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="error__container">
      <h2 className="error__container-config404">404</h2>
      <button className="button-53" onClick={() => navigate("/")}>
        BACK TO HOME PAGE ?
      </button>
    </div>
  );
}

export default Error;
