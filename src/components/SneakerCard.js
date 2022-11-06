import React from 'react'
import './ShoeStore.css'


const SneakerCard = ({sneakers}) => {
  function clickedSneaker() {
    console.log("Clicked a sneaker")
  }


  return (
    <div className="sneakerCard" onClick={clickedSneaker}>
        <div className="sneakerCard_img">
          <img src={sneakers.image} height={100} widht={100} alt="imageNotFound"/>
        </div>
        <div className="sneakerCard_details">
          <p>Name: {sneakers.name}</p>
          <p>Brand {sneakers.brand}</p>
          <p> {sneakers.price}</p>
        </div>
    </div>
  )
}

export default SneakerCard