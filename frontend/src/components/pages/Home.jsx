import React from 'react'
import { Link } from 'react-router-dom'
 import {BsArrowRight} from 'react-icons/bs'
 import photo1 from '../../assets/images/doc1.jpeg'
 import photo2 from '../../assets/images/doc2.jpg'
 import photo3 from '../../assets/images/doc5.jpg'
 import bgphoto from '../../assets/images/homeee.jpg'
import { About } from '../About/About'

const Home = () => {
  return  (
       <>
  {/* hero-section */}
  
  <section className='hero__section pt-[60px] 2xl:h-[800px]'>
    <div className='container'>
      <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
        {/* ===========hero content====== */}
        <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px]
            md:leading-[70px]'><></>
              We help patients live a healthy, longer life.
            </h1><br></br>
            <p className='text__para'>We’re on a mission for India to shift from curative to preventative care. Introducing Healthconnect+, where the world’s best Doctors and AI technology craft an individualised health plan for you so you can get on the path to wellness! It doesn’t end there, our Health Mentors will follow up with you till you don’t need us.  </p>
           
            <button className='btn'>Appointment</button>
          </div>

                  {/* hero-counter---------------------- */}

                  <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

                  </div>
        </div>


        <div className='flex gap-[30px] justify-end'>
            <div><img className='w-full' src={bgphoto} alt="" /></div>
        </div>

        <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'></h2>
      </div>
    </div>
  </section>
  
  

<section>
  <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing the best medical service
          </h2>
          <p className='text_para text-center'>
          World-class care for everyone</p>

        </div>

    

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px]'>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'><img src={photo1} alt="" />
              </div>
          

               <div className='mt-[30px'>
                 <h2 className='taxt-[26px] leading-9 text-headingColor font-[700] text-center'><b>Dr. Anoop Mishra</b></h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  "We help progressive organizations promote a culture of positive health and well-being among their employees through innovative and effective wellness solutions."
                 </p>
          
          


                     <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                      hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'><img src={photo2} alt="" />
              </div>
          

               <div className='mt-[30px'>
               <h2 className='taxt-[26px] leading-9 text-headingColor font-[700] text-center'><b>Dr. Anuj Dev</b></h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  "Healthconnect+ is a pioneer in delivering a wide range of preventive health and wellness solutions to the Indian corporate sector. With a talented clinical and corporate workforce, the company has served half a million customers and has anchored many health transformation journeys. In less than a decade, Healthconnect+ has a footprint of 50+ physical sites ."
                 
                 
                  </p>
          
          


                     <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                      hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'><img src={photo3} alt="" />
              </div>
          

               <div className='mt-[30px'>
               <h2 className='taxt-[26px] leading-9 text-headingColor font-[700] text-center'><b>Dr. Meena Singh</b>
</h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  "Proactive solutions and strategies to keeping good Health vs a reactive approach
Incorporate the latest research to improve and better solutions and strategies"
                   </p>
          
          


                     <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor
                      hover:border-none'>
                      <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                      </Link>
                </div>
            </div>

          </div>        
    
    </div>
  
  </section>


 {/* ---------------- About section start----------------------- */}

  <About/>

{/* 
  ----------------Sercvice sectiion--------- */}
<section>
  <div className='container'>
    <div className='xl:w-[470px] mx-auto'>
      <h2 className='heading text-center'>
        Our Medical Services
      </h2>
      <p className='text_para text-center'>
      Skilled clinical staff to manage medical support.<br></br>
      In-depth experience of the customized & tailored- services powered by seasoned experts<br></br>
      Periodic training and upskilling programs<br></br>
Professional account management<br></br>
Domain specialist (operations team)<br/>
5+ avg years of experience In house clinical team<br/>
        
      </p>
    </div>
  </div>
</section>




  
</>
  

)

}

export default Home