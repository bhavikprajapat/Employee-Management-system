import React from 'react'
import { Formik } from 'formik'


const Filterdata = ({data,setdata}) => {

function Filterdata(item,index){
    const results = data.filter((item,index)=>{
        console.log(item)
    })
}
return (
    <div className=''>
        <div className='card d-flex mx-3'>
           
            <div className='d-flex px-5 align-items-center justify-content-between'>
                 <div className='m-4'>
                <input type="text" className='inp_pad' placeholder='Search By Name' />
            </div>
                <div>
                    <label htmlFor="Department" style={{ fontWeight: "800" }}>Department</label>
                    <select className='inp_pad' onClick={()=>Filterdata()}>
                        <option value="">Department</option>
                        <option value="HR">HR</option>
                        <option value="IT">IT</option>
                        <option value="Finance">Finance</option>
                        <option value="Other">Other</option>
                        
                    </select>
                    

                    {/* <label htmlFor="" style={{ fontWeight: "800" }}>Department</label>
                                            <input type="text" /> */}
                </div>
                <div>
                    <label htmlFor="Salary" style={{ fontWeight: "800" }}>Salary</label>
                    <input type="text"  className='inp_pad' name='Salary' id='Salary' />
                </div>
                <div className=''>
                    <label htmlFor="Status" style={{ fontWeight: "800" }}>Status</label>
                    <select name="Status" id="Status" className='inp_pad' >
                        <option value="">Status</option>
                        <option value="Active">Active</option>
                        <option value="In Active">In Active</option>
                    </select>
                </div>
                <div >
                    <button className='btn btn-success font-size' type='submit' style={{ fontSize: "16px" }} >Reset </button>
                </div>

            </div>


        </div>
    </div>
)
}
export default Filterdata;