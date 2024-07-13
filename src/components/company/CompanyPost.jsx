import React from 'react'
import RelatedCompany from './RelatedCompany'
import './company.css'
export default function CompanyPost() {
  return (
    <div className='grid grid-rows-2 grid-flow-col gap-4 ml-50' id='company'>
        <RelatedCompany class=""/>
        <RelatedCompany/>
        <RelatedCompany/>

    </div>
  )
}
