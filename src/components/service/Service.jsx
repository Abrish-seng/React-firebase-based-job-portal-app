import React from 'react'
import logo3 from '../../assets/logo4.jpg'
import home from '../home.css'
export default function Service() {
  return (
    <div className='flex justify-around items-center bg-gray-50 mt-20'>
        <img src={logo3} alt="" className='logo-3' />
        <div className=' flex items-center justify-around tech-hub'>
        <div>
            <h1 className='font-quentiessential text-xl font-bold'>Introducing Tech Hub</h1>
            <p className='font-quentiessential'>Discover powerful tools & tips that help you  </p>
            <p className='font-quentiessential'>prepare for every stage of your career</p>
        </div>
        <button className='border-2 rounded-full btn bg-blue-500 py-2'>Start Exploring</button>
        </div>
    </div>
  )
}
