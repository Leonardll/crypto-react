
function Header ({setSearch, ...rest}) {
    return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
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
    </header>
    )
}

export default Header;