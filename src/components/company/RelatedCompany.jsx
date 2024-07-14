import React from 'react'
import './company.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CompanyData from './CompanyData'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function RelatedCompany() {
  return (
   <>
   
   {CompanyData.map((company)=>(
    <div key={company.id} className='border rounded-lg border-slate-300 mb-5'>
    <div>
    <img src={company.image} alt="" className='company-img ml-10' />
    
    </div>
    <div className=''>
        <h1 className='ml-10 font-quentiessential'>{company.title}</h1>
    </div>
    <div className='flex gap-1'>
    <h3 className='ml-10 font-quentiessential'><FontAwesomeIcon icon={faStar} className='text-yellow'/>{company.rating} | </h3>
    <h3 className='font-quentiessential '>{company.review}</h3>
    </div>
    <div>
        <p className='ml-10 font-zeyada'>{company.slogan}</p>
    </div>
    <div>
        <button className='ml-10 font-quentiessential text-xl bg-blue-100 hover:bg-blue-400 focus:ring-4 px-4 py-1 rounded-full'>View Jobs</button>
    </div>
  </div>
   ))}
   </>
  )
}

