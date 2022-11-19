import React from 'react'

const FilterBrands = ({brands}) => {

  // sort brands alphabetically
  brands.sort()
  
  return (
    <div className="filters">
        <details className="filterBy_brand">
          <summary className="filterBy_header">Brand</summary>
          <form>
            {brands.map(item =>(
                <>
                    <input type="checkbox" id={item} key={item.id}></input>
                    <label htmlFor={item} key={item.id}>{item}</label>
                    <br></br>
                </>
            ))}
          </form>
        </details>
    </div>
  )
}

export default FilterBrands