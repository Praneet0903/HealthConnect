import React from 'react'

import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.jpg'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai'

const socialLinks = [
  {
    path: "https://www.youtube.com/channel/UCY20fdMTDIJPRHMdfGNTpzg",
    icon: <AiFillYoutube className='group-hover:  w-4 h-5' />,
  },
  {
    path: "https://www.youtube.com/",
    icon: <AiFillGithub className='group-hover: w-4 h-5' />
  },
  {
    path:"https://www.youtube.com/" ,
    icon: <AiOutlineInstagram className='group-hover:  w-4 h-5' />
  },
  {
    path: "https://www.youtube.com/",
    icon: <RiLinkedinFill className='group-hover: w-4 h-5' />
  },
];

const quickLinks01 =[
  {
    path:"/Home",
    display: "Home",
  },
  {
    path:"/Services",
    display: "Services",
  },
  {
    path:"/Doctors",
    display: "find a doctor",
  },
]

const Footer = () => {
  const year = new Date().getFullYear();
  return (
<footer className='pb-16 pt-10'>
  <div className='container'>
    <div>
      <div>
        <img src={logo} alt="" />
        <p className='text- [16px] leading-7 font-[400]  text-textColor mt-4 ' >
          Copyright@ {year} developed by Muhibir Raman all right reserved.
        </p>
      

        <div className='flex items-center gap-3 mt-4 '>
          {socialLinks.map((link,index)=> (
            <Link 
            to = {link.path}
            key={index}
            className='w-11 h-11 border border-solid border-[#181A1E] rounded-full flex items-center
            justify-center group hover:bg-primaryColor hover:border-none' >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>

      <div>
      <br></br>
       <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick links</h2>
         <ul>
          {quickLinks01.map((item, index)=> 
            (<li key={index} className='mb-4'>
              <Link to={item.path}>{item.display}
              </Link>
            </li>
          ))}
         </ul>
       </div>
    </div>
  </div>
</footer>
  )
}

export default Footer