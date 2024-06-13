import React from 'react'
import avatar from '../../assets/images/profile.png'
// import img from '../../assets/images/checkup.jpg'
import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";

const Signup = () => {

  
  const [formdata, setFormData] = useState({
    name:'',
    email:"",
    password:"",
    password:'',
    photo:'',
    gender:'',
    role:"patient",
  });

  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({ ... formdata, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async event=>{
    const file = event.target.files[0];

    const data = await uploadImageToCloudinary(file);
    ////////////////
    setPreviewURL(data.url)
    setSelectedFile(data.url)
    setFormData({...formData, photo:data.url})
   
    
  };

  const submitHandler = async event=>{
    
    event.preventDefault();
    setLoading(true);

    try{
      const res = await fetch('${BASE_URL}/auth/signup',{
        method: "post",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      const { message }= await res.json();

      if(!res.ok){
        throw new Error(message);
      }

      setloading(false);
      Toast.success(message);
      navigate("/login");

    } catch(err){
      Toast.error(err.message);
      setloading(false);
    }
  };


  return (
    <> <br/>

    <section className='px-5 xl:px-0 '>
      <div className='max-w-[1170px] mx-auto '>
        <div className='hrid grid-cols-1 lg:grid-cols-2'>

          <div className='hidden lg:block bg-primaryColor  rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src='' alt="" className='w-full  rounded-l-lg'/>
            </figure>
          </div>


          <div className=' rounded-l-lg lg:pl-16 py-10 '>

    <p className='text-[30px] leading-30 text-headingColor font-bold text-[#059669]'>Registration:</p><br/><br/>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-18'>Create an <span className='text-primaryColor'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
            <div className='mb-5'>
            <input
             type="text" 
            placeholder='Full Name'
            name='name'
            value={formdata.name}
            onChange={handleInputChange}
            
            className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
            required/>
          </div>
            <div className='mb-5'>
            <input
             type="Email" 
            placeholder='Enter your email'
            name='email'
            value={formdata.email}
            onChange={handleInputChange}

            
            className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
            required/>
          </div>
            <div className='mb-5'>
            <input
             type="password" 
            placeholder='password'
            name='password'
            value={formdata.password}
            onChange={handleInputChange}
            
            className='w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer'
            required/>
          </div>

          <div className='mb-5 flex items-center justify-between'>
            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
              Are you a:
              <select name="role"
              value={formdata.role}
              onChange={handleInputChange}
               id="" className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                <option value="patient"> Patient</option>
                <option value="doctor">Doctor</option>
              </select>
            </label>

            <label htmlFor="" className='text-headingColor font-bold text-[16px] leading-7'>
              Gender:
              <select name="gender" 
              value={formdata.gender}
              onChange={handleInputChange}
              id="" className='text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                <option value=""> Select</option>
                <option value="male"> Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <div className='mb-5 flex items-center gap-3'>
            <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center'>
              <img src={avatar} alt="" className='w-full rounded-full' />
            </figure>

            <div className='relative w-[160px] h-[50px]'>
              <input
               type="file"
               name="photo"
               id='customFile'
               
              onChange={handleInputChange}
               accept='.jpg, .png' 
               className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>
           
           <label htmlFor="customFile"
           className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overFlow-hidden bg-[#0066ff46] text-headingColor 
           font-semibold  rounded-lg truncate cursor-pointer'>
            Upload photo
           </label>
            </div>
          </div>

          <div className="mt-7">
            <button type="submit" className="w-full bg-primaryColor text-white text-[18px]
             leading-[30px] rounded-lg">Sign up</button>
          </div>

          <p className="mt-5 text-textColor text-center">Already have an account?{" "}
          <Link to = "/login" className="text-primaryColor font-medium mt-1">Login</Link>

          </p>
            </form>
          </div>
        </div>
      </div>
    </section></>
  )
}

export default Signup