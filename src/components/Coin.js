import Image from "next/image";

function Coin({ image, name, symbol, price, volume, priceChange, marketcap }) {
  console.log(name);
  return (
    <>
      <tr>
        <td colSpan="2">
          <div className="d-flex align-items-center">
            <Image
              className="mr-3"
              src={image}
              alt="crypto"
              height={30}
              width={30}
            />
            <span className="m-2">
              <h3>{name}</h3>
            </span>
          </div>
        </td>

        <td className="text-uppercase" colSpan="2">
          {symbol}
        </td>
        <td colSpan="2">${price}</td>
        <td colSpan="2">${volume.toLocaleString()}</td>
        {priceChange < 0 ? (
          <td colSpan="2" className="text-danger">
            {priceChange.toFixed(2)}%
          </td>
        ) : (
          <td colSpan="2" className="text-success">
            {priceChange.toFixed(2)}%
          </td>
        )}
        <td colSpan="2">MKT cap: ${marketcap.toLocaleString()}</td>
      </tr>
    </>
  );
}

export default Coin;

export async function  getServerSideProps(context) {
  const {id} = context.query
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `)
  const data = await res.json()
  return {
    props:{coin : data }
  }
}