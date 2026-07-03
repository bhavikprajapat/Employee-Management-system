import React, { useState } from 'react'
import { Formik, useFormik } from 'formik'



const Filterdata = ({ data,setfilter,filterdata }) => {

 
  const formikfilter = useFormik({
    initialValues:{
      filtername:"",
      filterdep:"",
      filtersalary:"",
      filterstatus:""
    },
    onSubmit:()=>{
     
         
    }


  })

function Filterdatas() {

  const search = formikfilter.values.filtername.toLowerCase();

  const result = data.filter((item) => {
   
    const Namematch = formikfilter.values.filtername === "" || item.Name.toLowerCase().includes(search)

    const Departmentmatch = formikfilter.values.filterdep === ""  || item.Department === formikfilter.values.filterdep

    const Salarymatch = formikfilter.values.filtersalary === "" || Number(item.Salary) === Number(formikfilter.values.filtersalary)

    const Statusmatch = formikfilter.values.filterstatus === "" || item.Status === formikfilter.values.filterstatus

    return(
      Namematch && Departmentmatch && Salarymatch && Statusmatch 
    )
}
 
);

 

  
  setfilter(result);
}


function ResetFilter(){
  formikfilter.resetForm();
  setfilter(data)

}

// function Filterdatasdep(){
//   let search = formikfilter.values.filterdep

//   console.log(search)

//   let result  = data.filter((item)=>{
//     console.log(item.Department)
//       return item.Department === search
//   })
//    setfilter(result)
// }
  

 
  
  return (
    <div className="px-4 mt-2">
      <div className="card shadow-sm border-0 p-4 rounded-4">

        <div className="row  g-3 align-items-end">

        
            <div className="col-lg-3 col-md-6">
              <label htmlFor='filtername' className="form-label fw-bold">Search Employee</label>
              <input
                type="text"
                name='filtername'
                id='filtername'
                onBlur={formikfilter.handleBlur}
                onChange={(e)=>{formikfilter.handleChange(e)}}
                // onChange={formikfilter.handleChange}
                value={formikfilter.values.filtername}
                className="form-control filter-input"
                placeholder="Search by Name"
              />
            </div>

            <div className="col-lg-2 col-md-6">
              <label className="form-label fw-bold" htmlFor='filterdep'>Department</label>
              <select
                className="form-select filter-input"
                onChange={formikfilter.handleChange}
                id='filterdep'
                name='filterdep'
              
                value={formikfilter.values.filterdep}
              >
                <option value="">All Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
                <option value="Other">Other</option>
              </select>
            </div>


            <div className="col-lg-2 col-md-6">
              <label className="form-label fw-bold" htmlFor='filtersalary'>Salary</label>
              <input
                id='filtersalary'
                name='filtersalary'
                type="number"
                onChange={formikfilter.handleChange}
                value={formikfilter.values.filtersalary}
                className="form-control filter-input"
                placeholder="₹ Salary"
              />
            </div>


            <div className="col-lg-2 col-md-6">
              <label className="form-label fw-bold" htmlFor='filterstatus'>Status</label>
              <select className="form-select filter-input"
              name='filterstatus'
              id='filterstatus' 
              onChange={formikfilter.handleChange}
              value={formikfilter.values.filterstatus}
              >
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>


            <div className="col-lg-3 col-md-12 d-flex gap-2">

              <button className="btn btn-sm btn-primary w-100 " type='button'  onClick={Filterdatas}>
                Search
              </button>

              <button className="btn btn-outline-secondary w-100" onClick={ResetFilter}>
                Reset
              </button>

            </div>
            
           
         


        </div>

      </div>
    </div>
  )
}
export default Filterdata;