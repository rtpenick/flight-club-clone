import React, {useState} from 'react'
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
            <a href="/">Sneaker</a>
            <a href="/">FC Apparel</a>
            <a href="/">FC Fridays</a>
            <a href="/">Stores</a>
            <a href="/">Account</a>
        </div>
    </div>
  )
}

export default SneakerNav