import React from 'react'
import  about from '../../assets/images/home.jpg'
import { Link } from 'react-router-dom'

export const About = () => {

  return <section>
  <div className='container'>
    <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-5 flex-col lg:flex-row'>
        <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-z lg:order-1'>
            <img src={about} alt="" />
        </div>
    

    <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
      <h2 className='heading'>Proud to be one of the nations best</h2>
      <p className='text_para'><h3><b>Our Vision, Mission and Values:</b></h3><br></br>
<b><u>Vision</u></b>: To be a trusted, people-centric integrated healthcare system as a model for global healthcare.
<br/>
<b><u>Mission:</u></b> To provide the best and cost-effective care, accessible to every patient through integrated clinical practice, education and research.
<br/>
<b><u>Values:</u></b><br></br>
<b>Transparency:</b> Being transparent requires courage and we stand for transparency. <br/>
<b>Teamwork:</b> A collaborative work ecosystem is where all the collective efficiencies are harnessed and propelled towards delivering the best possible care.<br/>
<b>Empathy & Compassion:</b> The ability to understand and respond to the feelings of both the patients and the employees, so that all the services are rendered in a supportive work environment with a humane touch.<br/>
<b>Excellence:</b> When every action aims at enhancing quality, the outcome is always excellence. Each member in our team strives with the same intensity in every action, be it healthcare or any other dimension of the organisational processes.<br/>
<b>Education</b>: Learning continuously to create an advanced and sustainable healthcare system that results in collective growth of both the employees and the organization.<br/>
<b>Equity:</b> Mutual trust based on fair and impartial consideration of all professional matters, so that it can foster positive contribution towards the institutional purpose.<br/>
<b>Mutual trust & respect:</b> We do not discriminate against anyone on any grounds. Respect is a traditional trait in us and we respect everyone, for we believe that trust grows respect, which forms the foundation of real success.<br/>
      </p></div>
    </div>

    </div>
  </section>
}

export default About;

