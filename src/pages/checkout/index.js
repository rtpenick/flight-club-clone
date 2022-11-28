import React from 'react'
import LeftContainer from './components/LeftContainer'
import RightContainer from './components/RightContainer'

import './styles.css'

const index = () => {
  return (
    <div className='Checkout'>
      {/* header bar */}
      <div className='Checkout_left_container'>
        <LeftContainer/>
      </div>

      <div className='Checkout_right_container'>
        <RightContainer/>
      </div>
    </div>
  )
}

export default index