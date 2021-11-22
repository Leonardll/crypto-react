import Coin from "./Coin";
import { useEffect, useState } from "react";

export default function CoinList({ filteredCoins }) {
  

  return (
    console.log(filteredCoins[0]),
    (
      <>
        <div className="container mt-3" id="main">
          <div className="table-responsive">
            <table className="table table-striped align-middle table-dark text-white table-hover">
              <thead>
                <tr>
                  <th colSpan="2">Name</th>
                  <th colSpan="2">Symbol</th>
                  <th colSpan="2">Price</th>
                  <th colSpan="2">volume</th>
                  <th colSpan="2">Price Change</th>
                  <th colSpan="2">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {filteredCoins.map((coin) => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      id={coin.id}
                      price={coin.current_price}
                      symbol={coin.symbol}
                      marketcap={coin.market_cap}
                      volume={coin.total_volume}
                      image={coin.image}
                      priceChange={coin.price_change_percentage_24h}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  );
}
