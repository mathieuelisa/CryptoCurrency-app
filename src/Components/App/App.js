import "./styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import CryptoExchange from "../CryptoExchange/CryptoExchange";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CryptoExchange />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
