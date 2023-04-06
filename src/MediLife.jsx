import React from 'react'
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function MediLife() {
    const[user,setUser]=useState("")
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (() => alert("Appointment was booked"));


    return (
        <section>
            <div className="register">
                <div className="col-1">
                    <h2>Book Appointment</h2>
                    <span>Meet the Best Doctor</span>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("name")} placeholder='name' />
                        <input type="text" {...register("address")}placeholder='Address' />
                        <input type="text" {...register("email")}placeholder='example@gmail.com' />
                        <input type="text" {...register("mobile", {required : true , maxLength:10})}placeholder='mobile number' />
                        {errors.mobile?.type === "required" && "Mobile Number is required"}
                        {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                        <select id="doctor" onChange={((e)=> {
                            const selectedDoctor=e.target.value;
                            setUser(selectedDoctor)})
                        }>
                            <optgroup label="OnDuty Doctors">
                                <option id="select" value="">Available Doctors</option>
                                <option id="select" value="Magesh">Dr.Magesh</option>
                                <option id="select" value="Vignesh">Dr.vignesh</option>
                            </optgroup>
                            <optgroup label="Special Doctors">
                                <option id="select" value="Vikram">Dr.Vikram</option>
                                <option id="select" value="Suganthi">Dr.Suganthi</option>
                                <option id="select" value="Ganesh">Dr.Ganesh</option>
                            </optgroup>
                        </select> 
                        <h3>Consulting Doctor : {user}</h3>                     
                        <button className='btn'>Book Appointment</button>
                    </form>

                </div>
                <div className="col-2">
                <img src={`https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?size=626&ext=jpg&ga=GA1.2.1639543810.1674883639&semt=sph`} alt="" />
                </div>
            </div>
        </section>
    )
}