import "./styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoExchange from "../CryptoExchange/CryptoExchange";
import CryptoNews from "../CryptoNews/CryptoNews";
import Error from "../Error/Error";
import { useEffect } from "react/cjs/react.development";

function App() {
  useEffect(() => {
    document.title = "Crypto App | Get the exchange and the last news";
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoExchange />} />
          <Route path="news" element={<CryptoNews />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
