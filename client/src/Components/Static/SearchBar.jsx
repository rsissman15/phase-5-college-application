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
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'

            
          }}
          
        >

          <input
          style={{ height: 50, width: "50%", borderColor: 'black', borderWidth: 5,  marginBottom: 10,marginTop: 10 }}
          type="text"
          id="search"
          placeholder="Search Colleges..."
          onChange={handleChange}
          value={search}
          fontWeight= 'bold'
    
            />



        </Box>
  
  </div>
  )
}

export default SearchBar