import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.scss'
import { useState } from 'react';
import Header from '../components/Header';
import CoinList from '../components/CoinList';
import Contact from '../components/Contact';
import About from '../components/About';
import Layout from '../components/Layout';
import Link from 'next/link';
import ScrollToTop from '../components/ScrollToTop';

export default function Home({coins}) {
  
  const [search, setSearch] = useState('');

  const filteredCoins = coins.filter( coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
  )
  const handleChange = e => {
    e.preventDefault()
    setSearch(e.target.value.toLowerCase())
    console.log(search)
  }

  const myLoader = ({ src, width, quality }) => {
    return `https://myreactcryptotracker.web.app/${src}?w=${width}&q=${quality || 75}`
  }

//   const [coin, setCoins] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     axios.
//     get(
//       'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
//       )
//       .then(res => {
//         setCoins(res.data);
//         console.log(res.data);
//       }).catch(error => console.log(error));
//   },[]);

// const handleChange = e => {
//   setSearch(e.target.value)
// }

// const filteredCoins = coin.filter(coin =>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//     )

  return (
    <Layout onChange={handleChange} setSearch={setSearch} filteredCoins={filteredCoins}>
    <div className="container-fluid">
      <Head>
        <title>My Crypto Tracker</title>
        <meta name="description" content="Generated by create next app" />
        {/* <Link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {/* <Header onChange={handleChange} setSearch={setSearch} filteredCoins={filteredCoins} /> */}
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">  
      <main className="h-100"> 
       <CoinList coins={coins} filteredCoins={filteredCoins}/>
       <About />
       <Contact />
      </main>
      </div>       
      <footer className="footer d-flex justify-content-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image 
            loader={myLoader}
            src="/vercel.svg"
            alt="Vercel Logo" 
            width={72} height={16}
            
             />
          </span>
          
        </a>
      </footer>
      <ScrollToTop />
    </div>
    </Layout>
  )
}



export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`);

  const coins = await res.json();
  

  return {

    props: {
      coins
    }
  };
  

    

};