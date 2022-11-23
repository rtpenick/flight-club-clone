import React, {useState,useEffect} from 'react'
import SneakerCard from './SneakerCard'
import Pagination from './Pagination'

import './ShoeStore.css'


const SneakerList = ({initialData, selectedModels}) => {
    const [shoes,setShoes] = useState(initialData)
    const [currentPage,setCurrentPage] = useState(1)
    // This number should be a multiple of 4. The page look better with 4 shoes in a row
    const [shoesPerPage, setShoesPerPage] = useState(8)

    const [wereModelsSelected,setWereModelsSelected] = useState(false)
    const [modelsSelected, setModelsSelected] = useState([])

    // if selectedModels and selected brands are empty then show random list of sneakers 
    // or show the sneakers as they are in the list
    let sneakerList = []
    let result = []
    let currentShoes = []


    useEffect(() =>{
        // var result = initialData.filter( x => !selectedModels.includes(x.model));
        result = initialData.filter( x => selectedModels.includes(x.model));

        setWereModelsSelected(true)
        setModelsSelected(result)

        if(wereModelsSelected !== true){
            setShoes(initialData)
        }else{
            setShoes(result)
        }
    },[selectedModels])
    
    
    // Get current shoes
    const indexOfLastShoe = currentPage * shoesPerPage
    const indexOfFirstShoe = indexOfLastShoe - shoesPerPage
    // Determines the amount of shoes will be shown
    currentShoes = shoes.slice(indexOfFirstShoe, indexOfLastShoe)

    // this function is being passed as a prop
    const paginate = pageNumber =>  setCurrentPage(pageNumber)


    function testingClick(num){
        console.log("Clicked: " + num)
    }


    const sneakers = currentShoes.map(sneaker => (
        <SneakerCard 
            key={sneaker.id} 
            sneakers={sneaker}
            sneakerName={sneaker.name}
        />
    ))


  return (
    <div className="sneakers">
        {sneakers}
        <Pagination 
            shoesPerPage={shoesPerPage} 
            totalShoes={shoes.length} 
            paginate={paginate} 
            testingClick={testingClick}
        />
    </div>
  )
}

export default SneakerList