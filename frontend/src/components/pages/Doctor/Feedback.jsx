import {useState} from 'react'
import avatar from '../../../assets/images/avatar-icon.png';
import avatar2 from '../../../assets/images/avatar2.png';
import {AiFillStar} from 'react-icons/ai'
import FeedbackForm from './FeedbackForm';


const Feedback = () => {
    const [showFeedbackForm,setShowFeedbackForm]=useState(false)
  return (
    <><br/>    
    <div className='mb-[70px] bg-[#fff9ee]'>
        <h2 className='text-[50px] leading-[80px] font-bold text-center text-headingColor  mb-[30px]'>All reviews</h2>
        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
                <figure className='w-24 h-24 rounded-full' >
                   <img className='w-full' src={avatar} alt=''/>
                </figure>
                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold '>
                        Ali ahmed
                    </h5>
                    <p className='text-[14px] leading-6 text-textColor'>
                        {Date("02-14-2023")}
                    </p>
                    <p className='text_para mt-2 font-medium text-[15px]'>Good services,highly recommended, nice staff.Getting Treatment from Dr Prakash Sankapal for my father's Prostate issue. The doctor is very helpful and always available to us at any time. He gave the best solutions and treatment promptly. Nisha has helped us a lot with billing and the pre-post adm process. Looking forward to same for future.
                    </p>
                </div>
            </div>
            <div className='flex gap-1'>
                {[...Array(5).keys()].map((_,index)=><AiFillStar key={index} color='#ffa500'/>)}
            </div>
        </div>

        <br/><br/><br/><br/>
        <div className='flex justify-between gap-10 mb-[30px]'>
            <div className='flex gap-3'>
                <figure className='w-24 h-24 rounded-full' >
                   <img className='w-full' src={avatar2} alt=''/>
                </figure>
                <div>
                    <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                        Susmita Rai
                    </h5>
                    <p className='text-[14px] leading-6 text-textColor'>
                        {Date("")}
                    </p>
                    <p className='text_para mt-2 font-medium text-[15px]'>A dedicated team of doctors and nursing staff my heartfelt thanks to Dr. Zakia and Dr. Jayant who played the most important role in saving my life Dr. Zakia is an efficient and renowned doctor is a wonderful lady and patient-friendly. I wish both of them a very bright future 💐🙏
                    </p>
                </div>
            </div>
            <div className='flex gap-1'>
                {[...Array(5).keys()].map((_,index)=><AiFillStar key={index} color='#ffa500'/>)}
            </div>
        </div>
        {!showFeedbackForm && <div className='text-center'>
            <button className='btn' onClick={()=>setShowFeedbackForm(true)}>Give Feedback</button>
        </div>}
        {showFeedbackForm && <FeedbackForm/>}


    </div>
    </>

  )
}

export default Feedback