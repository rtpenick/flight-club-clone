import React from 'react'

const LeftContainer = () => {
  return (
    <>
        <div className='Checkout_left_container_header'>
          <p>Account</p>
        </div>

        <div className='Checkout_left_container_checkoutGuest'>
          {/* Button */}
          <button>CHECK OUT AS GUEST</button>
        </div>

        <div className='Checkout_left_container_Login'>
          <p>Check out with your Flight Club account</p>

          <label className='smallgray'>Email</label>
          <input type="text"/>

          <label className='smallgray'>Password</label>
          <input type="text"/>

          <a href='#' className='smallgray'>Forgot password</a>
          <button>LOGIN</button>
        </div>

        <div className='Checkout_left_container_shippingAddres'>

        </div>

        <div className='Checkout_left_container_shippingMethod'>

        </div>

        <div className='Checkout_left_container_paymentMethod'>

        </div>
    </>
  )
}

export default LeftContainer