import Image from "next/image";
import Link from 'next/link';

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
function Coin({ id,image, name, symbol, price, volume, priceChange, marketcap, rank }) {
  console.log(name);
  return (
    <Link href='/coin/[id]' passHref as ={`/coin/${id}`}>
      
      <tr>
        <td colSpan="2">
          {rank}
        </td>
        <td colSpan="2">
          <div className="d-flex align-items-center">
            <Image
              loader={myLoader}
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
     
    </Link>
  );
}

export default Coin;

