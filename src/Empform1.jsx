
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


const Empform1 = () => {
   
        const [data, setdata] = useState([])
        const [filterdata, setfilter] = useState([])

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
                const updatedata = [...data, values]
                setdata(updatedata)
                setfilter(updatedata)

                console.log(data)
                resetForm();
            }

        })
        return (

            <div>
                <div className='bg_set_1 d-flex justify-content-center'>
                    <div className='card shadow-md mx-1 m-5 mt-3 p-5 col-7'>
                        <h2 style={{ fontSize: "18px", color: "rgba(11, 11, 125, 1)" }} className='py-1'>Add New Employee</h2>
                        <div>

                            <form onSubmit={formik.handleSubmit}>
                                <div className='d-flex gap-2 align-items-end'>
                                    <div>
                                        <label htmlFor="Name" style={{ fontWeight: "800" }}>Name</label>
                                        <input type="text"
                                            placeholder='Enter Your Name'
                                            className='input_pad'
                                            id='Name'
                                            name='Name'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Name}
                                        />
                                        {
                                            formik.touched.Name && formik.errors.Name ? (
                                                <div style={{ color: "black" }} >{formik.errors.Name}</div>
                                            ) : null
                                        }
                                    </div>
                                    <div>
                                        <label htmlFor="Department" style={{ fontWeight: "800" }}>Department</label>
                                        <select name="Department" id="Department" onChange={formik.handleChange} value={formik.values.Department} className='input_pad'>
                                            <option value="">Department</option>
                                            <option value="HR">HR</option>
                                            <option value="IT">IT</option>
                                            <option value="Finance">Finance</option>
                                            <option value="Other">Other</option>
                                        </select>
                                        {
                                            formik.touched.Department && formik.errors.Department ? (
                                                <div style={{ color: "black" }} >{formik.errors.Department}</div>
                                            ) : null
                                        }
                                        {/* <label htmlFor="" style={{ fontWeight: "800" }}>Department</label>
                                   <input type="text" /> */}
                                    </div>
                                    <div>
                                        <label htmlFor="Salary" style={{ fontWeight: "800" }}>Salary</label>
                                        <input type="text" className='input_pad' name='Salary' id='Salary' onChange={formik.handleChange} value={formik.values.Salary} />
                                        {
                                            formik.touched.Salary && formik.errors.Salary ? (
                                                <div style={{ color: "black" }} >{formik.errors.Salary}</div>
                                            ) : null
                                        }
                                    </div>
                                    <div className=''>
                                        <label htmlFor="Status" style={{ fontWeight: "800" }}>Status</label>
                                        <select name="Status" id="Status" className='input_pad' onChange={formik.handleChange} value={formik.values.Status}>
                                            <option value="">Status</option>
                                            <option value="Active">Active</option>
                                            <option value="In Active">In Active</option>
                                        </select>
                                        {
                                            formik.touched.Status && formik.errors.Status ? (
                                                <div style={{ color: "black" }} >{formik.errors.Status}</div>
                                            ) : null
                                        }
                                    </div>
                                    <div >
                                        <button className='btn btn-success font-size' type='submit' style={{ fontSize: "16px" }} ><IoMdAdd /> </button>
                                    </div>

                                </div>


                            </form>
                        </div>

                    </div>


                    <div className='card shadow-md m-5 mt-3 d-flex justify-content-center p-2 col-4'>
                        <h2 style={{ fontSize: "18px", color: "rgba(39, 6, 101, 1)" }} className='py-2'>Quick Filters</h2>
                        <div className='d-flex justify-content-between '>
                            <div className='box-size  justify-content-center ' style={{ background: "#64abe2ff" }}>
                                <div style={{ fontSize: "40px", textAlign: "center" }}><HiOutlineUserGroup /></div>
                                <div>
                                    <h5 className='text-center'>All Data</h5>
                                </div>

                            </div>
                            <div className='box-size justify-content-center' style={{ background: "#5175bfff" }}>
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
                                <div style={{ fontSize: "40px", textAlign: "center" }}>< GrMenu /> </div>
                                <div><h5 className='text-center'>All Active</h5> </div>

                            </div>

                        </div>

                    </div>
                </div>
                <Filterdata filterdata={filterdata} setfilterdata={setfilter} data={data} setdata={{ setdata }} />
             <Datatable data={data} setdata={setdata} filterdata={filterdata} setfilterdata={setfilter} />


            </div>
        )
   
    }
    export default Empform1