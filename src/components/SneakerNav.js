import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './ShoeStore.css'


const SneakerNav = () => {
  const [query,setQuery] = useState("")


  function searchSneakerList(e) {
    const value = e.target.value

    console.log(value)
  }


  return (
    <div className="SneakerNav">
        <div className="SneakerNav__search">
            <input type="search"/>
            {/* <input type="search" value={query} onChange={searchSneakerList}/> */}
        </div>
        <div className="SneakerNav__logo">
            <h3>Flight Club</h3>
        </div>
        <div className="SneakerNav__links">
            <a href="/">Sneakers</a>
            <Link to="/Apparel">FC Apparel</Link>
            <a href="/">FC Fridays</a>
            <a href="/">Stores</a>
            <a href="/Account">Account</a>
        </div>
    </div>
  )
}

export default SneakerNav