import React from 'react'
import RelatedCompany from './RelatedCompany'
import './company.css'
export default function CompanyPost() {
  return (
    <div className='' id='company ml-50'>
        <div className='grid grid-cols-3 gap-4 company-try'>
        <RelatedCompany className='col-start-2 '/>
        </div>
        <div className='grid grid-cols-3 gap-4 company-try'>
        <RelatedCompany className='col-start-2 '/>
        </div>

    </div>
  )
}
