import Link from 'next/link'
import { ImCross } from 'react-icons/im'
import { useState } from 'react'
import {IoLogoBitcoin} from 'react-icons/io'
function Header ({setSearch, ...rest}) {
    const [clicked, setClicked] = useState(false);
      
    return (
    <>
    <nav className="navbar navbar-expand-md navbar-light bg-light"> 
    
    <a className="navbar-brand text-primary" href="#">
      < IoLogoBitcoin size={30}  />
      Crypto Tracker
    </a>
  
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
    <div className={ !clicked ? "navbar-collapse collapse  justify-content-center py-3" 
    : "navbar-collapse collapse show justify-content-center py-3"
    }>
      <ul className="navbar nav nav-pills">
        <Link
        activeClass="active"
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500} 
        href="#main" 
        className="nav-item">
        <a 
        className="nav-link active"
         aria-current="page"
         >
         Home
         </a>
         </Link>
        <Link
        activeClass="active"
        to="About"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        href="#about"
        className="nav-item"
        >
        <a 
        className="nav-link"
        >
        About
        </a>
        </Link>
        <Link 
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}  
        href="#contact"
        className="nav-item">
        <a  className="nav-link">
        Contact
        </a>
        </Link>                
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