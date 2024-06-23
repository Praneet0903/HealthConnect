import React from "react"
import DoctorCard from "../../Doctors/DoctorCard"
import { doctors } from "../../../assets/data/doctor"

const Doctors = () => {
  return (<>
  <br/><br/><br/><br/>
  <section className="bg-[#A8F0CB]" >
    <div className='container text-center'>
      <h2 className='heading text-[#1e293b]'>Our Specialists</h2>
      <div className="max-w-[570px] mt-[30px] mx-auto bg-[#FFFFFF] rounded-md flex items-center
      justify-between">
        <input type="search" className="  py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none
        cursor-pointer placeholder:text-textColor " placeholder="Search Doctor"/>
        <button className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
      </div>
    </div>
  </section>
  <section className="bg-[#A8F0CB]">
    <div className="container">
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-40 '>
        {doctors.map(doctor =>(
            <DoctorCard key ={doctor.id} doctor={doctor}/>
        ))}
    </div>

    </div>
  </section>
  </>
)}

export default Doctors