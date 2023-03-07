import React from 'react'
import { Button } from 'react-bootstrap';


const Pagination = ({collegesPerPage, totalColleges,paginate}) => {
    const pageNumbers=[];

    for (let i=1; i<=Math.ceil(totalColleges/collegesPerPage);i++){
        pageNumbers.push(i)

    }

   const renderPageNumbers=pageNumbers.map(number=>  <li key={number} className='page-item'>
   <Button  onClick={()=>paginate(number)} className='page-link'> {number}</Button>

 </li>)
    
  return (
    <nav className='pagination'>
        {renderPageNumbers}
    </nav>
  )
}

export default Pagination