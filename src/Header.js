import React from "react";
import Logo from "./robinhood.svg";
import "./Header.css";
function Header() {
  return (
    <div className="header_wrapper">
      {/* logo */}
      <div className="header_logo">
        <img src={Logo} width={25} alt="robinhood logo" />
      </div>
      {/* search */}
      <div className="header_search">
        <div className="header_searchContainer">
          <input placeholder="Search" type="text" />
        </div>
      </div>
      {/* menuitems */}
      <div className="header_menuItems">
        <a href="#">Free stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Messages</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
}

export default Header;
