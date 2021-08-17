import React, { useState } from "react";
import "./styles.css";
import gitImg from "./images/github (1).png";
import linkedinImg from "./images/linkedin (2).png";
import twitterImg from "./images/twitter (1).png";

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
    var percentage = (profit / PS) * 100;
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
    var percentage = (loss / PS) * 100;
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
          <div className="label">purchase price</div>
          <input
            pattern="[0-9]*"
            type="number"
            onChange={(event) => setpurchase(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="label">stock quantity</div>
          <input
            pattern="[0-9]*"
            type="number"
            onChange={(event) => setQuantity(event.target.value)}
            required
          />
        </div>
        <div>
          <div className="label">current price</div>
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
      <h2>
        {profitOutput ? (
          <div style={{ padding: "1rem", backgroundColor: "green" }}>
            {" "}
            you gained {GetPercentage}% your total profit is ₹{GetProfit}
          </div>
        ) : (
          ""
        )}
      </h2>
      <h2 className="loss">
        {lossOutput ? (
          <div style={{ padding: "1rem", backgroundColor: "red" }}>
            you lost {GetPercentage}% your total loss is ₹{GetProfit}
          </div>
        ) : (
          ""
        )}
      </h2>
      <footer>
        <ul>
          <li className="list-item-inline">
            <a href={"https://github.com/tushargoyal812"}>
              <img className="git-img" src={gitImg} />
            </a>
          </li>
          <li className="list-item-inline">
            <a href={"https://www.linkedin.com/in/tushar-goyal-8868741b1"}>
              <img className="linkedin-img" src={linkedinImg} />
            </a>
          </li>
          <li className="list-item-inline">
            <a href={"https://twitter.com/tushargoyal29"}>
              <img className="twitter-img" src={twitterImg} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
