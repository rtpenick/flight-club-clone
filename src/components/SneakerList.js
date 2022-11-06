import React, {useState,useEffect} from 'react'
import SneakerCard from './SneakerCard'

import Uptempo from '../assets/images/uptempos.jpeg'
import Vapormax from '../assets/images/NikeVapormax.jpeg'
import NikeDunkSB from '../assets/images/NikeDunkSB.jpeg'

const SneakerList = ({initialData, selectedModels}) => {
    // if selectedModels and selected brands are empty then show random list of sneakers 
    // or show the sneakers as they are in the list

    useEffect(() =>{
        // initialData.map(item => (
        //     console.log("inital data: " + item.name)
        // ))
    })


    useEffect(() =>{
        // console.log("Sneaker list- SelectedModels: " + selectedModels)
    },[selectedModels])

    
    const sneakerList = [
        {
            id: 1,
            name: 'Uptempo',
            brand: 'Nike',
            price: 89,
            image: Uptempo
        },
        {   id: 2,
            name: "Nike Dunk SB",
            brand: "Nike",
            price: 89,
            image: NikeDunkSB
        },
        {   id: 3,
            name: "Vapormax",
            brand: "Nike",
            price: 258,
            image: Vapormax
        },
        {
            id: 4,
            name: 'Uptempo',
            brand: 'Nike',
            image: Uptempo
        },
        {   id: 5,
            name: "Nike Dunk SB",
            brand: "Nike",
            price: 112,
            image: NikeDunkSB
        },
        {   id: 6,
            name: "Vapormax",
            brand: "Nike",
            price: 145,
            image: Vapormax
        }
    ]


    const sneakers = initialData.map(sneaker => (
        <SneakerCard sneakers={sneaker}/>
    ))

  return (
    <div>
        {sneakers}
    </div>
  )
}

export default SneakerList