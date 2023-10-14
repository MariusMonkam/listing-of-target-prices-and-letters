import React from "react";
import "./styles/styles.css";
import StockList from "./components/StockList";

function App() {
  return (
    <div className="App">
      <h2 className="Title">Stocks</h2>
      <p className="Subtitle">List of Target Prices and Letters</p>{" "}
      {/* Add a subtitle */}
      <StockList />
    </div>
  );
}

export default App;
