import React from 'react'
import Banner from '../components/Banner'

const Apparel = () => {
  const header = "Apparel"
  const description = "Established in 2005 in New York City, Flight Club has been pioneering the way people shop for sneakers. Flight Club apparel celebrates the heritage of sportswear with windbreaker jackets, hoodies, T-shirts, duffle bags and hats available in various sizes and colors."


  return (
    <div className="Apparel">
      <div className="Apparel_banner">
          <Banner header={header} description={description}/>
      </div>
      <div className="Apparel_content">
          <div className='Apparel_filters'>
              <details>
                  <summary>Brand</summary>
                  <form>
                      <input
                        type="checkbox"
                        id="TestBox"
                      />
                      <label htmlFor="TestBox">Test</label>
                      <br></br>
                  </form>
              </details>
          </div>
          <div className='Apparel_items'>
          </div>
      </div>
    </div>
  )
}

export default Apparel