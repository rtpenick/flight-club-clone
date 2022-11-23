import React from 'react'
import SneakerNav from './SneakerNav'
import './ShoeStore.css'

const Banner = ({header,description}) => {
  return (
    <div className="Banner">
        <div className="Banner__nav">
            
        </div>
        <h2>{header}</h2>
        <p>{description}</p>
        {/*<h2>SHOP ALL SNEAKERS</h2>
  <p>The vault goes deep at Flight Club. Shop for new releases from must-have names like Air Jordan, Nike, New Balance and Yeezy, along with the latest collaborations from brands like Vans, Reebok, Converse, ASICS, and more. </p>*/}
    </div>
  )
}

export default Banner