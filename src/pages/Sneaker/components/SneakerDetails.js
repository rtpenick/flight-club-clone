import React from 'react'
import SneakerSizes from './SneakerSizes'

const SneakerDetails = ({setIsDrawerOpen,sneakerData}) => {
  return (
    <>
      <div className='Sneaker_name&brand'>
        {/* component */}
        <p className='Sneaker_rightContent_brand'>{sneakerData.brand}</p>
        <h2 className='Sneaker_rightContent_title'>{sneakerData.name}</h2>
      </div>
      <div className="Sneaker__sizes">
        <SneakerSizes sneakerData={sneakerData}/>
      </div>
            <div className="Sneaker_rightContent_btnSection">
                <div className='Sneaker_rightContent_btnSection_buttons'>
                    <div>
                        <p>BUY NEW</p>
                        <button 
                        type="button" 
                        className='priceBtn' 
                        onClick={() => setIsDrawerOpen(true)}
                        >
                        ${sneakerData.price}
                        </button>
                    </div>
                    <div>
                        <p>BUY USED</p>
                        <button type="button">Out of Stock</button>
                    </div>
                </div>
                <p>Pay in 4 interest-free payments with Klarna, Affirm or Afterpay. </p>
                <p>Shopping from </p>
            </div>
            <div className='Sneaker_aboutProduct'>
                <h4>About This Product</h4>
                {/* component */}
                <p className='Sneaker_description'>A new entry in the lineage of the Air Jordan 11, the 'Cherry' features a clean colorway that utilizes a Chicago Bulls inspired palette. The upper features white mesh with tonal webbing eyelets, while a shiny patent leather mudguard wraps around the entire shoe in a deep red hue. A red Jumpman logo appears on the back heel area, while a translucent rubber outsole finishes the look. A lightweight Phylon midsole provides cushioning while a carbon fiber spring plate offers structural support underfoot.</p>
            </div>
            <div className='Sneaker_shipping'>
                <h4>Shipping & Returns</h4>
                {/* component */}
            </div>
    </>
  )
}

export default SneakerDetails