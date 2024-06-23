import React from 'react'

const Contact = () => {
  return (
    <section>
    <div className='px-4 mx-auto max-w-screen-md '>
      <h2 className='heading text-center '>Contact Us</h2>
      <p className='mb-8 lg:mb-16 font-light text-center text_para'>
        Got a technical issue? Want to send feedback about a beta feature? Let us know.    
         </p>
         <form action="#" className='space-y-8'>
          <div>
            <label htmlFor="email" className='form__lable'>Your email
            </label>
            <input type="email"
            id='email'
            placeholder='example@gmail.com'
            className='form__input mt-1' />
    
          </div>
          <div>
            <label htmlFor="Subject" className='form__lable'>Subject
            </label>
            <input type="text"
            id='Subject'
            placeholder='let us know how we can help you'
            className='form__input mt-1' />
    
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message " className='form__lable'>Your Message
            </label>
            <input
            rows="6"
            type="text"
            id='messagel'
            placeholder='leave a comment...'
            className='form__input mt-1' />
    
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
         </form>
    </div>
    </section>
  );
};

export default Contact;