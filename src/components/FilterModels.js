import React from 'react'

const FilterModels = ({selectedModels,models}) => {

  // sort models alphabetically
  models.sort()

  function selectedModel(e){
    console.log("Selected model: " + e.target.value)
    selectedModels(prev => [...prev, e.target.value])

    // selectedModels(e.target.value)
    // selectedModels((prev) => e.target.value)
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
                      key={item.id}
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