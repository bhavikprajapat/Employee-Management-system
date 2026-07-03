import React from 'react'

const Navset1 = ({data}) => {
  return (
    <div className='nav_bg_set px-4 p-2 d-flex justify-content-between align-items-center'>
        <div>
        <h1>Employee Management System</h1>
        </div>
        <div>
            <button className='px-4 p-2 rounded '>Total Employee {data?.length}</button>
        </div>
        
    </div>
  )
}

export default Navset1