import React from 'react'


const Pagination = ({collegesPerPage, totalColleges,paginate}) => {
    const pageNumbers=[];

    for (let i=1; i<=Math.ceil(totalColleges/collegesPerPage);i++){
        pageNumbers.push(i)

    }

   const renderPageNumbers=pageNumbers.map(number=>  <li className='page-item'>
   <a onClick={()=>paginate(number)} className='page-link'> {number}</a>

 </li>)
    
  return (
    <nav className='pagination'>
        {renderPageNumbers}
    </nav>
  )
}

export default Pagination