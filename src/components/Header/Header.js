import React from "react";

const Header = () => {
  return (
    <nav className="">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">         
          <li>
            <a href="collapsible.html">React shop</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
