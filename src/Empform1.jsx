
import { Field, Formik, useFormik } from 'formik'

import React, { useEffect, useState } from 'react'
import { FcDepartment } from 'react-icons/fc'
import { GrMenu } from 'react-icons/gr'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { IoMdAdd } from 'react-icons/io'
import { RiMoneyRupeeCircleLine } from 'react-icons/ri'
import * as Yup from 'yup';
import Datatable from './Datatable'
import Filterdata from './Filterdata'
import Navset1 from './Navset1'
import { FiEdit3 } from 'react-icons/fi'


const Empform1 = () => {

    const [data, setdata] = useState([])
    const [filterdata, setfilter] = useState([])
    const [edit,seteditindex] = useState(null)
   

    useEffect(() => {
        let savedata = JSON.parse(localStorage.getItem("employee")) || []
        setdata(savedata)
        setfilter(savedata)
    }, [])
    useEffect(() => {
        localStorage.setItem("employee", JSON.stringify(data))
    }, [data])

    const formik = useFormik({
        initialValues: {
            Name: "",
            Department: "",
            Salary: "",
            Status: "",
        },

        validationSchema: Yup.object({
            Name: Yup.string()
                .matches(/^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-ž\s\-'\.]+$/, 'Please enter a valid name')
                .required('Name is required'),

            Department: Yup.string()
                .required('Field Select is Required'),

            Salary: Yup.string()
                .required('Salary is required'),

            Status: Yup.string()
                .required('Field Select is Required'),      
        }),
        onSubmit: (values, { resetForm }) => {
            if(edit == null){
            const updatedata = [...data, values]
            setdata(updatedata)
            setfilter(updatedata)
            }
            else{
                const updatedata = [...data]
                updatedata[edit] = values;
                setdata(updatedata);
                setfilter(updatedata)
                seteditindex(null)
            }
            console.log(data)
            resetForm();
        }

    })

    function datashow(){

        setfilter(data)
    }

    function activedata(){
        const result = filterdata.filter((item,index)=>{
             return item.Status === "Active"

        })
        console.log(result)
            setfilter(result)
    }


// useEffect(() => {
//   if (edit !== null && data[edit]) {
//     formik.setValues({
//       Name: data[edit].Name,
//       Department: data[edit].Department,
//       Salary: data[edit].Salary,
//       Status: data[edit].Status,
//     });
//   }
  
// }, [edit, data]);

useEffect(()=>{
    if(edit !== null && data[edit]){
        formik.setValues({
            Name: data[edit].Name,
            Department:data[edit].Department,
            Salary:data[edit].Salary,
            Status:data[edit].Status,
        })
    }
},[edit,data])

    return (

        <div>
            <div className='bg_set_1 d-flex justify-content-center'>
                <div className='card shadow-sm border-0 p-4 m-4 rounded-4 col-7'>
                    <h2 style={{ fontSize: "18px", color: "rgba(11, 11, 125, 1)" }} className='py-1'>Add New Employee</h2>
                    <div className='row gap-1'>

                        <form onSubmit={formik.handleSubmit}>
                            <div className='d-flex align-items-end gap-2'>
                                <div className='col-3'>
                                    <label htmlFor="Name" className='form-lable fw-bold'>Name</label>
                                    <input type="text"
                                        placeholder='Enter Your Name'
                                        className='form-control filter-input'
                                        id='Name'
                                        name='Name'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.Name}
                                    />
                                    {
                                        formik.touched.Name && formik.errors.Name ? (
                                            <div style={{ color: "red" }} >{formik.errors.Name}</div>
                                        ) : null
                                    }
                                </div>
                                <div className='col-3'>
                                    <label htmlFor="Department" className='form-lable fw-bold'>Department</label>
                                    <select name="Department" id="Department" onChange={formik.handleChange} value={formik.values.Department} className='form-control filter-input'>
                                        <option value="">Department</option>
                                        <option value="HR">HR</option>
                                        <option value="IT">IT</option>
                                        <option value="Finance">Finance</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    {
                                        formik.touched.Department && formik.errors.Department ? (
                                            <div style={{ color: "red" }} >{formik.errors.Department}</div>
                                        ) : null
                                    }
                                    {/* <label htmlFor="" style={{ fontWeight: "800" }}>Department</label>
                                   <input type="text" /> */}
                                </div>
                                <div className='col-3'>
                                    <label htmlFor="Salary" className='form-lable fw-bold'>Salary</label>
                                    <input type="text" className='form-control filter-input ' name='Salary' id='Salary' onChange={formik.handleChange} value={formik.values.Salary} />
                                    {
                                        formik.touched.Salary && formik.errors.Salary ? (
                                            <div style={{ color: "red" }} >{formik.errors.Salary}</div>
                                        ) : null
                                    }
                                </div>
                                <div className='col-2'>
                                    <label htmlFor="Status" className='form-lable fw-bold'>Status</label>
                                    <select name="Status" id="Status" className='form-control filter-input' onChange={formik.handleChange} value={formik.values.Status}>
                                        <option value="">Status</option>
                                        <option value="Active">Active</option>
                                        <option value="In Active">In Active</option>
                                    </select>
                                    {
                                        formik.touched.Status && formik.errors.Status ? (
                                            <div style={{ color: "red" }} >{formik.errors.Status}</div>
                                        ) : null
                                    }
                                </div>
                                <div >
                                    <button className='btn btn-success font-size' type='submit' style={{ fontSize: "16px" }} > {edit === null?<IoMdAdd /> : <FiEdit3 />} </button>
                                </div>

                            </div>


                        </form>
                    </div>

                </div>


                <div className='card shadow-sm border-0 p-2 m-4 rounded-4 col-4'>
                    <h2 style={{ fontSize: "18px", color: "rgba(39, 6, 101, 1)" }} className='py-2'>Quick Filters</h2>
                    <div className='d-flex justify-content-between '>
                        <div className='box-size  justify-content-center ' style={{ background: "#64abe2ff" }}>
                            <div style={{ fontSize: "40px", textAlign: "center" }}><HiOutlineUserGroup /></div>
                            <div onClick={datashow}>
                                <h5 className='text-center'>All Data</h5>
                            </div>

                        </div>
                        <div className='box-size justify-content-center' style={{ background: "#5175bfff" }} >
                            <div style={{ fontSize: "40px", textAlign: "center" }}><FcDepartment /> </div>
                            <div>
                                <h5 className='text-center' style={{ fontSize: "18px" }}>By Department</h5>

                            </div>


                        </div>
                        <div className='box-size justify-content-center' style={{ background: "#8c4ab0ff" }}>
                            <div style={{ fontSize: "40px", textAlign: "center" }}><RiMoneyRupeeCircleLine /> </div>
                            <div><h5 className='text-center'>By Salary</h5> </div>


                        </div>
                        <div className='box-size justify-content-center' style={{ background: "#57b97eff" }}>
                            <div style={{ fontSize: "40px", textAlign: "center" }} onClick={activedata}>< GrMenu /> </div>
                            <div><h5 className='text-center'>All Active</h5> </div>

                        </div>

                    </div>

                </div>
            </div>
            
            <Filterdata data={data} filterdata={filterdata} setfilter={ setfilter } />
            <Datatable data={filterdata} setdata={setdata} setfilter={setfilter} seteditindex={seteditindex}
            
/>
           


        </div>
    )

}
export default Empform1