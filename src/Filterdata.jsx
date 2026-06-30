import React from 'react'
import { Formik } from 'formik'


const Filterdata = ({data,setdata}) => {

function Filterdatas(item,index){
    const results = data.filter((it,index)=>{
       return it === item
    })
    console.log(results,item,it)
    setdata(results)
}
return (
    <div className="px-4 mt-2">
  <div className="card shadow-sm border-0 p-4 rounded-4">

    <div className="row g-3 align-items-end">

     
      <div className="col-lg-3 col-md-6">
        <label className="form-label fw-bold">Search Employee</label>
        <input
          type="text"
          className="form-control filter-input"
          placeholder="Search by Name"
        />
      </div>

      <div className="col-lg-2 col-md-6">
        <label className="form-label fw-bold">Department</label>
        <select
          className="form-select filter-input"
         
        >
          <option value="">All Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Other">Other</option>
        </select>
      </div>

    
      <div className="col-lg-2 col-md-6">
        <label className="form-label fw-bold">Salary</label>
        <input
          type="number"
          className="form-control filter-input"
          placeholder="₹ Salary"
        />
      </div>

      
      <div className="col-lg-2 col-md-6">
        <label className="form-label fw-bold">Status</label>
        <select className="form-select filter-input">
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

    
      <div className="col-lg-3 col-md-12 d-flex gap-2">

        <button className="btn btn-primary w-100"  onChange={(e) => Filterdatas()}>
          Search
        </button>

        <button className="btn btn-outline-secondary w-100">
          Reset
        </button>

      </div>

    </div>

  </div>
</div>
)
}
export default Filterdata;