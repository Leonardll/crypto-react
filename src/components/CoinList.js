import Coin from "./Coin";

export default function CoinList({ coins }) {
  const {
    name,
    price,
    symbol,
    market_cap,
    image,
    current_price,
    total_volume,
    price_change_percentage_24h,
  } = coins;
  return (
    console.log(coins[0]),
    (
      <>
        <div className="container border-bottom mt-3" id="main">
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
                {coins.map((coin) => {
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
