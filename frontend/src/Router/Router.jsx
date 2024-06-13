import React from 'react'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import Login from '../components/pages/Login'
import Service from '../components/Service/Service'
import Doctors from '../components/pages/Doctor/Doctors'
import Signup from '../components/pages/Signup'
import DoctorDetails from '../components/pages/Doctor/DoctorDetails'
import {Routes, Route} from 'react-router-dom'


const Router = () => {
  return <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    
    <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/service' element={<Service/>}/>
   
  </Routes>
}

export default Router