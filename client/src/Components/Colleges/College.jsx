import React from 'react'

const College = ({college}) => {
  return (
    <div>
       <ul>
        {college}
        <button>Add Application</button>
        </ul>
        

    </div>
   
  )
}

export default College