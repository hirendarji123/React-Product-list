import React from "react";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary "
      style={{ backgroundColor: "orange" }}
    >
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <strong style={{ color: "white", fontSize: 18 }}>
                {" "}
                All Product{" "}
              </strong>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/comboOffer">
              <strong style={{ color: "white" }}> Combo Offer </strong>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
