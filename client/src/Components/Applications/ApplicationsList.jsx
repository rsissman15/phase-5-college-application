import React from 'react'

const Applications = ({applications}) => {
    const renderApplications=applications.map(application=>application.name)
  return (
    <div>{renderApplications}</div>

  )
}

export default Applications