import React, {useState,useEffect} from 'react'
import SneakerCard from './SneakerCard'
import storeInformation from '../data/storeLocations.json'

import Uptempo from '../assets/images/uptempos.jpeg'
import Vapormax from '../assets/images/NikeVapormax.jpeg'
import NikeDunkSB from '../assets/images/NikeDunkSB.jpeg'

const SneakerList = ({selectedModels}) => {
    useEffect(() =>{
        console.log("Sneaker list- SelectedModels: " + selectedModels)
    },[selectedModels])

    const sneakerList = [
        {
            id: 1,
            name: 'Uptempo',
            brand: 'Nike',
            image: Uptempo
        },
        {   id: 2,
            name: "Nike Dunk SB",
            brand: "Nike",
            image: NikeDunkSB
        },
        {   id: 3,
            name: "Vapormax",
            brand: "Nike",
            image: Vapormax
        }
    ]


    const sneakers = sneakerList.map(sneaker => (
        <SneakerCard sneakers={sneaker}/>
    ))

  return (
    <div>
        {sneakers}
    </div>
  )
}

export default SneakerList