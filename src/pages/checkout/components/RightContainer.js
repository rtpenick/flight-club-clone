import React from 'react'

const RightContainer = () => {
  return (
    <>
        <div className='Checkout_right_container_header'>
          <p>Order Summary</p>
        </div>

        <div className='Checkout_right_container_sneakerDetails'>
          <img 
            src="https://cdn.flightclub.com/2200/TEMPLATE/800389/1.jpg" 
            alt="none"
            height={80}
            width={110}
           />
           <div>
              <p className='sneakerDetails_title'>Air Jordan 12 Retro 'Flu Game' 2016</p>
              <p className='smallgray'>US Size 9.5</p>
              <p className='sneakerDetails_price'>$343.00</p>
           </div>
          
        </div>

        <div className='Checkout_right_container_sneakerPriceSum'>
          <div className='Checkout_right_container_subtotal'>
            <span className='smallgray'>Subtotal</span>
            <span className='smallblack'>$339.00</span>
          </div>

          <div className='Checkout_right_container_shipping'>
            <span className='smallgray'>Shipping</span>
            <span className='smallblack'>$0.00</span>
          </div>

          <div className='Checkout_right_container_tax'>
            <span className='smallgray'>Tax</span>
            <span className='smallblack'>$0.00</span>
          </div>
        </div>

        <div className='Checkout_right_container_sneakerTotalAndOrder'>
          <div className='Checkout_right_container_orderTotal'>
            <span>Order Total</span>
            <span>$339.00</span>
          </div>

          <p className='smallgray'>By clicking "place order", I acknowledge that I have read and agree to the Terms & Conditions and the Privacy Policy.</p>
          {/* place order button */}
          <button>PLACE ORDER</button>
        </div>
    </>
  )
}

export default RightContainer