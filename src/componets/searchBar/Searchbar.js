import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import "./Searchbar.css"

function Searchbar() {
    return (
        <div className="searchbar-container">
           <input id="searchbar"/>
           <div onClick={(e) =>{document.getElementById("searchbar")?.focus()}} className="searchbar-placeholder">
           <SearchIcon id="searchbar-placeholder-icon"/>
           <span>Search</span>
           </div>
        </div>
    )
}

export default Searchbar
