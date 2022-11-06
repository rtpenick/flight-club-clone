import React, {createContext, useState, useEffect} from 'react'
import Banner from './Banner'
import './ShoeStore.css'
import SneakerList from './SneakerList'


import sneakerData from '../data/sneakerData2.json'
import FilterBrands from './FilterBrands'
import FilterModels from './FilterModels'
import Footer from './Footer'




const ShoeStore = () => {
  const [selectedBrand, setSelectedBrand] = useState([])
  const [selectedModel, setSelectedModel] = useState([])

  const brands = sneakerData.map(item => item.brand)
  const filteredBrands = [...new Set(brands)]

  const models = sneakerData.map(item => item.model)
  const filteredModels = [...new Set(models)]


  return (
    <div className="ShoeStore">
        <div className="ShoeStore__banner">
            <Banner/>
        </div>

        <div className="ShoeStore__filter">
          <FilterBrands 
            brands={filteredBrands}
          />
          
          <FilterModels 
            selectedModels={setSelectedModel} 
            models={filteredModels}
          />
        </div>

        <div className="ShoeStore__sneakerSection">
            <SneakerList initialData={sneakerData} selectedModels={selectedModel}/>
        </div>

        {/* <Footer/> */}
    </div>
  )
}

export default ShoeStore