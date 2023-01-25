import React from 'react'
import Box from '@mui/material/Box';


const SearchBar = ({search,setSearch}) => {

  const handleChange=(e)=>{
    setSearch(e.target.value)
  }
  return (
  

    <div className="searchbar">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <input
          style={{ height: 50, width: "50%", borderColor: 'black', borderWidth: 5,  marginBottom: 20 }}
          type="text"
          id="search"
          placeholder="Search Colleges..."
          onChange={handleChange}
          value={search}
          textAlign='center'
          fontWeight= 'bold'
    
            />



        </Box>
  
  </div>
  )
}

export default SearchBar