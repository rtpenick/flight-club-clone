import React from 'react'

const FilterBrands = ({brands}) => {
  return (
    <div className="filters">
        <details className="filterBy_brand">
          <summary className="filterBy_header">Brand</summary>
          <form>
            {brands.map(item =>(
                <>
                    <input type="checkbox" id={item}></input>
                    <label htmlFor={item}>{item}</label>
                    <br></br>
                </>
            ))}
          </form>
        </details>
    </div>
  )
}

export default FilterBrands