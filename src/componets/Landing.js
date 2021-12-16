import React, { useState } from "react";
import Button from "./button/Button";
import "./Landing.css";
import Searchbar from "./searchBar/Searchbar";


function Landing() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo-section">Instagram</div>
        <div className="searchbar-section">
          <Searchbar searchValue={searchValue} />
        </div>
        <div className="action-section">
          <Button/>
          <Button/>
        
        </div>
      </div>
      <div className="content-container"></div>
    </div>
  );
}

export default Landing;
