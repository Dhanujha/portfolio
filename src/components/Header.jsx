import React, { useState } from "react";

function Header() {
  const [open, setopen] = useState(false);
  return (
    <header>
      <div className="row">
        <div className="top-bar">
          <a className="menu-toggle" onClick={() => {
            setopen(!open);
          }}>
            <span>Menu</span>
          </a>
          {open && <nav>
            <ul className="main-navigation">
              <li className="current">
                <a className="smoothscroll" href="#intro" title="">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about" title="">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume" title="">
                  Resume
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#services" title="">
                  Services
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio" title="">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact" title="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}

export default Header;
