import "./styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoExchange from "../CryptoExchange/CryptoExchange";
import CryptoNews from "../CryptoNews/CryptoNews";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CryptoExchange />} />
          <Route path="/news" exact element={<CryptoNews />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
