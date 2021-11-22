/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { IoLogoBitcoin } from "react-icons/io";

const linkData = [
  { id: "1", title: "Home", ref: "#main", to: "main" },
  { id: "2", title: "About", ref: "#about", to: "about" },
  { id: "3", title: "Contact", ref: "#contact", to: "contact" },
];
function Header({ theme, setTheme, setSearch, ...rest }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-light bg-light"
        id="mainnav"
      >
        <div className="container-fluid">
          <a className="navbar-brand text-primary" href="#">
            <IoLogoBitcoin size={30} />
            Crypto Tracker
          </a>
          {/* <div className=""> */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setClicked(!clicked)}
          >
            {clicked ? (
              <ImCross onClick={() => setClicked(true)} />
            ) : (
              <span
                onClick={() => setClicked(!clicked)}
                className="navbar-toggler-icon"
              ></span>
            )}
          </button>
          <div
            className={
              !clicked
                ? "navbar-collapse collapse justify-content-center py-3"
                : "navbar-collapse collapse show justify-content-center py-3"
            }
          >
            <ul className="navbar nav nav-pills">
              {linkData.map((items) => {
                return (
                  <Link
                    key={items.id}
                    activeClass="active"
                    to={items.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    href={items.ref}
                    className="nav-item"
                  >
                    <a className="nav-link mx-2 active" aria-current="page">
                      {items.title}
                    </a>
                  </Link>
                );
              })}
            </ul>
            <div>
              <input
                {...rest}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                type="text"
                className="form-control form-control-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </div>
            <div className="m-2">
              <strong className="text-primary">Theme</strong>
              <label className="dropdown mx-2">
                <select
                  className="form-control"
                  value={theme}
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </label>
            </div>
          </div>
        </div>
      </nav>
      <header className="masthead">
        <div className="container-fluid">
          <div className="masthead-subheading">Welcome To Crypto Tracker!</div>
          <div className="masthead-heading text-uppercase">
            Crypto Prices by Market Cap
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#about">
            Tell Me More
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
