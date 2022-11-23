import React from 'react'
import './ShoeStore.css'
import { Link } from "react-router-dom";


const SneakerCard = ({sneakers,sneakerName}) => {

  return (
    <div className="sneakerCard">
        <Link to={"/Sneaker/"+ sneakerName}>
            <div className="sneakerCard_img">
              <img src={sneakers.image} height={200} widht={100} alt="imageNotFound"/>
            </div>
            <div className="sneakerCard_details">
              <p className="brandName">{sneakers.brand}</p>
              <p className="sneakerModelName">{sneakers.name}</p>
              <p className="price">${sneakers.price}</p>
            </div>
        </Link>
        
    </div>
  )
}

export default SneakerCard