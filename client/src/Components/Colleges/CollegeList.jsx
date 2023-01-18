import React from 'react'
import SearchBar from '../Static/SearchBar'
import College from './College'
import MoreColleges from './MoreColleges'

const CollegeList = ({colleges, handleMoreColleges,search,setSearch}) => {
  const displayColleges=colleges.map(college=><College key={college.id} college={college.name}/>)

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
      {displayColleges}
      <MoreColleges handleMoreColleges={handleMoreColleges}/>
     
    </div>
  )
}

export default CollegeList