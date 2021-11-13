import Link from 'next/link'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
function Header ({setSearch, ...rest}) {
    const [clicked, setClicked] = useState(false);
      
    return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light"> 
    <div className="container-fluid">
    <button className="navbar-toggler collapsed" 
            type="button" data-bs-toggle="collapse"  
            aria-expanded="false" 
            aria-label="Toggle navigation"
            onClick={ () => setClicked(!clicked)}>
              {
            clicked ? 
            <ImCross 
            onClick={ () => setClicked(true)}  
            /> :
            <span 
             onClick={ () => setClicked(!clicked)} 
             className="navbar-toggler-icon">
            </span>
            }
    
    </button> 
    <div className={ !clicked ? "navbar-collapse collapse  justify-content-center py-3" : "navbar-collapse collapse show justify-content-center py-3"}>
      <ul className="navbar nav nav-pills">
        <Link href="/" className="nav-item"><a className="nav-link active" aria-current="page">Home</a></Link>
        <Link href="/" className="nav-item"><a className="nav-link">CoinList</a></Link>
        <Link href="/pricing"className="nav-item"><a href="/Pricing" className="nav-ink">Pricing</a></Link>
        <Link href="/faqs" className="nav-item"><a href="/FAQs" className="nav-link">FAQs</a></Link>
        <Link  href="/about" className="nav-item"><a href="/About" className="nav-link">About</a></Link>
      </ul>
      <div>
      <input
      {...rest} 
      onChange={(event) => {
        setSearch(event.target.value)}}
      type="text" 
      className="form-control form-control-dark" 
      placeholder="Search..." 
      aria-label="Search"      
      />
      </div>
    </div>
    </div>
    </nav>
    
    </>
    )
}

export default Header;