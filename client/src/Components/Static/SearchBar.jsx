import React from 'react'

const SearchBar = ({search,setSearch}) => {

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Colleges:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
        value={search}
      />
  </div>
  )
}

export default SearchBar