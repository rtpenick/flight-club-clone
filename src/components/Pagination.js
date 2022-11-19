import React from 'react'

const Pagination = ({shoesPerPage,totalShoes, paginate, testingClick}) => {
    const pageNumbers = []


    // this takes in the total amount of items to be displayed (shoes in this application) and divide them by the max amount of items to be displayed per page
    for(let i =1; i <= Math.ceil(totalShoes/shoesPerPage); i++) {
      // get correct amount of page numbers then add them to pageNumbers array
      pageNumbers.push(i)
    }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {/*display page numbers as links*/}
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination