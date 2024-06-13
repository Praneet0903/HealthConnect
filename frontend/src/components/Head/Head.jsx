import {useEffect, useRef} from 'react'
import logo from '../../assets/images/logo.jpg'
import userimg from '../../assets/images/profile.png'
import {NavLink,Link} from 'react-router-dom'
import {BiMenu} from "react-icons/bi"



const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a doctor'
  },
  {
    path:'/service',
    display:'Feedback Ratings'
  },
  {
    path:'/contact',
    display:'Contact'
  },
]

const Head = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)

  const handleStickyHeader =() =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80|| document.documentElement.scrollTop >80){
      
      headerRef.current.classList.add('sticky_header')
    }else{
      headerRef.current.classList.remove('sticky_header')
    }
    })
  }

  useEffect(()=>{
    handleStickyHeader()

    return ()=> window.removeEventListener('scroll',handleStickyHeader);

  });
  const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu')


  return   (
    <header className='header flex items-center' ref={headerRef} onClick={toggleMenu}>
    <div className='container' >
      <div className='flex items-center justify-between'>
        <div>
          <br></br>
          <img src={logo} alt="" className='' />
          </div>

          {/* menu */}
          <div className='navigation'>
                <ul className='menu flex items-center gap-[2.8rem]'>
{
  navLinks.map((link,index)=>(
  <li key ={index}>
    <NavLink
    to={link.path}
    className={navClass =>
      navClass.isActive
          ?'text-primaryColor text-[18px] leading-7 font-[600]'
          : 'text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor '
          }
          >
            {link.display}
          </NavLink>

          </li>
          ))
          }
                </ul>
          </div>
                       {/* nav right */}
              <div className='flex items-center gap-4'>
                 <div className='hidden'>
                  <Link to="/">
                      <figure>
                        <img src={userimg} className='w-full rounded-full cursor-pointer'  alt="" />
                      </figure>
                  </Link>
                 </div>

                 <Link to='/Login'>
                  <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                   flex items-center justify-center rounded-[50px]'>
                    Login
                   </button>
                 </Link>

                 <span className='md:hidden' onClick ={toggleMenu}>
                  <BiMenu className="w-6 h-6 cursor-pointer"/>
                 </span>
              </div>
          </div >
          </div>
    </header>
  )
}

export default Head