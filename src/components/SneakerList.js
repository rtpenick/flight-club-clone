import React, {useState,useEffect} from 'react'
import SneakerCard from './SneakerCard'
import Pagination from './Pagination'

import Uptempo from '../assets/images/uptempos.jpeg'
import Vapormax from '../assets/images/NikeVapormax.jpeg'
import NikeDunkSB from '../assets/images/NikeDunkSB.jpeg'

import './ShoeStore.css'


const SneakerList = ({initialData, selectedModels}) => {
    const [shoes,setShoes] = useState(initialData)
    const [currentPage,setCurrentPage] = useState(1)
    // This number should be a multiple of 4. The page look better with 4 shoes in a row
    const [shoesPerPage, setShoesPerPage] = useState(8)


    // if selectedModels and selected brands are empty then show random list of sneakers 
    // or show the sneakers as they are in the list

    useEffect(() =>{
        // initialData.map(item => (
        //     console.log("inital data: " + item.name)
        // ))
    })


    useEffect(() =>{
        // console.log("Sneaker list- SelectedModels: " + selectedModels)
        console.log("Current page: " + currentPage)
    },[currentPage])

    
    // Get current shoes
    const indexOfLastShoe = currentPage * shoesPerPage
    const indexOfFirstShoe = indexOfLastShoe - shoesPerPage
    // Determines the amount of shoes will be shown
    const currentShoes = shoes.slice(indexOfFirstShoe, indexOfLastShoe)


    // this function is being passed as a prop
    const paginate = pageNumber =>  setCurrentPage(pageNumber)


    function testingClick(num){
        console.log("Clicked: " + num)
    }


    // function paginate(pageNumber){
    //     console.log("Selected page #: " + pageNumber)
    // }


    // const sneakers = initialData.map(sneaker => (
    const sneakers = currentShoes.map(sneaker => (
        <SneakerCard key={sneaker.id} sneakers={sneaker}/>
    ))

  return (
    <div className="sneakers">
        {sneakers}
        <Pagination shoesPerPage={shoesPerPage} totalShoes={shoes.length} paginate={paginate} testingClick={testingClick}/>
    </div>
  )
}

export default SneakerList