import React from 'react'
import './ShoeStore.css'

const FilterShoes = () => {
  return (
    <div className="filters">
        <details className="filterBy_brand">
          <summary className="filterBy_header">Model</summary>
          <form>
              <input type="checkbox" id="AirForce1"></input>
              <label htmlFor="AirForce1">Air Force 1</label>
              <br></br>

              <input type="checkbox" id="AirJordan1"></input>
              <label htmlFor="AirJordan1">Air Jordan 1</label>
              <br></br>

              <input type="checkbox" id="AirMax90"></input>
              <label htmlFor="AirMax90">Air Max 90</label>
              <br></br>

              <input type="checkbox" id="Blazer"></input>
              <label htmlFor="Blazer">Blazer</label>
              <br></br>

              <input type="checkbox" id="Chuck70"></input>
              <label htmlFor="Chuck70">Chuck 70</label>
              <br></br>
          </form>
        </details>
        

        <details className="filterBy_brand">
          <summary className="filterBy_header">Brand</summary>
          <form>
              <input type="checkbox" id="Addidas"></input>
              <label htmlFor="Addidas">Addidas</label>
              <br></br>

              <input type="checkbox" id="AirJordan"></input>
              <label htmlFor="AirJordan">Air Jordan</label>
              <br></br>

              <input type="checkbox" id="ASICS"></input>
              <label htmlFor="ASICS">ASICS</label>
              <br></br>

              <input type="checkbox" id="Converse"></input>
              <label htmlFor="Converse">Converse</label>
              <br></br>

              <input type="checkbox" id="NewBalance"></input>
              <label htmlFor="NewBalance">New Balance</label>
              <br></br>

              <input type="checkbox" id="Nike"></input>
              <label htmlFor="Nike">Nike</label>
              <br></br>
          </form>
        </details>
    </div>
  )
}

export default FilterShoes

