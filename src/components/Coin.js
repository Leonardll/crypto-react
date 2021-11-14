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
            ${priceChange.toFixed(2)}%
          </td>
        ) : (
          <td colSpan="2" className="text-success">
            ${priceChange.toFixed(2)}%
          </td>
        )}
        <td colSpan="2">MKT cap: ${marketcap.toLocaleString()}</td>
      </tr>
    </>
  );
}

export default Coin;

{
  /* <div className="container d-flex flex-row align-items-center border-bottom">

        
<div className="row d-flex align-items-center mr-3 w-auto">
<Image className="mr-3" src={image} alt='crypto' height="30px" width="30px"/>                
</div>
<div className="d-flex text-align-right w-100 m-3 justify-content-between">
<h3>{name}</h3>
<p className="title text-uppercase w-auto">{symbol}</p>
<p className="w-auto">${price}</p>
<p className="w-auto">${volume.toLocaleString()}</p>
{priceChange < 0 ? (
    <p className="text-danger w-auto">${priceChange.toFixed(2)}%</p>
) : <p className="text-success w-auto">${priceChange.toFixed(2)}%</p>}

<p>MKT cap: ${marketcap.toLocaleString()}</p>      
</div>
</div>
</> */
}
