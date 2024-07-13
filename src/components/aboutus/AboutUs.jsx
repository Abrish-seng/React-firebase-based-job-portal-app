import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import jobsearch from '../../assets/jobsearch.jpg'
import logo2 from '../../assets/log2.jpg'
export default function AboutUs() {
  return (
    <div className='mt-20 border-t-4' id='aboutus'>
        <div className='flex  justify-around items-center  mb-10 mt-10'>
        <div>
        <img src={logo2} alt="" className='w-12 h-12' />
        <div>
            <h3 className='font-zeyada font-bold text-xl'>Contact with us</h3>
            <ul className='flex '>
                <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li className='ml-3 mr-3'><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                <li className='mr-3'><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>
        </div>
        </div>

        <div>
          <h3 className='font-nova'>About Us</h3>
          <h3 className='font-nova'>Careers</h3>
        </div>
        
        <div>
          <h3 className='font-nova'>Help center</h3>
          <h3 className='font-nova'>Report Issue</h3>
        </div>

        <div>
          <h3 className='font-nova'>Privacy Policy</h3>
          <h3 className='font-nova'>Terms and condition</h3>
        </div>
        <div>
       <img src={jobsearch} className = 'w-60 h-25' alt="" />
        </div>
    </div>
       
      
    <div>
      <h3 className='mt-5 text-center border-t-4 border-indigo-500 font-zeyada font-bold text-xl' >Copyright ©2024 Tech Hub Inc. All rights are reserved</h3>
    </div>
    </div>
  )
}
