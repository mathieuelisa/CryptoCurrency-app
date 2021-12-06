import "./styles.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// Import components
import CryptoExchange from "../CryptoExchange/CryptoExchange";
import CryptoNews from "../CryptoNews/CryptoNews";
import Error from "../Error/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CryptoExchange />} />
          <Route path="/news" element={<CryptoNews />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
