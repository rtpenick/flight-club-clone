import React from 'react'
import './ShoeStore.css'


const SneakerCard = ({sneakers}) => {
  function clickedSneaker() {
    console.log("Clicked a sneaker")
  }


  return (
    <div className="sneakerCard" onClick={clickedSneaker}>
        <div className="sneakerCard_img">
          <img src={sneakers.image} height={200} widht={100} alt="imageNotFound"/>
        </div>
        <div className="sneakerCard_details">
          <p className="brandName">{sneakers.brand}</p>
          <p className="sneakerModelName">{sneakers.name}</p>
          <p className="price">${sneakers.price}</p>
        </div>
    </div>
  )
}

export default SneakerCard