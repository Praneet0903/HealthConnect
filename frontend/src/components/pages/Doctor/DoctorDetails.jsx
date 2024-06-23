import React from 'react'


const DoctorDetails = () => {
  return (
    <>
    <br/><br/>
    <section className=' bg-[#fff9ee]'>
        
    <div className='px-4 mx-auto max-w-screen-md '>
      <h2 className='heading text-center '> Schedule an Appointement!!</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text_para'>
        Lets get you the best schedule based on your interest.    
         </p>
         <p className='text-[30px] leading-6 text-primaryColor font-bold'>Patients info:</p>
         <br/><br/>
         <form action="#" className='space-y-8'>

         <div>
         <label htmlFor="username" className='form__lable'>Username:
            </label>
            <input type="text"
            id='username'
            placeholder='It should not contain any symbol or numbers'
            className='form__input mt-1' />
          </div>
          <div>
          <label htmlFor="email" className='form__lable'>Email:
            </label>
            <input type="email"
            id='email'
            placeholder='example@gmail.com'
            errorMessage="should be valid email"
            className='form__input mt-1' />
    
          </div>
          <div>
            <label htmlFor="Password" className='form__lable'>Password:
            </label>
            <input type="password"
            id='password'
            placeholder='password'
            errorMessage="invalid password"
            className='form__input mt-1' />
          </div>
          <div className='sm:col-span-2'>
          <label htmlFor="age" className='form__lable'>Age:
            </label>
            <input type="text"
            id='age'
            placeholder=''
            errorMessage=""
            className='form__input mt-1' />
          </div>
          <div>
            <label htmlFor="blood" className='form__lable'>Blood Group:
            </label>
            <input type="text"
            id='blood'
            placeholder='Blood Group'
            className='form__input mt-1' />
          </div>
          <div>
            <label htmlFor="Date" className='form__lable'>Booking Date:
            </label>
            <input type="Date"
            id='date'
            placeholder='date'
            className='form__input mt-1' />
          </div>
          <button type='submit' className='btn rounded-full sm:w-fit flex' >Book The Date</button>
          <button type='submit' className='btn rounded-full sm:w-fit ' >Vedio Conferencing</button>
          
         </form>
    </div>
    </section>
    </>
  )
}
export default DoctorDetails