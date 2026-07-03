import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Formik } from 'formik';

const Datatable = ({data,setdata,setfilter,seteditindex}) => {



const deletedata = (item,index) =>{
    const result = data.filter((it,ind)=>{
        return ind !== index
    })
    setdata(result)
    setfilter(result)
    
}

const Editdata = (_,index) =>{
  seteditindex(index)

  console.log(index)
}

return (
<div className="card shadow-lg m-5 p-3">
  <h3 className="mb-3">Employee List</h3>

  <table className="table table-bordered table-hover">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {data?.length > 0 ? (
        data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.Name}</td>
            <td>{item.Department}</td>
            <td>₹{item.Salary}</td>
            <td>
              <span
                className={`badge ${
                  item.Status === "Active"
                    ? "bg-success"
                    : "bg-danger"
                }`}
              >
                {item.Status}
              </span>
            </td>

            <td>
              <button className="btn btn-warning btn-sm me-2" onClick={()=>Editdata(item,index)}>
                Edit
              </button>

              <button className="btn btn-danger btn-sm" onClick={()=>deletedata(item,index)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center">
            No Employee Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

)
}
export default Datatable;