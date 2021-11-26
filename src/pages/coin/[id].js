import Layout from "../../components/Layout";
import Image from "next/image";
import ScrollToTop from "../../components/ScrollToTop";
const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
function Coin({ coin }) {
    return (
    
    <Layout>
      <div className="section d-flex justify-content-center mt-4">
          <div className="container-fluid d-flex justify-content-center">
        <div className= "card coinCard m-3 p-2" style={{ width: 400 }}>
          <Image
            className="card-img-top img-fluid rounded"
            loader={myLoader}
            src={coin.image.large}
            alt={coin.name}
            height={250}
            width={250}
          />
          <div className="card-body">
            <h5 className="card-title">{coin.name}</h5>
            <div className="row">                     
                        <div className="col-md-6 mb-4">
                            <div className="card border-left-primary shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Current Price</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">${coin.market_data.current_price.usd}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        <div className="col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                               High 24hr</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">${coin.market_data.high_24h.usd}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
                        <div className="col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                                Low 24hr</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">${coin.market_data.low_24h.usd}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
         
                        <div className="col-md-6 mb-4">
                            <div className="card border-left-success shadow h-100 py-2">
                                <div className="card-body">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col mr-2">
                                            <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Circulating Supply</div>
                                            <div className="h5 mb-0 font-weight-bold text-gray-800">{coin.market_data.circulating_supply}</div>
                                        </div>
                                        <div className="col-auto">
                                            <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                      
         
                        
                                                                     
            <p className="card-text text-uppercase">Description</p>
            <div className="p">
              {coin.description.en
                .replace(/<\s*br\/*>/gi, "\n")
                .replace(/<\s*\/*.+?>/gi, "\n")
                .replace(/\n+\s*/gi, "\n\n")}
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
     <ScrollToTop /> 
    </Layout>
  
  );
}

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);
  const data = await res.json();
  return {
    props: { coin: data },
  };
}
