import React from 'react'
import {useParams} from 'react-router-dom'
import sneakers from '../../data/sneakerData.json'

import './styles.css'


const Index = () => {
  const params = useParams()
  console.log(params.name)
  console.log(sneakers)


  let sneakerPrice = 0
  let sneakerName = ""
  let sneakerBrand = ""
  let sneakerModel = ""
  let sneakerImage = ""

  for(let i=0;i<=sneakers.length-1;i++){
    if(sneakers[i].name === params.name){
        sneakerPrice = sneakers[i].price
        sneakerBrand = sneakers[i].brand
        sneakerModel = sneakers[i].model
        sneakerName = sneakers[i].name
        sneakerImage = sneakers[i].image

        console.log(sneakerBrand)
        console.log(sneakerModel)
        console.log(sneakerName)
        console.log(sneakerPrice)
    }
}

  return (
    <div className="Sneaker">
      <div className="Sneaker_image">
          <img 
            src={sneakerImage} 
            alt="none"
            height={350}
            width={500}
          />
      </div>
      <div className="Sneaker_rightContent">
          <div className='Sneaker_name&brand'>
              {/* component */}
              <h2>{params.name}</h2>
          </div>
          <div className="Sneaker__sizes">
              {/* component */}
          </div>
          <div className="Sneaker__buttons">
              <button type="button" className='priceBtn'>Price</button>
              <button type="button">Out of Stock</button>
          </div>
          <div className='Sneaker_aboutProduct'>
              <h4>About This Product</h4>
              {/* component */}
          </div>
          <div className='Sneaker_shipping'>
              <h4>Shipping & Returns</h4>
              {/* component */}
          </div>
      </div>
      <div className='Sneaker_recommendations'>
        {/* component */}
      </div>
    </div>
  )
}

export default Index