import React from 'react'

const FilterModels = ({selectedModels,models}) => {

  function selectedModel(e){
    console.log("Selected model: " + e.target.value)
    // setSelectedModel(prev => [...prev, selectedModel])

    selectedModels(e.target.value)
  }

  return (
    <div className="filters">
        <details className="filterBy_brand">
          <summary className="filterBy_header">Model</summary>
          <form>
             {models.map(item => (
                <>
                    <input 
                      type="checkbox" 
                      onInput={selectedModel} 
                      id={item}
                      value={item}
                    />
                    <label htmlFor={item}>{item}</label>
                    <br></br>
                </>
             ))}
          </form>
        </details>
    </div>
  )
}

export default FilterModels