import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [purchasePrice, setpurchase] = useState();
  const [quantity, setQuantity] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [GetPercentage, setPercentage] = useState();
  const [GetProfit, setProfit] = useState();
  const [profitOutput, setProfitOutput] = useState();
  const [lossOutput, setLossOutput] = useState();

  var PS = Number(purchasePrice);
  var CP = Number(currentPrice);
  var Qnt = Number(quantity);

  function increment() {
    setLossOutput(false);
    setProfitOutput(true);
    var oldPrice = PS * Qnt;
    var newPrice = CP * Qnt;
    var profit = newPrice - oldPrice;
    var difference = CP - PS;
    var percentage = (difference / PS) * 100;
    setPercentage(percentage.toFixed(2));
    setProfit(profit);
    console.log(percentage);
    console.log(profit);
  }

  function decrement() {
    setProfitOutput(false);
    setLossOutput(true);
    var oldPrice = PS * Qnt;
    var newPrice = CP * Qnt;
    var loss = oldPrice - newPrice;
    var difference = PS - CP;
    var percentage = (difference / PS) * 100;
    setPercentage(percentage.toFixed(2));
    setProfit(loss);
    console.log(percentage);
    console.log(loss);
  }

  function checkHandler(e) {
    e.preventDefault();

    if (PS < CP) {
      increment();
    }
    if (PS > CP) {
      decrement();
    }
    if (PS === CP) {
      increment();
    }
  }
  return (
    <div className="App">
      <h1>Check Profit/Loss on your Stock</h1>
      <form onSubmit={checkHandler}>
        <div>
          <label>purchase price</label>
          <input
            pattern="[0-9]*"
            type="number"
            onChange={(event) => setpurchase(event.target.value)}
            required
          />
        </div>
        <div>
          <label>stock quantity</label>
          <input
            pattern="[0-9]*"
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
        </div>
        <div>
          <label>current price</label>
          <input
            pattern="[0-9]*"
            type="number"
            onChange={(event) => setCurrentPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">check</button>
        </div>
      </form>
      <div>
        {profitOutput ? (
          <div>
            {" "}
            you gained {GetPercentage}% your total profit is ₹{GetProfit}
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {lossOutput ? (
          <div>
            you lost {GetPercentage}% your total loss is ₹{GetProfit}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
